puts "Hello World"  # On a seperate line
print "Hello World" # Can be on the same line
p "Hello World"     # Is printing for programmers

# Data Types
# Strings

puts "Hello " + "Badger"  # Concatenation is still possible
puts "2 + 2 = #{2 + 2}"   # Double quotes can interpolate
puts '2 + 2 = #{2 + 2}'   # Single quotes can't

name = "gilberto"
puts "Hello #{name.capitalize}"

# Numbers

1
1.0
-1.0
129192849812912981298129

p "4 to the power of 8: #{4 ** 8}" # Exponent operator

# Variables - snake_case not camelCase

this_is_a_variable = true
this_is_a_string = "Yep"
this_is_a_number = 10



# Getting user input
puts "What is your name?"
# user_name = gets
# p user_name
#
# user_name = gets.chomp
# p user_name

# Ruby Conditionals

# If statement
  # No curly brackets, no round brackets, and it can be inline

if 42 > 13
  puts "42 is a bigger number"
end

name = "Groucho"
if name == "Harpo"
  puts "Your name is Harpo"
elsif name == "Chico"
  puts "Your name is Chico"
else
  puts "Hopefully you are Groucho"
end

puts "42 is bigger than 13" if 42 > 13
comfortable = true
puts "I love you, Badger" if comfortable

if "World" != "Hello"
  puts "Those two things aren't equal"
end

# Unless statement

unless "World" == "Hello"
  puts "Those things aren't equal"
end

# if true != false
unless true == false
  puts "Whatever"
else
  puts "Something else"
end

# Case statement

hour = 10
case
when hour < 12
  puts "Good morning"
when hour > 12 && hour < 17
  puts "Good afternoon"
else
  puts "Good evening"
end

name = "Badger"
case name
when "Wolf"
  puts "You are teaching"
when "Badger"
  puts "You are also teaching"
else
  puts "You are learning (hopefully)"
end

name = "Badger"
case name
when "Badger" then puts "You are Badger"
when "Wolf" then puts "You are Wolf"
else
  puts "You are learning"
end

name = "Badger"
role =  case name
        when "Badger" then "Developer in Residence"
        when "Wolf" then "Teacher (apparently)"
        else
          "Student"
        end
p role
