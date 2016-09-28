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

RSpec.describe Contact, type: :model do
  it "has a valid factory" do
    expect(build(:contact)).to be_valid
  end

  it "has three phone numbers" do
    contact = build :contact
    expect(contact.phones.length).to eq(3)
  end

  it "is valid with a first_name, last_name and an email" do
    contact = build :contact
    expect(contact).to be_valid
  end

  it "is invalid without a first_name" do
    contact = build :contact, first_name: nil
    contact.valid?
    expect(contact.errors[:first_name]).to include("can't be blank")
  end

  it "is invalid without a last_name" do
    contact = build :contact, last_name: nil
    contact.valid?
    expect(contact.errors[:last_name]).to include("can't be blank")
  end

  it "is invalid without an email" do
    contact = build :contact, email: nil
    contact.valid?
    expect(contact.errors[:email]).to include("can't be blank")
  end

  it "is invalid with a duplicate email address" do
    create :contact, :email => "marx@ga.co"
    contact = build :contact, :email => "marx@ga.co"
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

  describe "filter last name by letter" do
    before :each do
      @smith = Contact.create(first_name: "John", last_name: "Smith", email: "jsmith@example.com")
      @jones = Contact.create(first_name: "Tim", last_name: "Jones", email: "tjones@example.com")
      @johnson = Contact.create(first_name: "John", last_name: "Johnson", email: "jjohnson@example.com")
    end

    context "with matching letters" do
      it "returns a sorted array of results that contain a given letter" do
        expect(Contact.by_letter("J")).to eq [@johnson, @jones]
      end
    end

    context "with non-matching letters" do
      it "omits contacts that don't match" do
        expect(Contact.by_letter("J")).not_to include @smith
      end
    end
  end

end
