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

FactoryGirl.define do
  factory :contact do
    first_name "MyString"
    last_name "MyString"
    email "MyString"
  end
end
