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

  it "is invalid without a first_name" do
    contact = Contact.new(
      :first_name => nil,
      :last_name => "Murray",
      :email => "bill@ga.co" )
    contact.valid?
    expect(contact.errors[:first_name]).to include("can't be blank")
  end

  it "is invalid without a last_name" do
    contact = Contact.new(
      :first_name => "Bill",
      :last_name => nil,
      :email => "bill@ga.co" )
    contact.valid?
    expect(contact.errors[:last_name]).to include("can't be blank")
  end

  it "is invalid without an email" do
    contact = Contact.new(
      :first_name => "Bill",
      :last_name => "Murray",
      :email => nil )
    contact.valid?
    expect(contact.errors[:email]).to include("can't be blank")
  end

  it "is invalid with a duplicate email address" do
    Contact.create first_name: "Zeppo", last_name: "Marx", email: "marx@ga.co"
    contact = Contact.new(
      first_name: "Groucho",
      last_name: "Marx",
      email: "marx@ga.co" )
    contact.valid?
    expect(contact.errors[:email]).to include("has already been taken")
  end

  it "returns a contact's full name as a string" do
    contact = Contact.new(
      first_name: "Harpo",
      last_name: "Marx",
      email: "harpo@ga.co" )
    expect(contact.full_name).to eq("Harpo Marx")
  end

  it "returns a sorted array of results that contain a given letter" do
    smith = Contact.create(first_name: "John", last_name: "Smith", email: "jsmith@example.com")
    jones = Contact.create(first_name: "Tim", last_name: "Jones", email: "tjones@example.com")
    johnson = Contact.create(first_name: "John", last_name: "Johnson", email: "jjohnson@example.com")

    expect(Contact.by_letter("J")).to eq [johnson, jones]
  end
end
