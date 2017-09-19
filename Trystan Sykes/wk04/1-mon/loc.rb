require 'pry'

puts 'Enter file name: '
file_name = gets.chomp
line_count = `wc -l < #{file_name}`.to_i

puts line_count.to_s + " line(s)"
# binding.pry
