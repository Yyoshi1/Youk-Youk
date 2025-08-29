# frozen_string_literal: true

require_relative 'window'

class WindowManager
  attr_accessor :windows, :hidden_windows

  def initialize
    @windows = []
    @hidden_windows = []
  end

  # إنشاء نافذة جديدة
  def create_window(id:, icon:, url:)
    win = Window.new(id: id, icon: icon, url: url)
    @windows << win
    win
  end

  # إخفاء نافذة
  def hide_window(win)
    win.hide
    @hidden_windows << win unless @hidden_windows.include?(win)
  end

  # اظهار نافذة مخفية
  def show_window(win)
    win.show
    @hidden_windows.delete(win)
  end

  # تكبير / تصغير
  def toggle_maximize(win)
    win.toggle_maximize
  end

  # اغلاق نهائي
  def close_window(win)
    win.close
    @windows.delete(win)
    @hidden_windows.delete(win)
  end

  # استرجاع جميع النوافذ المخفية
  def hidden_list
    @hidden_windows
  end
end
