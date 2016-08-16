array_one = ["wolf", "badger", "blade", "hammer"]

# ACCESSING ELEMENTS OF AN ARRAY

# # Return the element at index 1
array_one[1]
# p array_one

# Get all elements within a range of indices
array_one[1..2]
# p array_one

# # Return the element at index 0
array_one.first
# p array_one

# # Return the element at index 0
array_one[0]
# p array_one

# # Return the last element of the array
array_one.last
# p array_one

# # Return the last element of the array
array_one[-1]
# p array_one

# # Return the n-th last element of the array
array_one[-3]
# p array_one

# Return the index of an element
array_one.index("badger")
# p array_one

# ADDING ELEMENTS TO AN ARRAY

# Add an element to the end of the array
array_one.push("lewis")
# p array_one

array_one << "baxter"
# p array_one

array_one.unshift("Meggan")
# p array_one

# Insert a single element at a given index
array_one.insert(2, "Cheese")

# Insert a number of elements from a given index
array_one.insert(2, "Satantango", "Beef", "Chicken", "Noodles")
# p array_one

# REMOVING ELEMENTS FROM AN ARRAY
# p array_one
# Remove the first element of the array
array_one.shift
# p array_one

# Remove the element from the end of the array
array_one.pop
# p array_one

array_one.delete_at(2)
# p array_one

array_one.delete("Satantango")
# p array_one
