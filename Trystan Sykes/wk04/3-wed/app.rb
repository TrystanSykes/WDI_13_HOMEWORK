require 'pry'
require_relative 'animals'
require_relative 'clients'

animals = []
clients = []
shelter = [animals, clients]

animals.push(Animal.new('fuzzy',5,'m','cat'))
animals.push(Animal.new('woofer',3,'f','dog'))
animals.push(Animal.new('splashy',1,'m','fish'))
animals.push(Animal.new('flappy',4,'f','bird'))
clients.push(Client.new('bob', 3, 45))
clients.push(Client.new('sally', 1, 30))
clients.push(Client.new('fred', 0, 80))
clients.push(Client.new('sarah', 0, 22))


def new_client
  puts "what is the clients name"
  name = gets.chomp
  puts 'How many children do they have?'
  no_of_kids = gets.chomp
  puts 'How old are they?'
  age = gets.chomp
  client = Client.new(name, no_of_kids, age) 
  return client
end

def new_animal
  puts 'What is the animals name?'
  name = gets.chomp
  puts 'How old are they?'
  age = gets.chomp.to_i
  puts 'What gender are they? (m/f)'
  gender = gets.chomp
  puts 'What species are they?'
  species = gets.chomp
  animal = Animal.new(name, age, gender, species)
  return animal
end

puts "Options"
puts "1. Display all animals"
puts "2. Display all clients"
puts "3. Add a new animal"
puts "4. Add a new client"
puts "5. Adopt a pet"
puts "6. Give up a pet"  
puts "what would you like to do? (1-6 or exit to exit)"
choice = gets.chomp
while choice != 'exit' do  
  if choice == '1' 
    animals.each do |animal|
      animal.print_animal_details
    end
    puts "Options"
    puts "1. Display all animals"
    puts "2. Display all clients"
    puts "3. Add a new animal"
    puts "4. Add a new client"
    puts "5. Adopt a pet"
    puts "6. Give up a pet"  
    puts "what would you like to do? (1-6 or exit to exit)"
    choice = gets.chomp
  elsif choice == '2'
    clients.each do |client|
      client.print_client_details
    end
    puts "Options"
    puts "1. Display all animals"
    puts "2. Display all clients"
    puts "3. Add a new animal"
    puts "4. Add a new client"
    puts "5. Adopt a pet"
    puts "6. Give up a pet"  
    puts "what would you like to do? (1-6 or exit to exit)"
    choice = gets.chomp
  elsif choice == '3'
    animals.push(new_animal)
    puts "Created #{animals.last.name}"
    puts "Options"
    puts "1. Display all animals"
    puts "2. Display all clients"
    puts "3. Add a new animal"
    puts "4. Add a new client"
    puts "5. Adopt a pet"
    puts "6. Give up a pet"  
    puts "what would you like to do? (1-6 or exit to exit)"
    choice = gets.chomp
  elsif choice == '4'
    clients.push(new_client)
    puts "Created #{clients.last.name}"
    puts "Options"
    puts "1. Display all animals"
    puts "2. Display all clients"
    puts "3. Add a new animal"
    puts "4. Add a new client"
    puts "5. Adopt a pet"
    puts "6. Give up a pet"  
    puts "what would you like to do? (1-6 or exit to exit)"
    choice = gets.chomp
  elsif choice == '5'
    puts "Which client wants to adopt?"
    client_name = gets.chomp
    puts "Which pet would you like to adopt?"
    pet_name = gets.chomp
    pet_to_move = animals.find{|animal| animal.name == pet_name }
    animals.delete(pet_to_move)
    client_adopting = clients.find{|client| client.name == client_name }
    client_adopting.adopt_pet(pet_to_move)
    puts "#{client_adopting} adopted #{pet_to_move}."
    puts "Options"
    puts "1. Display all animals"
    puts "2. Display all clients"
    puts "3. Add a new animal"
    puts "4. Add a new client"
    puts "5. Adopt a pet"
    puts "6. Give up a pet"  
    puts "what would you like to do? (1-6 or exit to exit)"
    choice = gets.chomp
  elsif choice == '6'
    puts "Which client wants to give up a pet?"
    client_name = gets.chomp
    puts "Which pet are you giving up?"
    pet_name = gets.chomp
    client_giving_up = clients.find{|client| client.name == client_name }
    pet_to_move = client_giving_up.pets.find{|pet| pet.name == pet_name }
    client_giving_up.give_up_pet(pet_to_move)
    animals.push(pet_to_move)
    puts "#{client_giving_up} gave up #{pet_to_move}"
    puts "Options"
    puts "1. Display all animals"
    puts "2. Display all clients"
    puts "3. Add a new animal"
    puts "4. Add a new client"
    puts "5. Adopt a pet"
    puts "6. Give up a pet"  
    puts "what would you like to do? (1-6 or exit to exit)"
    choice = gets.chomp
  else
    puts "Sorry try again (1-6)"
    choice = gets.chomp
  end
end


# binding.pry


    
    
    




