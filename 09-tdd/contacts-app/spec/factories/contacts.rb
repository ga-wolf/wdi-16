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
    first_name "John"
    last_name "Doe"
    email { Faker::Internet.email }
    # sequence(:email) { |n| "johndoe#{n}@ga.co" }

    after(:build) do |contact|
      [:home_phone, :office_phone, :mobile_phone].each do |phone|
        create(phone, contact: contact)
      end
    end
  end
end
