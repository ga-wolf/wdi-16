# Guess The Number
#
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.

puts "What is the lowest number? "
minimum = gets.to_i

puts "What is the highest number? "
maximum = gets.to_i

comp_number = Random.rand( minimum..maximum )

print "What is your guess? "
user_guess = gets().chomp().to_i

# while comp_number != user_guess
until comp_number == user_guess
  if user_guess > comp_number
    puts "It is a lower number"
  else
    puts "It is a higher number"
  end

  print "What is your guess (in loop)? "
  user_guess = gets.chomp.to_i
end

puts "You got it"



# Specification:
#
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:
#
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"
