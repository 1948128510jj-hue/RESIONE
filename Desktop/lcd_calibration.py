import numpy as np
import cv2
from PIL import Image
import os
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

# 解决中文显示问题
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False


def read_12bit_tiff(file_path: str) -> np.ndarray:
    """
    读取12bit无压缩TIFF原始灰度图，返回float32数组
    :param file_path: 图片文件路径
    :return: 二维灰度数组（值域0~4095）
    """
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"文件不存在：{file_path}")
    img = Image.open(file_path)
    return np.array(img, dtype=np.float32)


def dark_correct(light_img: np.ndarray, dark_img: np.ndarray) -> np.ndarray:
    """
    暗场校正：亮场减暗场，消除传感器底噪与固定杂反射
    :param light_img: 亮场原始图
    :param dark_img: 暗场原始图
    :return: 校正后有效灰度图
    """
    corrected = light_img - dark_img
    corrected[corrected < 0] = 0  # 剔除负向噪声
    return corrected


def select_roi(raw_image: np.ndarray) -> np.ndarray:
    """
    手动框选有效发光区域（回车确认，ESC取消）
    :param raw_image: 校正后灰度图
    :return: 裁切后的ROI区域
    """
    # 归一化显示，避免12bit图预览全黑
    display_img = cv2.normalize(raw_image, None, 0, 65535, cv2.NORM_MINMAX, dtype=cv2.CV_16U)
    roi = cv2.selectROI("框选有效发光区域（回车确认，ESC取消）", display_img, showCrosshair=True)
    cv2.destroyAllWindows()
    x, y, w, h = roi
    if w == 0 or h == 0:
        raise ValueError("未框选有效区域")
    return raw_image[y:y+h, x:x+w]


def calc_block_ki(
        roi_img: np.ndarray,
        row_num: int = 5,
        col_num: int = 12,
        ki_min: float = 0.6,
        ki_max: float = 1.5
) -> tuple[list[float], list[float]]:
    """
    划分网格分区，计算每个分区的平均灰度与补偿系数Ki
    :param roi_img: 裁切后的有效区域图像
    :param row_num: 分区行数
    :param col_num: 分区列数
    :param ki_min: Ki系数下限
    :param ki_max: Ki系数上限
    :return: (Ki系数列表, 分区平均灰度列表)，行优先顺序
    """
    h, w = roi_img.shape
    block_w = w // col_num
    block_h = h // row_num

    block_avg_list = []
    # 逐行逐列遍历分区
    for r in range(row_num):
        for c in range(col_num):
            x1 = c * block_w
            y1 = r * block_h
            x2 = x1 + block_w
            y2 = y1 + block_h
            block = roi_img[y1:y2, x1:x2]
            block_avg_list.append(float(np.mean(block)))

    # 全场基准平均灰度
    global_avg = float(np.mean(block_avg_list))
    ki_list = []
    for avg_val in block_avg_list:
        if avg_val < 1e-6:
            ki = 1.0
        else:
            ki = global_avg / avg_val
        # 硬限幅，防止硬件异常导致极端补偿
        ki = float(np.clip(ki, ki_min, ki_max))
        ki_list.append(round(ki, 4))

    return ki_list, block_avg_list


def plot_roi_3d_surface(roi_img: np.ndarray, downsample: int = 8):
    """
    绘制ROI区域灰度3D曲面图，直观展示整体光场分布
    :param roi_img: 校正后的ROI灰度图
    :param downsample: 降采样系数，避免像素过多卡顿
    """
    img_ds = roi_img[::downsample, ::downsample]
    h, w = img_ds.shape
    x = np.arange(w)
    y = np.arange(h)
    X, Y = np.meshgrid(x, y)
    Z = img_ds

    fig = plt.figure(figsize=(10, 7))
    ax = fig.add_subplot(111, projection='3d')
    surf = ax.plot_surface(X, Y, Z, cmap='jet', edgecolor='none', alpha=0.85)

    ax.set_xlabel('横向像素')
    ax.set_ylabel('纵向像素')
    ax.set_zlabel('灰度值（12bit）')
    ax.set_title('屏幕光场灰度3D分布')
    fig.colorbar(surf, shrink=0.5, aspect=10, label='灰度值')
    ax.view_init(elev=30, azim=-45)
    plt.tight_layout()
    plt.show()


def plot_block_3d(
        value_list: list[float],
        row_num: int = 5,
        col_num: int = 12,
        title: str = "分区数值分布",
        zlabel: str = "数值"
):
    """
    绘制分区3D柱状图，展示各分区灰度或Ki系数差异
    """
    value_matrix = np.array(value_list).reshape(row_num, col_num)
    x = np.arange(col_num)
    y = np.arange(row_num)
    X, Y = np.meshgrid(x, y)
    Z_base = np.zeros_like(value_matrix)
    dx, dy = 0.8, 0.8

    fig = plt.figure(figsize=(12, 7))
    ax = fig.add_subplot(111, projection='3d')
    ax.bar3d(
        X.ravel(), Y.ravel(), Z_base.ravel(),
        dx, dy, value_matrix.ravel(),
        cmap='jet', alpha=0.8
    )

    ax.set_xlabel('列号')
    ax.set_ylabel('行号')
    ax.set_zlabel(zlabel)
    ax.set_title(title)
    ax.set_xticks(np.arange(col_num) + dx/2)
    ax.set_xticklabels([f'{i+1}' for i in range(col_num)])
    ax.set_yticks(np.arange(row_num) + dy/2)
    ax.set_yticklabels([f'{i+1}' for i in range(row_num)])

    ax.view_init(elev=30, azim=-50)
    plt.tight_layout()
    plt.show()


if __name__ == "__main__":
    # ====================== 配置参数区（按需修改） ======================
    # 图片文件路径
    DARK_IMG_PATH = "dark_12bit.tif"   # 暗场图路径
    LIGHT_IMG_PATH = "light_12bit.tif" # 亮场图路径
    # 分区规格
    ROW_COUNT = 5    # 分区行数
    COL_COUNT = 12   # 分区列数
    # Ki系数限幅
    KI_LIMIT_MIN = 0.6
    KI_LIMIT_MAX = 1.5
    # 3D可视化开关
    ENABLE_3D_PLOT = True
    # ==================================================================

    # 1. 读取原始图像
    dark_raw = read_12bit_tiff(DARK_IMG_PATH)
    light_raw = read_12bit_tiff(LIGHT_IMG_PATH)

    # 2. 暗场校正
    corrected_img = dark_correct(light_raw, dark_raw)

    # 3. 框选有效发光区域
    screen_roi = select_roi(corrected_img)

    # 4. 计算分区平均灰度与补偿系数
    ki_result, gray_avg_result = calc_block_ki(
        roi_img=screen_roi,
        row_num=ROW_COUNT,
        col_num=COL_COUNT,
        ki_min=KI_LIMIT_MIN,
        ki_max=KI_LIMIT_MAX
    )

    # 5. 控制台输出结果
    print("=" * 70)
    print(f"【{ROW_COUNT}行×{COL_COUNT}列 分区补偿系数 Ki（行优先）】")
    print("=" * 70)
    for row_idx in range(ROW_COUNT):
        start = row_idx * COL_COUNT
        end = start + COL_COUNT
        row_data = ki_result[start:end]
        print(f"第{row_idx+1}行：{row_data}")

    print("\n【一维完整数组（可直接写入设备/标签）】")
    print(ki_result)

    # 6. 保存结果到文件
    with open("calibration_result.txt", "w", encoding="utf-8") as f:
        f.write("分区补偿系数Ki（行优先）：\n")
        f.write(str(ki_result))
        f.write("\n\n分区平均灰度：\n")
        f.write(str(gray_avg_result))
    print("\n✅ 计算完成，结果已保存到 calibration_result.txt")

    # 7. 3D可视化
    if ENABLE_3D_PLOT:
        plot_roi_3d_surface(screen_roi)
        plot_block_3d(gray_avg_result, ROW_COUNT, COL_COUNT, "分区平均灰度分布", "平均灰度值")
        plot_block_3d(ki_result, ROW_COUNT, COL_COUNT, "分区补偿系数Ki分布", "Ki系数")
