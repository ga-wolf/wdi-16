
# CREATING A HASH

# Approach 1: Hash literal syntax
badger = {}
jack = {
  :role => "instructor",
  :age => 94,
  :hair => "greasy"
}

# Approach 2: Hash Class's .new method
blade = Hash.new()

# ADDING THINGS TO A HASH

# Adding key/value pairs to a hash
blade[:role] = "lead instructor"
blade[:age] = 24
blade[:hair] = "magnificent"

# REMOVING THINGS FROM A HASH

# Removing key/value pairs from a hash
blade.delete(:age)

# MODIFYING KEY/VALUE PAIRS IN A HASH

# Modifying a key's value
new_hair = ["devestating", "ordinary", "pretty good"]

blade[:hair] = new_hair.last.upcase

# Modifying a key - really deleting a key/value pair and assigning the value of the deleted k/v pair to a new key.
blade[:appearance] = blade.delete(:hair)

# Delete all key value/pairs in the hash
blade.clear

hammer = {
  :name => "Luke",
  :age => "unknown",
  :hobbies => ["craft", "knitting", "surfing"]
}

# HASH ACCESS METHODS

# Get all the keys in a hash
hammer.keys

# Get all the values in a hash
hammer.values

# Get values for specified keys in a hash
hammer.values_at(:name, :age)

# Get the keys in a hash that match a specified value
hammer.key("unknown")

# Get an element from an array in the hash
hammer[:hobbies][1]

# All array methods available as usual
hammer[:hobbies].length

# EACH LOOPS

numbers = {
  "most popular" => 23,
  "least popular" => 3,
  "first prime" => 2,
  "fourth fibonacci" => 3
}

numbers.each do |k,v|
  puts "the #{k} number is #{v}"
end
#
numbers.each_key do |v|
  puts "#{v} is a key in this hash"
end

numbers.each_value do |v|
  puts "#{v} is a value in this hash"
end
