# frozen_string_literal: true

class WindowController
  attr_accessor :hidden_windows

  def initialize
    @hidden_windows = []
  end

  # اخفاء نافذة
  def hide(window)
    @hidden_windows << window
    window.visible = false
  end

  # اظهار نافذة
  def show(window)
    window.visible = true
    @hidden_windows.delete(window)
  end

  # تكبير / تصغير
  def toggle_maximize(window)
    if window.maximized
      window.width = 600
      window.height = 600
      window.maximized = false
    else
      window.width = 1000
      window.height = 1000
      window.maximized = true
    end
  end

  # اغلاق نهائي
  def close(window)
    # إزالة النافذة من النظام
    # في التطبيق الفعلي يجب إزالة العنصر من DOM أو من قاعدة البيانات حسب التصميم
  end
end
