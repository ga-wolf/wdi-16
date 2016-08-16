# Array and Hash access
#
# A. Given the following data structure:
#
a = ["Anil", "Erik", "Jonathan"]

# How would you return the string "Erik"?
p a[1]

# How would you add your name to the array?
a.push("Badger")

p a

# B. Given the following data structure:
#
h = {
  0 => "Zero",
  1 => "One",
  :two => "Two",
  "two" => 2
}


# How would you return the string "One"?
p h.values_at(1)[0]
p h[1]

# How would you return the string "Two"?
p h.values_at(:two)[0]
p h[:two]

# How would you return the number 2?
p h["two"]

# How would you add {3 => "Three"} to the hash?
h[3] = "Three"
p h

# How would you add {:four => 4} to the hash?
h[:four] = 4

p h

# C. Given the following data structure:
#
is = {true => "It's true!", false => "It's false"}

p is[2 + 2 == 4]

p is["Erik" == "Jonathan"]

p is[9 < 10]

p is[0]

p is["Erik"]

# D. Given the following data structure:
#
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}
# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
p users["Jonathan"][:twitter]
# How would you add the number 7 to Erik's favorite numbers?
p users["Erik"][:favorite_numbers] << 7

# How would you add yourself to the users hash?
users["Badger"] = {
  :twitter => nil,
  :favorite_numbers => [7,2,4]
}

p users

# How would you return the array of Erik's favorite numbers?
erik_numbers = users["Erik"][:favorite_numbers]

# How would you return the smallest of Erik's favorite numbers?
p erik_numbers.min

# How would you return an array of Anil's favorite numbers that are also even?
even_numbers = users["Anil"][:favorite_numbers].select do |el|
  el.even?
end

puts even_numbers

# How would you return an array of the favorite numbers common to all users?

anil_numbers = users["Anil"][:favorite_numbers]
jonathan_numbers = users["Jonathan"][:favorite_numbers]

p erik_numbers & anil_numbers & jonathan_numbers

# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?

p (anil_numbers | erik_numbers | jonathan_numbers).sort


users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# Get everyone's favorite numbers

# Approach 1: using .each
favorites = []

users.each do |k,v|
  favorites.push(users[k][:favorite_numbers])
end
p favorites

# Approach 2: using .map
p users.map { |k, v| users[k][:favorite_numbers] }.flatten
