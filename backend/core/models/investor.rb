# frozen_string_literal: true

class Investor < ApplicationRecord
  belongs_to :continent, optional: true
  belongs_to :country, optional: true
  belongs_to :model, optional: true

  validates :investor_type, presence: true, inclusion: { in: ['full_level', 'partial_share'] }
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :share_percentage, numericality: { greater_than: 0, less_than_or_equal_to: 100 }

  def full_level?
    investor_type == 'full_level'
  end

  def partial_share?
    investor_type == 'partial_share'
  end

  def detach_level_if_full_sale
    if partial_share? && share_percentage >= 100
      update(continent: nil, country: nil, model: nil)
    end
  end
end
