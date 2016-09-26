require 'pry'
require_relative "../bank"

describe Bank do
  let(:bank) do
    Bank.new("RSpec Bank")
  end

  describe ".new" do
    it "should create a new instance of the Bank class" do
      expect( bank ).to_not eq nil
    end

    it "should be assigned a name as an instance variable" do
      expect( bank.name ).to eq "RSpec Bank"
    end

    it "should have no accounts" do
      expect( bank.accounts.count ).to eq 0
    end
  end

  describe "#create_account" do
    it "should create an account with a given name and a given deposit" do
      bank.create_account("Gerry", 200)
      bank.create_account("Jerry", 200)

      expect( bank.balance("Gerry") ).to eq 200
    end
  end

  describe "#withdraw" do
    it "should withdraw an amount from a customer's account" do
      bank.create_account "Gerry", 200 # Execution
      bank.withdraw("Gerry", 100)      # Execution

      expect( bank.balance("Gerry") ).to eq 100 # Validation
    end

    it "should ignore withdrawal requests exceeding the current balance" do
      bank.create_account "Gerry", 200
      bank.withdraw "Gerry", 1_000_000

      expect( bank.balance("Gerry") ).to eq 200
    end
  end

  describe "#deposit" do
    it "should deposit a given amount into a customer's account" do
      bank.create_account "Bill Murray", 2
      bank.deposit "Bill Murray", 98

      expect( bank.balance("Bill Murray") ).to eq 100
    end
  end
end
