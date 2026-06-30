"""悬浮截图球 — 点一下，框选区域，截图完成"""
import os, sys, datetime, ctypes
ctypes.windll.shcore.SetProcessDpiAwareness(2)

OUT = os.path.expanduser(r"~\Desktop\截图")
os.makedirs(OUT, exist_ok=True)
os.system(f"{sys.executable} -m pip install pillow -q >nul 2>&1")

import tkinter as tk
from PIL import ImageGrab

def now():
    return datetime.datetime.now().strftime("%Y%m%d_%H%M%S")

def snap():
    # Hide the ball temporarily
    root.attributes('-alpha', 0)
    root.after(100, _snap)

def _snap():
    top = tk.Toplevel()
    top.attributes('-fullscreen', True); top.attributes('-alpha', 0.2)
    top.attributes('-topmost', True); top.config(bg='black')
    c = tk.Canvas(top, bg='black', highlightthickness=0, cursor='cross')
    c.pack(fill='both', expand=True)
    D = {}

    def d(e): D['s']=(e.x,e.y); D['r']=c.create_rectangle(e.x,e.y,e.x,e.y,outline='#ff1744',width=3)
    def m(e):
        if D.get('r'): c.coords(D['r'],D['s'][0],D['s'][1],e.x,e.y)
    def u(e):
        top.destroy(); root.attributes('-alpha', 1)
        x1,y1=D['s']; x2,y2=e.x,e.y
        if abs(x2-x1)<10 or abs(y2-y1)<10: return
        p = os.path.join(OUT, f"截图_{now()}.png")
        ImageGrab.grab(bbox=(min(x1,x2),min(y1,y2),max(x1,x2),max(y1,y2))).save(p)
        # Flash green briefly to confirm
        cflash = root.cget('bg')
        root.config(bg='#4caf50')
        root.after(300, lambda: root.config(bg=cflash))

    c.bind('<Button-1>', d); c.bind('<B1-Motion>', m); c.bind('<ButtonRelease-1>', u)
    top.bind('<Escape>', lambda e: (top.destroy(), root.attributes('-alpha', 1)))
    top.mainloop()

# ---- Floating Ball ----
root = tk.Tk()
root.title('截')
root.overrideredirect(True)  # No title bar
root.attributes('-topmost', True)  # Always on top
root.geometry('44x44+1500+10')  # Position: top-right

# Button
btn = tk.Button(root, text='✂', font=('', 16), bg='#8b7355', fg='white',
    activebackground='#6b5a3e', relief='flat', bd=0, cursor='hand2')
btn.pack(expand=True)

# ---- Drag to move the ball ----
drag_start = [0, 0]
moved = [False]

def on_press(e):
    drag_start[0] = e.x_root - root.winfo_x()
    drag_start[1] = e.y_root - root.winfo_y()
    moved[0] = False

def on_drag(e):
    root.geometry(f'+{e.x_root - drag_start[0]}+{e.y_root - drag_start[1]}')
    moved[0] = True

def on_release(e):
    if not moved[0]:  # It was a click, not a drag
        snap()

btn.bind('<Button-1>', on_press)
btn.bind('<B1-Motion>', on_drag)
btn.bind('<ButtonRelease-1>', on_release)

print("Screenshot ball ready. Drag to move, click to take screenshot.")
root.mainloop()
