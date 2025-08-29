# frozen_string_literal: true

require_relative '../windows/window_manager'
require_relative '../windows/mobile_behavior'

class WindowsController
  attr_accessor :manager

  def initialize
    @manager = WindowManager.new
  end

  # إنشاء نافذة جديدة
  def add_window(id:, icon:, url:)
    @manager.create_window(id: id, icon: icon, url: url)
  end

  # إخفاء نافذة
  def hide_window(id)
    win = find_window(id)
    @manager.hide_window(win) if win
  end

  # اظهار نافذة
  def show_window(id)
    win = find_window(id)
    @manager.show_window(win) if win
  end

  # تكبير / تصغير
  def toggle_maximize(id)
    win = find_window(id)
    @manager.toggle_maximize(win) if win
  end

  # اغلاق نهائي
  def close_window(id)
    win = find_window(id)
    @manager.close_window(win) if win
  end

  # التعامل مع سلوك الهاتف
  def mobile_fullscreen(id)
    win = find_window(id)
    MobileBehavior.fullscreen(win) if win
  end

  def mobile_swipe_hide(id)
    win = find_window(id)
    MobileBehavior.swipe_to_hide(win) if win
  end

  def mobile_press_close(id, duration = 1.0)
    win = find_window(id)
    MobileBehavior.press_and_hold_close(win, duration) if win
  end

  private

  def find_window(id)
    @manager.windows.find { |w| w.id == id }
  end
end
