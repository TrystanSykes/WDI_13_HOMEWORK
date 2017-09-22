require 'pry'

class Client
  def initialize(name, no_of_kids, age)
    @name = name
    @no_of_kids = no_of_kids
    @age = age
    @pets = []
  end

  def name
    return @name
  end

  def pets
    return @pets
  end

  def print_client_details
    puts "Name: #{@name}"
    puts "No of kids: #{@no_of_kids}"
    puts "Age: #{@age}"
    puts "Pets: #{@pets.each do |pet|
    pet.name end}"
  end

  def adopt_pet(pet)
    @pets.push(pet)
  end

  def give_up_pet(pet)
    @pets.delete(pet)
  end
end