require 'pry'

#Animal:

# An animal should have a name.
# An animal should have an age.
# An animal should have a gender.
# An animal should have a species.
# An animal can have multiple toys.


class Animal
  def initialize(name,age,gender,species)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
  end

  def name
    return @name
  end

  def add_animal
    puts 'What is the animals name?'
    @name = gets.chomp
    puts 'How old are they?'
    @age = gets.chomp.to_i
    puts 'What gender are they? (m/f)'
    @gender = gets.chomp
    puts 'What species are they?'
    @species = gets.chomp
    @toys = []
  end

  def print_animal_details
    puts "Name: #{@name}"
    puts "Age: #{@age}"
    puts "Gender: #{@gender}"
    puts "Species: #{@species}"
    puts "Toys: #{@toys.join(', ')}"
  end
  
end
  



# binding.pry