# window.rb
class Window
  attr_accessor :id, :title, :type, :visible, :maximized, :icon

  COLORS = {
    close: '#EF4444',
    hide: '#FACC15',
    maximize: '#3B82F6',
    admin: '#3B82F6',
    investor: '#FACC15'
  }

  def initialize(id:, title:, type: :admin, icon: '📄')
    @id = id
    @title = title
    @type = type
    @visible = true
    @maximized = false
    @icon = icon
  end

  def hide; @visible = false; end
  def show; @visible = true; end
  def close; @visible = false; true; end
  def toggle_maximize; @maximized = !@maximized; end
  def color(type); COLORS[type] || '#6B7280'; end
end
