class WindowController {
  constructor() {
    this.windows = [];
  }

  addWindow(id, icon, url) {
    this.windows.push({ id, icon, url, visible: true, maximized: false });
  }

  hideWindow(id) {
    const win = this.windows.find(w => w.id === id);
    if (win) win.visible = false;
  }

  showWindow(id) {
    const win = this.windows.find(w => w.id === id);
    if (win) win.visible = true;
  }

  toggleMaximize(id) {
    const win = this.windows.find(w => w.id === id);
    if (win) win.maximized = !win.maximized;
  }
}

export default new WindowController();
