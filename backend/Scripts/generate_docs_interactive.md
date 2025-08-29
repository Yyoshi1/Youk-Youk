# frozen_string_literal: true
require 'fileutils'

class DocsGeneratorInteractive
  DOCS_PATH = File.expand_path('../../Docs', __dir__)

  FEATURES = {
    'WindowsSystem' => { description: 'Unified windows system for all dashboards' },
    'PaymentStripe' => { description: 'Stripe payment integration' },
    'InvestorsSystem' => { description: 'Investor dashboards and levels' },
    'AdminPanel' => { description: 'System-wide admin dashboard and settings' }
  }

  def initialize(feature_key)
    @feature_key = feature_key
    @feature_name = feature_key.strip.gsub(/\s+/, '_').downcase
    @feature_path = File.join(DOCS_PATH, @feature_name)

    unless FEATURES.key?(feature_key)
      puts "Feature '#{feature_key}' is not defined."
      return
    end

    create_docs_folder
    generate_files
    generate_index
    update_all_links
    puts "Interactive Docs for '#{feature_key}' generated successfully!"
  end

  private

  def create_docs_folder
    FileUtils.mkdir_p(@feature_path)
  end

  def generate_files
    content = FEATURES[@feature_key]

    files_content = {
      'Overview.md' => "## Overview\n\n#{content[:description]}\n\nDetailed explanation goes here.",
      'Design.md' => "## Design\n\nUI/UX inspired by Linear. Components, colors, and layout.",
      'Integration.md' => "## Integration\n\nBackend & Frontend integration instructions."
    }

    files_content.each do |file_name, data|
      File.write(File.join(@feature_path, file_name), data)
    end
  end

  def generate_index
    html_content = <<~HTML
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>#{@feature_key} Docs</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f5f6fa; color: #333; padding: 20px; }
          h1 { color: #2f3640; }
          ul { list-style: none; padding: 0; }
          li { margin: 10px 0; }
          a { text-decoration: none; color: #0097e6; }
          a:hover { text-decoration: underline; }
          table { border-collapse: collapse; width: 100%; margin-top: 10px; }
          th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
          th { background-color: #2f3640; color: #fff; }
        </style>
      </head>
      <body>
        <h1>#{@feature_key} Docs</h1>
        <ul>
          <li><a href="Overview.md">Overview</a></li>
          <li><a href="Design.md">Design</a></li>
          <li><a href="Integration.md">Integration</a></li>
    HTML

    # توليد روابط لجميع الميزات الأخرى
    FEATURES.each_key do |key|
      next if key == @feature_key
      feature_folder = key.strip.gsub(/\s+/, '_').downcase
      html_content += "          <li><a href='../#{feature_folder}/index.html'>#{key}</a></li>\n"
    end

    html_content += <<~HTML
        </ul>
      </body>
      </html>
    HTML

    File.write(File.join(@feature_path, 'index.html'), html_content)
  end

  # تحديث جميع روابط الميزات الأخرى لإضافة رابط الميزة الجديدة
  def update_all_links
    FEATURES.each_key do |key|
      feature_folder = key.strip.gsub(/\s+/, '_').downcase
      next if key == @feature_key

      index_path = File.join(DOCS_PATH, feature_folder, 'index.html')
      next unless File.exist?(index_path)

      content = File.read(index_path)
      new_link = "          <li><a href='../#{@feature_name}/index.html'>#{@feature_key}</a></li>\n"
      unless content.include?(new_link)
        content.sub!('</ul>', "#{new_link}        </ul>")
        File.write(index_path, content)
      end
    end
  end
end

# ===== مثال على الاستخدام =====
# DocsGeneratorInteractive.new('WindowsSystem')
# DocsGeneratorInteractive.new('PaymentStripe')
# DocsGeneratorInteractive.new('InvestorsSystem')
# DocsGeneratorInteractive.new('AdminPanel')
