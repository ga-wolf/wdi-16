require 'pry'

puts "Welcome to our calculator"

def menu
  puts ""
  puts "(a) - addition"
  puts "(q) - quit"
  print "Enter your choice: "
  gets.chomp()
end
user_choice = menu()

def add
  # Ask the user for two numbers
  print "What is your first number? "
  first_num = gets().to_f
  print "What is your second number? "
  second_num = gets().to_f
  # result = first_num + second_num
  # puts "The result is #{result}"
  puts "The result is #{first_num + second_num}"
end

def subtract
end

def multiply
end

def divide
end

until user_choice == "q"
  case user_choice
  when "a" then add()
  else
    puts "That is not a valid option"
  end

  user_choice = menu()
end

puts ""
puts "Thanks for using our lovely calculator!"
