require 'rails_helper'

RSpec.describe ContactsController, type: :controller do
  before(:each) do
    Contact.destroy_all
  end

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

    it "renders the show template" do
      contact = create :contact
      get :show, id: contact.id
      expect( response ).to render_template( :show )
    end
  end

  describe "GET #index" do
    context "without params[:letter]" do
      it "should populate an array of all contacts" do
        contact_one = create(:contact)
        contact_two = create(:contact)
        get( :index )
        expect(assigns(:contacts)).to match_array([contact_one, contact_two])
      end

      it "should render the index template" do
        get( :index )
        expect( response ).to render_template( :index )
      end
    end

    context "with params[:letter]" do
      it "should populate an array of appropriate contacts" do
        jones = create( :contact, :last_name => "Jones" )
        johnson = create( :contact, :last_name => "Johnson" )
        smith = create( :contact, :last_name => "Smith" )

        get :index, letter: "J"
        expect(assigns(:contacts)).to match_array([johnson, jones])
      end
      it "should render the index template" do
        get( :index )
        expect( response ).to render_template( :index )
      end
    end
  end

  describe "GET #new" do
    it "should assign a new contact to @contact" do
      get( :new )
      expect(assigns(:contact)).to be_a_new(Contact)
    end
    it "should render the new template" do
      get( :new )
      expect( response ).to render_template(:new)
    end
  end

  describe "GET #edit" do
    it "should assign an existing contact to @contact" do
      contact = create(:contact)
      get( :edit, id: contact.id )
      expect(assigns(:contact)).to eq(contact)
    end

    it "should render the edit template" do
      contact = create(:contact)
      get(:edit, id: contact.id)
      expect(response).to render_template(:edit)
    end
  end

  describe "POST #create" do
    context "with valid attributes" do
      it "saves the new contact in the database" do
        expect{
          post( :create, contact: FactoryGirl.attributes_for(:contact) )
        }.to change(Contact, :count).by 1
      end

      it "redirect to contacts#show"
    end

    context "with invalid attributes" do
      it "shouldn't save the contact"
      it "should show the new template again"
    end
  end

end
