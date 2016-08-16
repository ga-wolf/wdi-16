array_one = ["wolf", "badger", "blade", "hammer"]

# ACCESSING ELEMENTS OF AN ARRAY

# # Return the element at index 1
array_one[1]

# Get all elements within a range of indices
array_one[1..2]

# # Return the element at index 0
array_one.first

# # Return the element at index 0
array_one[0]

# # Return the last element of the array
array_one.last

# # Return the last element of the array
array_one[-1]

# # Return the n-th last element of the array
array_one[-3]

# Return the index of an element
array_one.index("badger")

# ADDING ELEMENTS TO AN ARRAY

# Add an element to the end of the array
array_one.push("lewis")

array_one << "baxter"

array_one.unshift("oscar")

# Insert a single element at a given index
array_one.insert(2, "cheese")

# Insert a number of elements from a given index
array_one.insert(2, "satantango", "beef", "chicken", "noodles")

# REMOVING ELEMENTS FROM AN ARRAY

# Remove the first element of the array
array_one.shift

# Remove the last element of the array
array_one.pop

# Delete the element at index 2
array_one.delete_at(2)

# Delete the element passed in
array_one.delete("satantango")


# GETTING INFORMATION ABOUT AN ARRAY

# Getting the number of elements in an array
array_one.length

# Same as .length
array_one.size

# Use the count method if you want to add a condition
array_one.count

# Check whether array has any elements
array_one.empty?

# Check whether an array includes a particular element
array_one.include?("badger")
# Will return true or false.

# p array_one

# BLOCKS
jack = ["tall", "tom selleck-y", "greasy", "handsome", "often inexplicably moist"]

# EACH

# do - end syntax
jack.each do |el|
  p "Jack is #{el}, and he loves it."
end

# In JavaScript, this would look like:
# for (var i = 0; i < jack.length; i++) {
#  console.log("Jack is " + jack[i] + " and he loves it.")
# }

# curly bracket syntax
jack.each { |el| p "Jack is #{el}, and he loves it." }

badger = ["lethargic", "a lover of lumberjack fashion", "a big chopper"]

# Call the .each method on a range of elements in an array, and pass those elements to the block
badger[1..2].each do |el|
  p "Badger is #{el}"
end

# EACH WITH INDEX
# do - end syntax
badger.each_with_index do |el,index|
  p "#{index}: Badger is #{el}."
end

# curly bracket syntax
badger.each_with_index do |el,i|
  p "#{i}: Badger is #{el.upcase}."
end


# MAP

people = ["badger", "wolf", "blade", "hammer"]

# .map - non-destructive manipulation of each element in an array, returns a new array
people.map do |el|
  el.capitalize
end

p people

# using .map in conjunction with assignment. Store whatever is returned by the .map method in a new variable.

capital_people = people.map do |el|
  el.capitalize
end

puts "people is #{people}"
puts "capital_people is #{capital_people}"

# .map! - destructive manipulation of each element in an array, returns the manipulated array

people.map! do |el|
  el.capitalize
end

p people
# p people_capitalized


# PREDICATE METHODS

arr_four = ["badger", "wolf", "blade", "hammer"]
#
people.empty?
# false

!people.empty?
true

test = arr_four.all? do |el|
 el.length > 6
end

# SELECTION AND REJECTION

numbers = [2,3,4,5,6]

# Select - Go through the array and return all elements that pass the test
even = numbers.select do |el|
  el % 2 == 0
end

p even

# Reject - Go through the array and get rid of all the elements that pass the test
odd = numbers.reject do |el|
  el % 2 == 0
end

p odd

# Descructive form of select
numbers.select! do |el|
  el % 2 == 0
end

p numbers

# Destructive form of reject
numbers.reject! do |el|
  el > 3
end

p numbers

# ARRAY COMPARISON

numbers = [1,2,3,4,5]
numbers_two = [3,4,5,6,7]

# Equality - do the arrays have the same number of elements and are all the elements == ?
numbers == numbers_two

# Union - return an array which includes all the unique elements in the arrays
p numbers | numbers_two

# Intersection - return an array which includes all the elements present in both arrays
p numbers & numbers_two

# Difference - return an array of all the elements unique to the first array.
p numbers - numbers_two
