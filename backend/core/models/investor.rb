# frozen_string_literal: true

class Investor < ApplicationRecord
  # العلاقات الهرمية بالمستويات المختلفة
  belongs_to :continent, optional: true
  belongs_to :country, optional: true
  belongs_to :model, optional: true

  # التحقق من نوع المستثمر
  validates :investor_type, presence: true, inclusion: { in: ['full_level', 'partial_share'] }
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :share_percentage, numericality: { greater_than: 0, less_than_or_equal_to: 100 }

  # callback لتفعيل فصل المستوى تلقائيًا بعد الحفظ
  after_save :detach_level_if_full_sale

  # طرق مساعدة لتسهيل الفحص
  def full_level?
    investor_type == 'full_level'
  end

  def partial_share?
    investor_type == 'partial_share'
  end

  # فصل المستوى عند بيع كامل الحصة
  def detach_level_if_full_sale
    if full_level? && share_percentage >= 100
      # إزالة الارتباط بالمستوى بعد بيع الحصة بالكامل
      update(continent: nil, country: nil, model: nil)
    end
  end
end
