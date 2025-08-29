# frozen_string_literal: true
require 'fileutils'
require 'json'

module AutoDocsInitializer
  BASE = File.expand_path('../../..', __dir__) # backend/
  FEATURES = File.expand_path('../../..', BASE) # fallback not used
  FEATURES_PATH = File.expand_path('../../../Features', __dir__)
  DOCS_PATH = File.expand_path('../../../Docs', __dir__)

  def self.run
    FileUtils.mkdir_p(DOCS_PATH)
    # iterate features tree under Features/
    Dir.glob(File.join(FEATURES_PATH, '**/*/')).each do |feature_dir|
      next if feature_dir == "#{FEATURES_PATH}/" # skip root
      relative = feature_dir.sub(FEATURES_PATH + '/', '')
      # consider final leaf as "feature" if contains placeholder or files
      # create docs folder for the leaf
      doc_dir = File.join(DOCS_PATH, relative)
      FileUtils.mkdir_p(doc_dir)
      %w[Overview Design Integration].each do |file|
        md = File.join(doc_dir, "#{file}.md")
        next if File.exist?(md)
        File.write(md, <<~MD)
          # #{file} - #{File.basename(feature_dir)}

          **Hierarchy:** #{relative.split('/').join(' > ')}

          ## Purpose
          Describe the purpose of this feature.

          ## Implementation
          Describe backend models, controllers and frontend components.

          ## Notes
          Design system follows Linear-inspired palette and the unified windows system.

        MD
      end

      index = File.join(doc_dir, 'index.html')
      next if File.exist?(index)
      File.write(index, <<~HTML)
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>#{File.basename(feature_dir)} Docs</title>
          <style>
            body{font-family:Arial,Helvetica,sans-serif;background:#f7f8fa;color:#222;padding:18px}
            a{color:#0b6ef6;text-decoration:none}
            .meta{color:#666;font-size:0.9rem}
          </style>
        </head>
        <body>
          <h1>#{File.basename(feature_dir)} Documentation</h1>
          <p class="meta">Hierarchy: #{relative.split('/').join(' > ')}</p>
          <ul>
            <li><a href="Overview.md">Overview</a></li>
            <li><a href="Design.md">Design</a></li>
            <li><a href="Integration.md">Integration</a></li>
          </ul>
        </body>
        </html>
      HTML
    end
  rescue StandardError => e
    warn "Docs initializer error: #{e.message}"
  end

  # run automatically when file is loaded into Ruby process
  self.run
end
