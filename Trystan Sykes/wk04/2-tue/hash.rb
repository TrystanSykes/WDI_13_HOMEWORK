require 'pry'

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

#1 How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users['Jonathan'][:twitter]
#2 How would you add the number 7 to Erik's favorite numbers?
users['Erik'][:favorite_numbers].push(7)
#3 How would you add yourself to the users hash?
users['Trystan'] = {:twitter=>'trystansykes', :favorite_numbers=>[7,22,34]}
#4 How would you return the array of Erik's favorite numbers?
users['Erik'][:favorite_numbers]
#5 How would you return the smallest of Erik's favorite numbers?
users['Erik'][:favorite_numbers].min
#6 How would you return an array of Anil's favorite numbers that are also even?
users['Anil'][:favorite_numbers].select  do |num|
  num.even?
end
#7 How would you return an array of the favorite numbers common to all users?
users['Anil'][:favorite_numbers] & users['Erik'][:favorite_numbers] & users['Jonathan'][:favorite_numbers]

#8 How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
all_fav = []
users.each_value do |user|
all_fav.push(user[:favorite_numbers])
all_fav = all_fav.flatten.sort.uniq
end


binding.pry