require 'pry'
# days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
# days_of_the_week.unshift(days_of_the_week.pop)


days_of_the_week = [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], ['Saturday', 'Sunday']]

days_of_the_week.delete_at(1)

days_of_the_week[0].sort!


