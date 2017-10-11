require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'fileutils'
require_relative 'db_config'
require_relative 'models/movie'



get '/' do
  if params[:title] == nil
    @results = {}
    @results['Search'] = []
    erb :index
  else
    @title = params[:title]
    @results = HTTParty.get("http://omdbapi.com/?s=#{@title}&apikey=#{ENV['OMDB_API_KEY']}")
    if @results['Search']
      erb :index
    elsif @results['Response'] == 'False'
      @results = HTTParty.get("http://omdbapi.com/?t=#{@title}&apikey=#{ENV['OMDB_API_KEY']}")
      if @results['Response'] == 'False'
        # @results = {}
        @results['Search'] = []
        erb :index
      else
        redirect "/about?t=#{@title}"
      end
    end
  end
end

# post '/' do
#   File.open('history.txt', 'w') do |search|
#     search.write params[:title]
#   end
# end

get '/about' do
  if Movie.find_by(title: params[:t])
    # change this to unique id
    @results = Movie.find_by(title: params[:t])
    erb :about
  else
    @title = params[:t]
    @results = HTTParty.get("http://omdbapi.com/?t=#{@title}&apikey=#{ENV['OMDB_API_KEY']}")
    @movie = Movie.new
    @movie.title = @results['Title']
    @movie.released = @results['Released']
    @movie.director = @results['Director']
    @movie.actors = @results['Actors']
    @movie.plot = @results['Plot']
    @movie.imdb_rating = @results['Ratings'][0]["Value"]
    @movie.image_url = @results['Poster']
    @movie.save
    @results = @movie
    erb :about
  end
end


# binding.pry

