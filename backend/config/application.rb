# frozen_string_literal: true

require_relative 'boot'
require 'rails/all'

Bundler.require(*Rails.groups)

module Youkyouk
  class Application < Rails::Application
    config.load_defaults 7.1

    # اللغة الافتراضية
    config.i18n.default_locale = :en

    # تفعيل إعدادات الوقت العالمي
    config.time_zone = 'UTC'

    # إعدادات النوافذ الموحدة لجميع المسؤولين
    config.windows_ui = true

    # إعدادات توليد Docs تلقائي
    config.auto_docs = true

    # إعدادات حماية كود المستثمرين
    config.investor_protection = true
  end
end
