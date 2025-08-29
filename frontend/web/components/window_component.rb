# frozen_string_literal: true

class WindowComponent
  attr_accessor :id, :icon, :url, :width, :height, :maximized

  def initialize(id:, icon:, url:, width: 600, height: 600)
    @id = id
    @icon = icon
    @url = url
    @width = width
    @height = height
    @maximized = false
  end

  # توليد كود HTML/CSS داخلي للنافذة
  def render
    <<~HTML
      <div class="window" data-id="#{id}" data-icon="#{icon}" data-url="#{url}" style="width: #{width}px; height: #{height}px;">
        <div class="window-header">
          <div class="window-icon">#{icon}</div>
          <div class="window-link">#{url}</div>
          <div class="window-controls">
            <div class="window-btn-close"></div>
            <div class="window-btn-hide"></div>
            <div class="window-btn-maximize"></div>
          </div>
        </div>
        <div class="window-body">
          <p>Content for #{id}</p>
        </div>
      </div>
    HTML
  end
end
