class User < ApplicationRecord
  # gem dependencies
  # devise
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  # paperclip
  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  has_many :workouts, inverse_of: :user, dependent: :destroy
  has_many :worksets, through: :workouts
  has_many :exercises, through: :worksets
  has_many :movements, through: :worksets
  has_many :meals, inverse_of: :user, dependent: :destroy
  has_many :journals, inverse_of: :user, dependent: :destroy
  accepts_nested_attributes_for :workouts, allow_destroy: true
  accepts_nested_attributes_for :journals, allow_destroy: true

end
