# frozen_string_literal: true
require 'fileutils'

class DocsGenerator
  DOCS_PATH = File.expand_path('../../Docs', __dir__)

  def initialize(feature_name)
    @feature_name = feature_name.strip.gsub(/\s+/, '_').downcase
    @feature_path = File.join(DOCS_PATH, @feature_name)
    create_docs_folder
    generate_files
    generate_index
    puts "Docs for feature '#{@feature_name}' generated successfully!"
  end

  private

  def create_docs_folder
    FileUtils.mkdir_p(@feature_path)
  end

  def generate_files
    files_content = {
      'Overview.md' => overview_content,
      'Design.md' => design_content,
      'Integration.md' => integration_content
    }

    files_content.each do |file_name, content|
      file_path = File.join(@feature_path, file_name)
      File.write(file_path, content)
    end
  end

  def generate_index
    index_path = File.join(@feature_path, 'index.html')
    html_content = <<~HTML
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>#{@feature_name.capitalize} Docs</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f5f6fa; color: #333; padding: 20px; }
          h1 { color: #2f3640; }
          ul { list-style: none; padding: 0; }
          li { margin: 10px 0; }
          a { text-decoration: none; color: #0097e6; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <h1>#{@feature_name.capitalize} Docs</h1>
        <ul>
          <li><a href="Overview.md">Overview</a></li>
          <li><a href="Design.md">Design</a></li>
          <li><a href="Integration.md">Integration</a></li>
        </ul>
      </body>
      </html>
    HTML

    File.write(index_path, html_content)
  end

  # محتوى افتراضي لكل ملف
  def overview_content
    <<~TEXT
      # Overview

      This document provides a general overview of the #{@feature_name.capitalize} feature.
      Describe the purpose, usage, and key functionalities here.
    TEXT
  end

  def design_content
    <<~TEXT
      # Design

      Design details for the #{@feature_name.capitalize} feature.
      - Colors inspired by Linear
      - Layout considerations
      - UI/UX guidelines
    TEXT
  end

  def integration_content
    <<~TEXT
      # Integration

      Explain how the #{@feature_name.capitalize} feature is integrated within the system.
      - Controllers / Backend connections
      - Frontend hooks or components
      - Any dependencies or linked modules
    TEXT
  end
end

# ===== مثال على الاستخدام =====
# لتوليد مجلد Docs لأي ميزة جديدة، استدعِ الكلاس كالتالي:
# DocsGenerator.new('WindowsSystem')
# DocsGenerator.new('PaymentStripe')
