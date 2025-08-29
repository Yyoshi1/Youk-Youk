# frozen_string_literal: true
require 'fileutils'

# هذا الكود يعمل تلقائيًا فور وضعه في المشروع
module AutoDocsGenerator
  BASE_PATH = File.expand_path('../../../..', __FILE__)
  FEATURES_PATH = "#{BASE_PATH}/Features"
  DOCS_PATH = "#{BASE_PATH}/Docs"

  def self.run
    Dir.glob("#{FEATURES_PATH}/**/*/").each do |feature_dir|
      feature_name = File.basename(feature_dir)
      relative_path = feature_dir.sub(FEATURES_PATH + '/', '')
      doc_dir = "#{DOCS_PATH}/#{relative_path}"

      FileUtils.mkdir_p(doc_dir)

      %w[Overview Design Integration].each do |doc_type|
        file_path = "#{doc_dir}/#{doc_type}.md"
        next if File.exist?(file_path)
        File.write(file_path, <<~DOC)
          # #{doc_type} for #{feature_name}

          This file contains auto-generated documentation for the feature "#{feature_name}".
          It describes purpose, design, integration, and usage within the Youkyouk system.
        DOC
      end

      index_path = "#{doc_dir}/index.html"
      unless File.exist?(index_path)
        File.write(index_path, <<~HTML)
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <title>#{feature_name} Docs</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; background-color: #f5f5f5; }
              h1 { color: #333; }
              a { color: #007aff; text-decoration: none; }
            </style>
          </head>
          <body>
            <h1>#{feature_name} Documentation</h1>
            <ul>
              <li><a href="Overview.md">Overview</a></li>
              <li><a href="Design.md">Design</a></li>
              <li><a href="Integration.md">Integration</a></li>
            </ul>
          </body>
          </html>
        HTML
      end
    end
  end

  # تشغيل تلقائي فور تحميل الملف
  self.run
end
