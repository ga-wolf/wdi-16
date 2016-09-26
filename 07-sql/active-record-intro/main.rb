require 'pry'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.db'
)

# ActiveRecord::Base.logger = Logger.new( STDERR )

# users table --> class User
class User < ActiveRecord::Base
end

# READ STEP
all_users = User.all.length
first_user = User.first
last_user = User.last
user_with_id_2 = User.find( 2 )
django_reinhardt = User.find_by({
  :first_name => "Django",
  :last_name => "Reinhardt"
})
all_djangos = User.where({
  :first_name => "Django"
})

# CREATE STEP
jacques = User.new
jacques.first_name = "Jacques"
jacques.last_name = "Cousteau"
jacques.username = "jacques"
jacques.description = "Explorer"
jacques.save

p User.find_by( :first_name => "Jacques" )

bill = User.create({
  :first_name => "Bill",
  :last_name => "Murray",
  :username => "billmurray",
  :description => "I am Bill Murray"
})

p User.where( :first_name => "Bill" )

# UPDATE
bill = User.find_by( :last_name => "Murray" )
bill.first_name = "William"
bill.save

jacques = User.find_by :first_name => "Jacques"
jacques.update :description => "EXPLORER"

# DELETE
donald = User.create :first_name => "Donald", :last_name => "Trump", :username => "eagle", :description => "Make Active Record great again"

p User.all.length
donald.destroy
p User.all.length

# User.destroy_all
