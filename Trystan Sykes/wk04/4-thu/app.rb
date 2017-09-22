require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

get '/' do
  erb :index
end

get '/price' do
  @stock = params[:stock]
  @result = YahooFinance::get_quotes(YahooFinance::StandardQuote, @stock)
  @price = @result[@stock].lastTrade
  @name = @result[@stock].name
  # binding.pry
  erb :price
end