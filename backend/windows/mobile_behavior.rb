# frozen_string_literal: true

module MobileBehavior
  # عرض كامل للهاتف
  def self.fullscreen(window)
    window.width = 1000 # أو viewport width ديناميكي
    window.height = 1000
  end

  # سحب لإخفاء
  def self.swipe_to_hide(window)
    window.hide
  end

  # زر دائري شفاف للإغلاق النهائي
  def self.press_and_hold_close(window, duration = 1.0)
    # duration بالثواني، يمكن محاكاة الضغط الطويل
    window.close if duration >= 1.0
  end
end
