require 'pry'

# number = Random.rand(10)
correct = false

puts "we're gonna play a guessing game between 1 and the upper limit you pick. Please enter the upper limit"
range_top = gets.to_i
number = Random.rand(1..range_top)


puts 'guess a number between 1 and ' + range_top.to_s
guess = gets.to_i
while correct == false
  if guess == number
    correct = true
    puts 'winner!'
  elsif guess < number
    puts 'wrong guess higher'
    guess = gets.to_i
  else
    puts 'wrong guess lower'
    guess = gets.to_i
  end
end

