"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { ALL_PRODUCTS } from "@/lib/products-data";

type CardType = "product" | "spec" | "company" | "category" | "application" | "cleaning";
interface KnowledgeCard { id: number; type: CardType; question: string; answer: string; hint?: string; category: string; }

function generateCards(): KnowledgeCard[] {
  const cards: KnowledgeCard[] = []; let id = 0;
  const add = (type: CardType, cat: string, q: string, a: string, h = "") => { cards.push({ id: id++, type, category: cat, question: q, answer: a, hint: h }); };

  // Company (7)
  add("company","公司信息","RESIONE 母公司全称？成立于哪一年？","东莞市神说科技有限公司 (Dongguan Godsaid Technology Co., Ltd.)，2016年10月成立","神说 = Godsaid");
  add("company","公司信息","RESIONE 品牌名的含义？","RESIN（树脂）+ ONE（第一）= 立志做树脂领域的第一名","拆分为两个英文单词");
  add("company","公司信息","产品销往多少个国家？","近 60 个国家，覆盖欧盟、美国、日本、俄罗斯等","Global B2B");
  add("company","公司信息","研发与生产定位？","专注高性能3D打印光敏树脂材料研发与制造，全部产品自主生产(In-House)，充足产能","R&D + Manufacturing");
  add("company","公司信息","通过哪些国际认证？","RoHS 认证、REACH 合规。注意：ISO 9001 尚未取得。","认证资质");
  add("company","公司信息","有多少款产品？几大品类？","33+ 款产品，8大品类：耐高温(1)、标准(1)、水洗(3)、类ABS坚韧(10)、抗冲击尼龙(3)、柔性弹性(6)、牙科(4)、高性能弹性体(6)","产品矩阵");
  add("company","公司信息","核心竞争优势是什么？","1)全自主生产（非代工）2)配方面向最终用途零件 3)超低吸水率（Anti-impact 0.45% vs 行业2-3%）4)TH-MINI 60-66 J/m冲击行业领先","竞品对比");

  // Naming (10)
  add("company","命名规则","'C' 前缀代表什么？","C = Casting（铸造）。例：C01 牙科铸造树脂，失蜡铸造用","前缀含义");
  add("company","命名规则","'GM' 前缀代表什么？","GM = Gingiva Mask（牙龈模拟）。例：GM01 超软牙龈树脂，50A","前缀含义");
  add("company","命名规则","'HT-' 前缀代表什么？","HT- = High Temperature（耐高温）。例：HT-Enduse 长期耐140度","前缀含义");
  add("company","命名规则","'CL-' 前缀代表什么？","CL- = Colored（彩色）。例：CL-TH 9种高饱和颜色，可互混","前缀含义");
  add("company","命名规则","'TH-' 前缀代表什么？","TH- = Tough & Hard（坚韧系列）。例：TH-BJD、TH-WW、TH-HR、TH72、TH-MINI","前缀含义");
  add("company","命名规则","EB/EHP/EL 系列区别？","EB=基础弹性体(热处理,8h打印寿命) | EHP=高性能弹性体(高压蒸汽,15天) | EL=高UV兼容弹性体(15天)","弹性体系列");
  add("company","命名规则","'SP' 代表什么？","SP = Standard Pro（标准专业）。SP64 是唯一的标准树脂","前缀含义");
  add("company","命名规则","F 系列命名逻辑？","F = Flexible（柔性）。F69=黑色 F39=白色 F39T=透明 F80=牙龈/轮胎 FX60=LITLIQ子品牌","系列命名");
  add("company","命名规则","K 和 K+ 的区别？","K=基础黑(83D,24-34J/m) | K+=纯黑升级(85D,31-35J/m,0.30%超低吸水,注塑级外观,可短期水下)","同系列对比");
  add("company","命名规则","D01 和 D01S 的区别？","D01=黄赭色,85-90D,耐短时高温(真空成型) | D01S=贝壳米色,92D,含无机填料,石膏质感,超低收缩","同系列对比");

  // Categories (6)
  add("category","品类知识","水洗树脂三款如何区分？","WW123:12mPas近水流动性,高速打印,多彩色,日常首选 | WW-ABS:不脆(16%伸长率),高成功率,REACH合规 | TH-WW:坚韧水洗(24%伸长率,28.9J/m),耐磨低变形","水洗三剑客");
  add("category","品类知识","类ABS坚韧系列包含哪些？","10款:M58(灰88D),M68(白87D),K(黑83D),K+(纯黑85D),G217(透明91D),Tough74/74V2,TH-HR(高精度双色),CL-TH(9色),TH-BJD(BJD专用4色)","最多产品的品类");
  add("category","品类知识","抗冲击尼龙三款定位差异？","Anti-impact旗舰:93-95%伸长率,46-98J/m,可户外/水下 | TH72持久:29%伸长率,可做增韧剂 | TH-MINI桌游:60-66J/m,哑光质感,0.40%低吸水","应用驱动");
  add("category","品类知识","柔性/弹性5个层次？","入门:FX60(58-62A,耐寒-20度) | 标准:F69/F39/F39T(71A,222%) | 专业:ESD Flex(防静电) | 特殊:F80(64A) | 高端:EB/EHP/EL(80A/60A,150-200%,可量产)","5个层次");
  add("category","品类知识","牙科树脂四款临床应用？","D01(黄赭,85-90D):高精度模型 | D01S(贝壳米色,92D):超低收缩,石膏质感 | C01(透明绿):失蜡铸造,100mPas | GM01(牙龈粉,50A):仿真牙龈,不粘","牙科专用");
  add("category","品类知识","高性能弹性体三大系列区别？","EB:双组分,热处理,8h,回弹35-40% | EHP:高压蒸汽处理,15天,回弹38-43%(最高) | EL:兼容高UV强度LCD/DLP,15天,回弹30-35%","工业级弹性体");

  // TDS Basics (12)
  add("spec","TDS基础","TDS 是什么？包含哪些核心力学指标？","TDS=Technical Data Sheet(技术数据表)。核心指标:硬度(Hardness)、拉伸强度(Tensile Strength)、拉伸模量(Tensile Modulus)、断裂伸长率(Elongation at Break)、抗弯强度(Flexural Strength)、抗弯模量(Flexural Modulus)、缺口冲击强度(Izod Impact)、吸水率(Water Absorption)","每个指标对应一种力学行为");
  add("spec","TDS基础","Shore A 和 Shore D 有什么区别？","Shore A:用于软材料(弹性体/橡胶),0-100A,越小越软。如GM01:50A,F69:71A\nShore D:用于硬材料(塑料/树脂),0-100D,越大越硬。如HT-Enduse:97D\n换算参考:约60D对应100A左右","硬度计类型不同");
  add("spec","TDS基础","拉伸强度代表什么？单位MPa怎么理解？","拉伸强度=材料被拉断前能承受的最大拉力(单位横截面积上的力)。MPa=N/mm2。数值越高=越难被拉断。注意:拉伸高不等于韧性好！HT-Enduse拉伸52.81MPa但Izod仅15J/m(脆)","抗拉断能力");
  add("spec","TDS基础","拉伸模量与拉伸强度有何不同？","拉伸模量=弹性变形阶段的刚度。模量越高=材料越硬,越不容易被拉伸变形。\n拉伸强度=拉断时的力(极限值)\n拉伸模量=变形过程中的刚度(弹性阶段斜率)\n例:HT-Enduse模量2270MPa(极刚),F69仅31.59MPa(极易拉伸)","刚度vs极限强度");
  add("spec","TDS基础","断裂伸长率代表什么？","断裂伸长率=材料被拉断时的长度增加百分比。数值越高=延展性越好。\n<5%:脆性(HT-Enduse 2.8%,C01 4%)\n5-30%:坚韧(M58 22.55%,K+ 25.7%)\n>50%:高延展(Anti-impact 93-95%,F69 222%)\n伸长率高+强度高=真正的韧性(toughness)","延展性指标");
  add("spec","TDS基础","抗弯强度代表什么？","抗弯强度=材料在弯曲载荷下断裂前能承受的最大应力(MPa)。模拟零件被掰弯时的受力。数值越高=抗折断能力越强。最高:HT-Enduse 97.88MPa,SP64 82.9MPa。TH-MINI仅18.3MPa(但冲击60-66J/m:软而韧)","抗折断能力");
  add("spec","TDS基础","抗弯模量代表什么？","抗弯模量=材料在弯曲时的刚度。模量越高=越难被弯曲变形。与抗弯强度的关系类似拉伸模量与拉伸强度:一个衡量刚度(变形前),一个衡量极限(断裂时)。HT-Enduse 3548MPa(极刚),TH72 556MPa(柔软易弯)","弯曲刚度");
  add("spec","TDS基础","Izod冲击强度为什么是衡量韧性的核心指标？","Izod冲击=用摆锤击打断缺口标准试样所需能量(J/m)。模拟零件受到突然冲击(掉落/碰撞)时的表现。数值越高=越耐冲击、越不容易碎裂。\n<20J/m:脆(HT-Enduse 15,SP64 14)\n20-50J/m:韧(M58 22-42,K+ 31-35,G217 33-35)\n>50J/m:极韧(Anti-impact 46-98,TH-MINI 60-66)\n这是判断韧性最直接的指标！","韧性核心指标");
  add("spec","TDS基础","吸水率代表什么？为什么重要？","吸水率=材料在特定条件下吸收水分的重量百分比。\n<0.5%:极低(HT-Enduse 0.02%,K+ 0.30%,TH-MINI 0.40%)可户外/水下短期\n0.5-1.5%:中等(大多数坚韧树脂)室内良好\n>5%:高(WW123 5.71%,TH-WW 16.7%)水洗树脂吸水率高是正常的\n高吸水率=长时间潮湿环境下尺寸可能变化,力学性能下降","环境稳定性");
  add("spec","TDS基础","撕裂强度是什么？哪些产品需要关注？","撕裂强度(kN/m)=材料抵抗撕裂扩展的能力。仅在柔性/弹性材料中测量。\nF69/F39/F39T:17.59kN/m(最高)|FX60:12.75|F80:11.56|GM01:3.39(最弱)\n用于评估密封圈、轮胎、软壳等柔性零件的抗撕裂性能","柔性材料专属");
  add("spec","TDS基础","回弹率(Resilience)是什么？","回弹率(%)=材料被压缩/拉伸后恢复到原始形状的能力百分比。仅在弹性体(EB/EHP/EL系列)中测量。\nEHP最高:38-43%|EB:35-40%|EL:30-35%\n高回弹=更好的弹力,适合鞋底、运动护具、弹簧类零件","弹性体专属");
  add("spec","TDS基础","粘度(Viscosity)代表什么？对打印有什么影响？","粘度(mPas)=树脂流动性的度量。粘度越低=流动性越好。\n<200:极低,高速打印(WW123:12,C01:100)\n200-600:标准(D01:300,M68:301,K+:316)\n600-1500:中高(大部分坚韧树脂)\n>2000:高(F80:2180,GM01:3200,EB:4000-8000)\n高粘度需注意:打印速度受限、支撑难剥离、可能需要加热树脂槽","打印兼容性");

  // TDS实战 (6)
  add("spec","TDS实战","客户问「韧性怎么样」——看哪几个TDS指标？","韧性需要综合看3个指标:\n1)Izod冲击强度:最核心！衡量抗冲击/耐摔\n2)断裂伸长率:延展性,高伸长率=不易脆断\n3)抗弯强度:抗折断能力\n真正的韧性=高冲击+适中伸长率+适中抗弯。例:Anti-impact是韧性标杆(Izod 46-98,伸长率93%,抗弯27-34)","韧性=冲击+延展+抗弯");
  add("spec","TDS实战","客户说「我要硬的」——看哪个指标？","刚性/硬度主要看:\n1)Shore D硬度:最直观,越高越硬\n2)拉伸模量:刚度指标,越高越挺\n3)抗弯模量:弯曲刚度\n例:HT-Enduse 97D+2270MPa拉伸模量+3548MPa抗弯模量=最硬产品。但硬度高不等于韧性好！HT-Enduse Izod仅15J/m(脆如陶瓷)","刚性看模量+硬度");
  add("spec","TDS实战","客户要「软的有弹性的」——看什么？","柔软弹性看:\n1)Shore A硬度:<70A为软(F69:71A,F80:64A,FX60:58-62A,GM01:50A)\n2)断裂伸长率:>100%为具弹性(F69:222%,F80:155%)\n3)拉伸模量:低模量=容易拉伸(F69:31.59MPa,GM01:2.6MPa)\n4)撕裂强度和回弹率:弹性体的额外指标\n软不等于弱！F69虽软(71A)但撕裂强度高达17.59kN/m","柔软度看Shore A+伸长率");
  add("spec","TDS实战","客户要「能钻孔攻丝」——看什么？","可加工性看三项:\n1)Izod冲击>=20J/m(不崩碎)\n2)拉伸强度>=40MPa(有足够强度)\n3)伸长率>=15%(有延展性,不脆)\n推荐:M58(Izod 22-42,拉伸52.3,伸长22.55%),G217(Izod 33-35,拉伸62.3,伸长17.88%),K+(Izod 31-35,拉伸41,伸长25.7%)\n特别注意:HT-Enduse拉伸52.81但Izod仅15-钻孔会碎！","可加工性三要素");
  add("spec","TDS实战","客户要「户外/防水」——看哪个指标？","户外/水下适用性看:\n1)吸水率:最核心！<0.5%可短期户外/水下\n2)耐候性说明:是否抗黄变、抗UV\n3)Izod冲击:户外可能磕碰,需要韧性\n推荐:K+0.30%+31-35J/m(最佳户外黑色),Anti-impact 0.42-0.45%+46-98J/m(最佳户外功能件),HT-Enduse 0.02%(最低但脆),TH-MINI 0.40%+60-66J/m(耐摔+户外)","户外看吸水率");
  add("spec","TDS实战","对比两款树脂的「五维对比法」是什么？","五维对比法:\n1)Izod冲击:韧性/耐摔能力\n2)断裂伸长率:延展性/脆性\n3)硬度(Shore):软硬程度\n4)拉伸强度:抗拉断能力\n5)吸水率:环境稳定性\n辅助:粘度(打印速度)、颜色、价格\n速记口诀:冲击看Izod,软硬看Shore,抗拉看Tensile,户外看吸水,打印看粘度","五维对比法");

  // Performance Rankings (6)
  add("spec","性能排行","Izod冲击强度前5名？","1.Anti-impact(白灰):46-98J/m 2.Anti-impact(黑):67-75J/m 3.TH-MINI:60-66J/m 4.M58:22-42J/m 5.M68:22-42J/m / G217:33-35 / K+:31-35","冲击排行");
  add("spec","性能排行","拉伸强度前5名？","1.G217:62.3MPa 2.M68:54.3MPa 3.HT-Enduse:52.81MPa 4.M58:52.3MPa 5.SP64:49.91MPa","拉伸排行");
  add("spec","性能排行","断裂伸长率前5名？","1.F69/F39/F39T:222% 2.Anti-impact(黑):94.7% 3.Anti-impact(白灰):93% 4.GM01:83.5% 5.F80:155% / FX60:142%","伸长率排行");
  add("spec","性能排行","硬度前5名？","1.HT-Enduse:97D(最硬,类陶瓷) 2.SP64:95D 3.D01S:92D 4.G217:91D 5.M70:90D","硬度排行");
  add("spec","性能排行","哪些是「刚韧兼备」的最佳平衡？","刚韧兼备=高硬度+高冲击+适中伸长率:\n1.G217:91D+33-35J/m+17.88%透明可加工\n2.M58:88D+22-42J/m+22.55%灰色首选\n3.K+:85D+31-35J/m+25.7%黑色注塑级\n4.M68:87D+22-42J/m+19.16%纯白不黄变","刚韧平衡");
  add("spec","性能排行","哪些是「又软又韧」？","软而韧=Shore A硬度+高伸长率+高撕裂:\n1.F69/F39/F39T:71A+222%+17.59kN/m类橡胶\n2.TH-MINI:75-80D+45.6%+60-66J/m桌游耐摔\n3.Anti-impact:73-79D+93-95%+46-98J/m尼龙手感\n4.TH72:75D+29.35%+22-29J/m持久坚韧","柔韧平衡");

  // Application Matching (15)
  add("application","场景匹配","无人机/机器人/功能件?","首选:Anti-impact | 备选:TH72, K+","知识库场景速查表");
  add("application","场景匹配","桌游微缩/日常把玩?","首选:TH-MINI | 备选:M58, CL-TH","知识库场景速查表");
  add("application","场景匹配","牙科模型(修复/种植)?","首选:D01S | 备选:D01","知识库场景速查表");
  add("application","场景匹配","牙科铸造(冠/桥)?","首选:C01 | 备选:-","知识库场景速查表");
  add("application","场景匹配","牙龈模拟?","首选:GM01 | 备选:F80(粉色)","知识库场景速查表");
  add("application","场景匹配","BJD娃娃?","首选:TH-BJD | 备选:TH-HR","知识库场景速查表");
  add("application","场景匹配","GK/头雕/超精细模型?","首选:TH-HR | 备选:M70","知识库场景速查表");
  add("application","场景匹配","透明不黄变零件?","首选:G217 | 备选:F39T","知识库场景速查表");
  add("application","场景匹配","轮胎/橡胶件/密封圈?","首选:F39/F69 | 备选:FX60","知识库场景速查表");
  add("application","场景匹配","防静电场景?","首选:ESD Flex | 备选:-","知识库场景速查表");
  add("application","场景匹配","水洗/教学/日常打印?","首选:WW123 | 备选:WW-ABS","知识库场景速查表");
  add("application","场景匹配","量产鞋/运动护具/座垫?","首选:EB系列 | 备选:EL系列","知识库场景速查表");
  add("application","场景匹配","高温模具/齿轮?","首选:HT-Enduse | 备选:-","知识库场景速查表");
  add("application","场景匹配","彩色潮玩/机甲/积木?","首选:CL-TH | 备选:SP64","知识库场景速查表");
  add("application","场景匹配","标准展示/哑光质感?","首选:SP64 | 备选:M68","知识库场景速查表");

  // ---- Per-Product Cards (32 products x 3 = 96 cards) ----
  ALL_PRODUCTS.forEach(p => {
    add("product","产品速记",`${p.name} 的定位/一句话描述？`,p.tagline,`品类:${p.category}`);
    add("product","产品速记",`${p.name} 的主要应用场景（前4项）？`,p.applications.slice(0,4).join("\n"),`品类:${p.category}`);
    const s = p.specs;
    const specLines: string[] = [];
    if (s.hardness && s.hardness !== "—") specLines.push(`硬度:${s.hardness}`);
    if (s.tensileStrength && s.tensileStrength !== "—") specLines.push(`拉伸:${s.tensileStrength}MPa`);
    if (s.elongationAtBreak && s.elongationAtBreak !== "—") specLines.push(`伸长率:${s.elongationAtBreak}`);
    if (s.flexuralStrength && s.flexuralStrength !== "—") specLines.push(`抗弯:${s.flexuralStrength}MPa`);
    if (s.izodImpact && s.izodImpact !== "—") specLines.push(`Izod:${s.izodImpact}J/m`);
    if (s.waterAbsorption && s.waterAbsorption !== "—") specLines.push(`吸水率:${s.waterAbsorption}`);
    if (specLines.length > 0) {
      add("spec","性能数据",`${p.name} — 核心力学参数速查`,specLines.join(" | "),p.tagline);
    }
  });

  // ---- Competitive & Sales (4) ----
  add("company","竞品对比","客户问:为什么选RESIONE而不是eSun/Anycubic?","1)配方面向最终用途零件(end-use parts),非仅展示模型\n2)Anti-impact吸水率0.45% vs 行业2-3%\n3)TH-MINI 60-66J/m冲击行业领先\n4)全部产品自主生产,非代工贴牌","Sales objection");
  add("company","竞品对比","标准树脂和Anti-impact区别?","标准树脂2-4周后会变脆。Anti-impact具有93%伸长率和46-98J/m冲击强度,可保持数月耐久性,甚至户外或水下使用。可用作增韧剂与其他树脂混合。","Why Anti-impact");
  add("company","竞品对比","水洗树脂真的不需要酒精清洗吗?","是的。WW123/WW-ABS/TH-WW可直接用水清洗,无需IPA/酒精。优势:1)降低耗材成本2)减少化学品刺激3)更环保4)适合教学和家庭环境。但水洗液需妥善处理,不可直接排入下水道。","Water-washable FAQ");
  add("company","竞品对比","你们的牙科树脂能用于临床吗?","D01/D01S用于牙科模型(修复/种植/正畸/诊断),非直接口腔植入。C01用于失蜡铸造冠/桥(Ni-Cr/Co-Cr合金)。GM01用于牙龈模拟。所有牙科产品均需在专业牙科技工所使用。","Dental FAQ");

  // ---- Print Parameters (4) ----
  add("spec","打印参数","哪些树脂粘度最低(流动性最好)？","1.WW123:12mPas(近水)2.C01:100 3.D01:300 4.M68:301 5.K+:316\n粘度越低打印速度越快,支撑越好剥离","粘度排行榜");
  add("spec","打印参数","哪些树脂吸水率最低(适合户外/水下)？","1.HT-Enduse:0.02%(最低)2.CL-TH:0.29%3.K+:0.30%4.TH-MINI:0.40%5.Anti-impact(黑):0.42%\n吸水率<0.5%适合户外短期使用","吸水率排行榜");
  add("spec","打印参数","哪些树脂需要特别注意后处理？","EB系列:需热处理(烘箱) | EHP系列:需高压蒸汽处理(autoclave) | EL系列:需热处理 | GM01/F80:高粘度打印难 | C01:免后固化(省时)","后处理要求");
  add("spec","打印参数","如何从TDS判断打印友好度？","1)粘度:<600mPas最容易 2)是否有高打印成功率标记 3)是否有特殊后处理\n最容易:WW123(12),C01(100),SP64(495)\n中等:大部分坚韧树脂(300-900)\n需注意:F80(2180),GM01(3200)高粘度\n专业级:EB/EHP/EL需热处理/蒸汽处理","打印难度");

  // ---- Cleaning SOP (8) ----
  add("cleaning","清洁规范","3D打印清洗的「黄金口诀」是什么？","1)平台在上料槽在下(先卸平台再取料槽)\n2)平台倾斜放(让残余树脂流向料槽)\n3)酒精不能直接倒屏幕(倒无尘布上再擦)\n4)产品洗到干爽不粘手(唯一标准)\n5)瓶口不干净绝不盖盖","SOP口诀");
  add("cleaning","清洁规范","卸平台和料槽的正确顺序？为什么？","先卸平台，再取料槽！\n原因：平台卸下时，上面残留的树脂会往下滴。如果先取料槽，树脂滴到屏幕上，屏幕就脏了。正确顺序：平台→料槽，滴也滴在料槽里","关键步骤");
  add("cleaning","清洁规范","清洗平台时有哪些注意事项？","1)只抓平台上端(避开树脂污染区)\n2)先刮掉大部分残留树脂(用刮刀)\n3)倾斜放置，让树脂流向料槽方向\n4)用蘸了酒精的无尘布擦拭，不要直接倒酒精\n5)料槽边缘也要刮干净(树脂会爬到边缘)","平台清洗");
  add("cleaning","清洁规范","屏幕和离型膜怎么清洗？","1)绝对不要直接把酒精倒在屏幕上！酒精有腐蚀性\n2)酒精倒在无尘布上，用湿布擦拭屏幕\n3)无尘布不要用纸巾替代(纸屑会划伤离型膜)\n4)离型膜很脆弱，轻擦、不要用力按压\n5)离型膜有划痕或严重磨损时需要更换","屏幕清洗");
  add("cleaning","清洁规范","清洗产品的唯一标准是什么？","「干爽、不粘手」= 洗干净了\n\"不粘手但还有味道\" = 没洗干净（只是溶剂挥发暂时不粘）\n如果洗后产品还是粘的 = 残留树脂未去除 = 需要重新洗\n阳光后固化前一定要确保产品完全洗干净，否则表面会发白","清洗标准");
  add("cleaning","清洁规范","倒树脂/加树脂时要注意什么？","1)戴一次性手套(防皮肤接触)\n2)瓶口擦干净再盖盖(树脂在瓶口固化会粘死瓶盖)\n3)料槽倒树脂后，用刮刀沿边缘刮一圈(防止树脂爬到边缘)\n4)确认料槽内无可见气泡后再开始打印\n5)气泡不弄干净=打印失败(坑洞/缺陷)","树脂处理");
  add("cleaning","清洁规范","「两套工具法」是什么意思？","准备两套工具：\n一套「脏」：用于接触树脂/酒精清洗(刮刀、容器、无尘布)\n一套「干净」：用于接触清洁后的产品、屏幕、离型膜\n两套严格分开，交叉污染=白洗了\n这是实验室级别的操作纪律","工具管理");
  add("cleaning","清洁规范","打印前必须检查什么？","1)所有螺丝/旋钮是否拧紧(松动=层移位)\n2)平台是否调平(不调平=打印失败)\n3)屏幕是否干净(有树脂残留=曝光不良)\n4)料槽边缘是否有树脂溢出\n5)所有表面清洁——一个污点都可能导致失败","打印前检查");

  return cards;
}

// ================================================================
// QUIZ: Generate multiple-choice questions from cards
// ================================================================
interface QuizQuestion {
  id: number; question: string; options: string[]; correctIndex: number;
  explanations: string[]; // one per option
}
function generateQuiz(cards: KnowledgeCard[], count: number): QuizQuestion[] {
  const pool = [...cards].sort(() => Math.random() - 0.5);
  const selected = pool.slice(0, Math.min(count, pool.length));
  return selected.map((card, i) => {
    const wrongCards = pool.filter(c => c.id !== card.id && c.category === card.category).slice(0, 3);
    while (wrongCards.length < 3) {
      const rc = pool.find(c => c.id !== card.id && !wrongCards.includes(c));
      if (rc) wrongCards.push(rc); else break;
    }
    const rawOptions = [card, ...wrongCards];
    // Shuffle
    for (let j = rawOptions.length - 1; j > 0; j--) {
      const k = Math.floor(Math.random() * (j + 1));
      [rawOptions[j], rawOptions[k]] = [rawOptions[k], rawOptions[j]];
    }
    const options = rawOptions.map(o => o.answer);
    const correctIndex = rawOptions.indexOf(card);
    const explanations = rawOptions.map(o =>
      o === card
        ? `✓ 正确！${card.hint || ""}`
        : `✗ 这是另一道题的正确答案，原题：「${o.question}」`
    );
    return { id: i, question: card.question, options, correctIndex, explanations };
  });
}

// ================================================================
// Main Component
// ================================================================
export default function LearnPage() {
  const allCards = useMemo(() => generateCards(), []);
  const [activeTab, setActiveTab] = useState<"flashcard" | "quiz">("flashcard");
  const [deck, setDeck] = useState<KnowledgeCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<Set<number>>(new Set());
  const [unknown, setUnknown] = useState<Set<number>>(new Set());
  const [filter, setFilter] = useState<string>("all");

  // Quiz state
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  useEffect(() => {
    const filtered = filter === "all" ? allCards : allCards.filter(c => c.category === filter);
    setDeck([...filtered].sort(() => Math.random() - 0.5));
    setCurrentIndex(0); setFlipped(false);
  }, [filter, allCards]);

  const categories = useMemo(() => Array.from(new Set(allCards.map(c => c.category))).sort(), [allCards]);
  const current = deck[currentIndex];
  const progress = allCards.length > 0 ? Math.round((known.size / allCards.length) * 100) : 0;

  const handleKnown = () => { if (!current) return; setKnown(p => new Set(p).add(current.id)); setUnknown(p => { const n = new Set(p); n.delete(current.id); return n; }); goNext(); };
  const handleUnknown = () => { if (!current) return; setUnknown(p => new Set(p).add(current.id)); goNext(); };
  const goNext = () => { setFlipped(false); setTimeout(() => setCurrentIndex(i => (i + 1) % deck.length), 120); };
  const reviewUnknown = () => { const u = allCards.filter(c => unknown.has(c.id)); if (!u.length) return; setDeck(u.sort(() => Math.random() - 0.5)); setCurrentIndex(0); setFlipped(false); };

  // Quiz functions — random draw from pool
  const startQuiz = () => {
    const pool = filter === "all" ? allCards : allCards.filter(c => c.category === filter);
    const qs = generateQuiz(pool, 20);
    setQuizQuestions(qs); setQuizIndex(0); setQuizAnswers({}); setQuizSubmitted(false);
    setActiveTab("quiz");
  };
  const answerQuiz = (optionIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers(p => ({ ...p, [quizIndex]: optionIdx }));
  };
  const submitQuiz = () => setQuizSubmitted(true);
  const quizScore = Object.entries(quizAnswers).filter(([qi, ai]) => {
    const q = quizQuestions[parseInt(qi)];
    return q && ai === q.correctIndex;
  }).length;

  if (!current && activeTab === "flashcard") {
    return <div className="min-h-screen bg-space flex items-center justify-center"><p className="text-muted">Loading...</p></div>;
  }

  return (
    <div className="min-h-screen bg-space">
      <style>{`
        .card-3d{perspective:1000px}.card-inner{transition:transform 0.35s cubic-bezier(0.175,0.885,0.32,1.275);transform-style:preserve-3d}
        .card-flipped .card-inner{transform:rotateY(180deg)}.card-face{backface-visibility:hidden;-webkit-backface-visibility:hidden}
        .card-back{transform:rotateY(180deg)}.slide-in{animation:slideIn .25s ease-out}
        @keyframes slideIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
      `}</style>

      {/* Header */}
      <div className="bg-space-card border-b border-border sticky top-0 z-40">
        <div className="container-wide py-3 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold text-foreground">RESIONE 产品知识</h1>
            <span className="text-xs text-muted">{allCards.length} 张卡片</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <select value={filter} onChange={e => setFilter(e.target.value)}
              className="text-xs px-2 py-1 rounded-lg bg-space border border-border text-muted focus:outline-none focus:border-accent">
              <option value="all">全部类别</option>
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <button onClick={() => setActiveTab(t => t === "flashcard" ? "quiz" : "flashcard")}
              className="text-xs px-3 py-1 rounded-lg bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors">
              {activeTab === "flashcard" ? "🎯 选择题模式" : "📋 闪卡模式"}
            </button>
          </div>
        </div>
        <div className="h-1 bg-space-light"><div className="h-full bg-gradient-to-r from-accent to-gold transition-all duration-500" style={{width:`${progress}%`}}/></div>
      </div>

      {/* Stats */}
      <div className="container-wide py-3 flex items-center justify-center gap-6 text-xs text-muted">
        <span>已掌握 <b className="text-accent">{known.size}</b></span>
        <span>待复习 <b className="text-gold">{unknown.size}</b></span>
        <span>剩余 <b>{allCards.length - known.size - unknown.size}</b></span>
        {unknown.size > 0 && <button onClick={reviewUnknown} className="px-2 py-0.5 rounded bg-gold/10 text-gold border border-gold/20 hover:bg-gold/20 transition-colors">复习待加强</button>}
      </div>

      {/* ===== FLASHCARD MODE ===== */}
      {activeTab === "flashcard" && current && (
        <div className="container-wide py-6 flex flex-col items-center">
          <p className="text-xs text-muted-dim mb-4">第 {currentIndex+1}/{deck.length} 张 | {current.category}</p>
          <div className="w-full max-w-md">
            <div className={`card-3d cursor-pointer slide-in ${flipped?"card-flipped":""}`} onClick={()=>setFlipped(!flipped)}>
              <div className="card-inner relative w-full" style={{minHeight:"260px"}}>
                <div className="card-face absolute inset-0 bg-space-card border border-border rounded-2xl p-6 sm:p-8 flex flex-col justify-center items-center text-center">
                  <span className="text-[10px] uppercase tracking-widest text-accent mb-3 px-2 py-0.5 rounded-full bg-accent/10">{current.category}</span>
                  <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4 leading-relaxed">{current.question}</h2>
                  {current.hint && <p className="text-xs text-muted-dim mt-2">Tip: {current.hint}</p>}
                  <p className="text-xs text-muted-dim mt-4">点击翻看答案</p>
                </div>
                <div className="card-face card-back absolute inset-0 bg-gradient-to-br from-space-card to-space rounded-2xl border border-accent/20 p-6 sm:p-8 flex flex-col justify-center items-center text-center">
                  <span className="text-[10px] uppercase tracking-widest text-gold mb-3 px-2 py-0.5 rounded-full bg-gold/10">答案</span>
                  <p className="text-base sm:text-lg text-foreground leading-relaxed whitespace-pre-line">{current.answer}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={handleUnknown} className="px-6 py-3 rounded-xl border-2 border-red-500/30 text-red-400 font-semibold hover:bg-red-500/10 active:scale-95 transition-all">没记住</button>
            <button onClick={handleKnown} className="px-6 py-3 rounded-xl bg-accent text-black font-semibold hover:bg-accent-hover active:scale-95 transition-all shadow-lg shadow-accent/20">知道了</button>
          </div>
          <p className="text-[10px] text-muted-dim mt-3">← → 切换 | 空格翻卡</p>
          <KeyboardH onFlip={()=>setFlipped(f=>!f)} onKnown={handleKnown} onUnknown={handleUnknown}/>
        </div>
      )}

      {/* ===== QUIZ MODE ===== */}
      {activeTab === "quiz" && (
        <div className="container-wide py-6 flex flex-col items-center">
          {quizQuestions.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted mb-4">准备好了吗？每次随机抽取 10 题</p>
              <button onClick={startQuiz} className="px-8 py-4 rounded-xl bg-accent text-black font-bold text-lg hover:bg-accent-hover transition-all shadow-lg shadow-accent/20 active:scale-95">
                开始答题
              </button>
            </div>
          ) : quizSubmitted ? (
            /* Results */
            <div className="w-full max-w-lg text-center">
              <div className="text-5xl mb-4">{quizScore >= 8 ? "🎉" : quizScore >= 6 ? "👍" : "📚"}</div>
              <h2 className="text-2xl font-bold text-foreground mb-2">得分：{quizScore} / {quizQuestions.length}</h2>
              <p className="text-muted mb-6">{quizScore >= 8 ? "太棒了！知识掌握很扎实" : quizScore >= 6 ? "不错，再巩固一下薄弱点" : "继续加油，多刷几遍闪卡"}</p>
              <div className="space-y-4 mb-6 text-left">
                {quizQuestions.map((q, i) => {
                  const userAns = quizAnswers[i];
                  const correct = userAns === q.correctIndex;
                  return (
                    <div key={i} className={`p-4 rounded-xl text-sm ${correct ? "bg-green-500/8 border border-green-500/20" : "bg-red-500/8 border border-red-500/20"}`}>
                      <p className="font-bold text-foreground mb-2">{i+1}. {q.question}</p>
                      {q.options.map((opt, oi) => {
                        const isCorrect = oi === q.correctIndex;
                        const isUser = oi === userAns;
                        return (
                          <div key={oi} className={`mb-1.5 pl-3 py-1 rounded border-l-2 text-xs leading-relaxed ${
                            isCorrect ? "border-green-400 bg-green-500/5" :
                            isUser && !isCorrect ? "border-red-400 bg-red-500/5" :
                            "border-transparent opacity-60"
                          }`}>
                            <span className="font-semibold">{isCorrect ? "✓" : isUser ? "✗" : ""} {String.fromCharCode(65+oi)}. {opt}</span>
                            <p className={`mt-0.5 ${isCorrect ? "text-green-400/80" : "text-muted-dim"}`}>
                              {q.explanations[oi]}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              <button onClick={startQuiz} className="px-6 py-3 rounded-xl bg-accent text-black font-semibold hover:bg-accent-hover transition-all active:scale-95">再来一轮</button>
            </div>
          ) : (
            /* Quiz in progress */
            <div className="w-full max-w-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs text-muted">第 {quizIndex+1} / {quizQuestions.length} 题</span>
                <span className="text-xs text-muted">已答 {Object.keys(quizAnswers).length} 题</span>
              </div>
              <div className="h-1.5 bg-space-light rounded-full mb-6">
                <div className="h-full bg-accent rounded-full transition-all" style={{width:`${((quizIndex+1)/quizQuestions.length)*100}%`}}/>
              </div>
              {quizQuestions[quizIndex] && (
                <div className="bg-space-card border border-border rounded-2xl p-6 sm:p-8 slide-in">
                  <p className="text-lg font-bold text-foreground mb-6">{quizIndex+1}. {quizQuestions[quizIndex].question}</p>
                  <div className="space-y-3">
                    {quizQuestions[quizIndex].options.map((opt, oi) => {
                      const isSelected = quizAnswers[quizIndex] === oi;
                      return (
                        <button key={oi} onClick={() => answerQuiz(oi)}
                          className={`w-full text-left p-3 rounded-xl border text-sm transition-all ${
                            isSelected ? "border-accent bg-accent/10 text-accent font-semibold" : "border-border text-muted hover:border-accent/30 hover:text-foreground"
                          }`}>
                          <span className="inline-block w-6 h-6 rounded-full border text-xs text-center leading-6 mr-2"
                            style={{borderColor: isSelected ? "#00c6c0":"#374151",color:isSelected?"#00c6c0":"#9ca3af"}}>
                            {String.fromCharCode(65+oi)}
                          </span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
              <div className="flex gap-3 mt-4">
                <button onClick={() => setQuizIndex(i => Math.max(0, i-1))} disabled={quizIndex===0}
                  className="px-4 py-2 rounded-lg border border-border text-muted disabled:opacity-30 hover:border-accent/30 transition-colors text-sm">上一题</button>
                <button onClick={submitQuiz} disabled={Object.keys(quizAnswers).length === 0}
                  className="px-4 py-2 rounded-lg border border-gold/30 text-gold disabled:opacity-30 hover:bg-gold/10 transition-colors text-sm">提前交卷</button>
                <div className="flex-1"/>
                {quizIndex < quizQuestions.length - 1 ? (
                  <button onClick={() => setQuizIndex(i => Math.min(quizQuestions.length-1, i+1))}
                    className="px-6 py-2 rounded-lg bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors text-sm font-semibold">下一题</button>
                ) : (
                  <button onClick={submitQuiz}
                    className="px-6 py-2 rounded-lg bg-accent text-black font-semibold hover:bg-accent-hover transition-all text-sm active:scale-95">提交答卷</button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function KeyboardH({onFlip,onKnown,onUnknown}:{onFlip:()=>void;onKnown:()=>void;onUnknown:()=>void}) {
  useEffect(() => {
    const h = (e:KeyboardEvent) => {
      if (e.key === " " || e.key === "Spacebar") { e.preventDefault(); onFlip(); }
      if (e.key === "ArrowRight") onKnown();
      if (e.key === "ArrowLeft") onUnknown();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onFlip,onKnown,onUnknown]);
  return null;
}
