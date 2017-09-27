require 'pry'

class Animal
  attr_reader :name, :age
  @@animals = []

  def initialize(name, age)
    @name = name
    @age = age
    @@animals.push self
    # puts self
  end

  def self.display_animals
    message = ''
    @@animals.each do |animal_obj|
      message += "#{animal_obj.name} is #{animal_obj.age} years old\n"
    end
    return message
    # puts self
  end

  def self.find(animals, animal_name)
    animals.each do |animal|
      if animal.name == animal_name
        return animal
      end
    end
  end
end

Animal.new('albert', 2)
Animal.new('fluffy', 5)
puts Animal.display_animals

binding.pry