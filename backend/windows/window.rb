# frozen_string_literal: true

class Window
  attr_accessor :id, :icon, :url, :width, :height, :maximized, :visible, :hidden

  def initialize(id:, icon:, url:, width: 600, height: 600)
    @id = id
    @icon = icon
    @url = url
    @width = width
    @height = height
    @maximized = false
    @visible = true
    @hidden = false
  end

  def toggle_maximize
    if maximized
      @width = 600
      @height = 600
      @maximized = false
    else
      @width = 1000
      @height = 1000
      @maximized = true
    end
  end

  def hide
    @visible = false
    @hidden = true
  end

  def show
    @visible = true
    @hidden = false
  end

  def close
    # علامة للإغلاق النهائي، يمكن حذفه من WindowManager
    @visible = false
    @hidden = false
  end
end
