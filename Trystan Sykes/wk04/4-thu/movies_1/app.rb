require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'



get '/' do
  erb :index
end

get '/about' do
  @title = params[:title]
  @results = HTTParty.get("http://omdbapi.com/?t=#{@title}&apikey=#{ENV['OMDB_API_KEY']}")
  @info = @results.parsed_response
# binding.pry
  erb :about
end



