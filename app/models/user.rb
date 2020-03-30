class User < ApplicationRecord
  has_many :todos, dependent: :destroy

  def full_name

  end
end
