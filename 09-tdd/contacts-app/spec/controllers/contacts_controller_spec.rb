require 'rails_helper'

RSpec.describe ContactsController, type: :controller do

  describe "GET #show" do
    it "assigns the requested contact to @contact" do
      # Create a contact
      contact = create(:contact)
      # Make a get request
      get( :show, id: contact.id )
      # Check that the instance variable has been created
        # assigns(:contact) == @contact
      expect( assigns(:contact) ).to eq(contact)
    end

    it "renders the show template"
  end

end
