class ContactsController < ApplicationController

  def index
    if params[:letter]
      @contacts = Contact.by_letter( params[:letter] )
    else
      @contacts = Contact.all
    end
  end

  def show
    @contact = Contact.find( params[:id] )
  end

  def new
    @contact = Contact.new
  end

  def create
    contact = Contact.create( contact_params )
    redirect_to "/contacts/#{contact.id}"
  end

  def edit
    @contact = Contact.find params[:id]
  end

  private
    def contact_params
      params.require(:contact).permit(:first_name, :last_name, :email)
    end
end
