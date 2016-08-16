# Create an array of the days of the week
#
# Create a variable named days_of_the_week as an array of the following:
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday
# Sunday
require 'pry'
days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

# 2. My calendar says the first day is Sunday...
#
# Remove Sunday from the last postion and move it to the first position. Use array methods.

# days_of_the_week.delete("Sunday")
# days_of_the_week.unshift("Sunday")

days_of_the_week.unshift(days_of_the_week.pop)

p days_of_the_week

split_days = []
# binding.pry
split_days[0] = days_of_the_week[1..5]
split_days[1] = [days_of_the_week.first, days_of_the_week.last]


# 3. Create a new array of the days of the week:
#
# The first inner array should be the weekdays
# The second inner array should be the weekend days
# 4. Remove either the weekdays or the weekends

split_days.pop
# Your choice...

# 5. Sort the remaining days alphabetically
p split_days[0].sort
