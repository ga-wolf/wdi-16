require 'rails_helper'

# Model tests typically include:
  # A validity test
  # Tests for all individual invalid cases
  # Tests for instance methods
  # Tests for class methods

RSpec.describe Contact, type: :model do
  it "is valid with a first_name, last_name and an email" do
    contact = Contact.create(
      :first_name => "Bill",
      :last_name => "Murray",
      :email => "bill@ga.co" )
    expect(contact).to be_valid
  end

  it "is invalid without a first_name"
  it "is invalid without a last_name"
  it "is invalid without an email"
  it "is invalid with a duplicate email address"
end
