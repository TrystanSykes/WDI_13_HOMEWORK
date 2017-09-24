require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'fileutils'



get '/' do
  if params[:title] == nil
    @results = {}
    @results['Search'] = []
    erb :index
  else
    @title = params[:title]
    @results = HTTParty.get("http://omdbapi.com/?s=#{@title}&apikey=#{ENV['OMDB_API_KEY']}")
# binding.pry
    if @results['Search']
      erb :index
    elsif @results['Response'] == 'False'
      @results = HTTParty.get("http://omdbapi.com/?t=#{@title}&apikey=#{ENV['OMDB_API_KEY']}")
      if @results['Response'] == 'False'
        @results = {}
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
  @title = params[:t]
  @results = HTTParty.get("http://omdbapi.com/?t=#{@title}&apikey=#{ENV['OMDB_API_KEY']}")
  erb :about
end



