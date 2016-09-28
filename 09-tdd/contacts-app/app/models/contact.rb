# == Schema Information
#
# Table name: contacts
#
#  id         :integer          not null, primary key
#  first_name :string
#  last_name  :string
#  email      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Contact < ActiveRecord::Base
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: true

  def self.some_class_method()
    # where
    # order
    binding.pry
  end

  def full_name
    [first_name, last_name].join( " " )
  end
end
