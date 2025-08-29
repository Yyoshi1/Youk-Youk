# hidden_windows.rb
require 'singleton'

class HiddenWindows
  include Singleton
  attr_accessor :hidden_list

  def initialize
    @hidden_list = []
  end

  def add(window)
    window.hide
    @hidden_list << window
  end

  def restore(window_id)
    window = @hidden_list.find { |w| w.id == window_id }
    return unless window
    window.show
    @hidden_list.delete(window)
    window
  end
end
