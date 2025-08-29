document.addEventListener('DOMContentLoaded', () => {
  const windows = document.querySelectorAll('.window');
  const hiddenContainer = document.createElement('div');
  hiddenContainer.className = 'hidden-windows-container';
  document.body.appendChild(hiddenContainer);

  windows.forEach(win => {
    const closeBtn = win.querySelector('.window-btn-close');
    const hideBtn = win.querySelector('.window-btn-hide');
    const maxBtn = win.querySelector('.window-btn-maximize');

    // اغلاق نهائي
    closeBtn.addEventListener('click', () => win.remove());

    // اخفاء النافذة
    hideBtn.addEventListener('click', () => {
      win.style.display = 'none';
      const hiddenIcon = document.createElement('div');
      hiddenIcon.className = 'hidden-window';
      hiddenIcon.innerText = win.dataset.id;
      hiddenIcon.addEventListener('click', () => {
        win.style.display = 'flex';
        hiddenIcon.remove();
      });
      hiddenContainer.appendChild(hiddenIcon);
    });

    // تكبير/تصغير
    maxBtn.addEventListener('click', () => {
      if (win.dataset.maximized === 'true') {
        win.style.width = '600px';
        win.style.height = '600px';
        win.dataset.maximized = 'false';
      } else {
        win.style.width = '1000px';
        win.style.height = '1000px';
        win.dataset.maximized = 'true';
      }
    });

    // سحب النافذة
    let isDragging = false, offsetX, offsetY;
    const header = win.querySelector('.window-header');
    header.addEventListener('mousedown', e => {
      isDragging = true;
      offsetX = e.clientX - win.getBoundingClientRect().left;
      offsetY = e.clientY - win.getBoundingClientRect().top;
      win.style.position = 'absolute';
      win.style.zIndex = 1000;
    });

    document.addEventListener('mousemove', e => {
      if (isDragging) {
        win.style.left = `${e.clientX - offsetX}px`;
        win.style.top = `${e.clientY - offsetY}px`;
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  });

  // زر الإغلاق الشفاف للهاتف
  const mobileCloseBtn = document.createElement('div');
  mobileCloseBtn.className = 'mobile-close-btn';
  document.body.appendChild(mobileCloseBtn);

  let pressTimer;
  mobileCloseBtn.addEventListener('mousedown', () => {
    pressTimer = window.setTimeout(() => {
      windows.forEach(w => w.remove());
    }, 1000);
  });
  mobileCloseBtn.addEventListener('mouseup', () => clearTimeout(pressTimer));
});
