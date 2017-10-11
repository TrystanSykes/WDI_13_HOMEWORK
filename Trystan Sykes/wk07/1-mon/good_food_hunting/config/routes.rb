Rails.application.routes.draw do
  resources :venues
  resources :comments
  resources :dishes

  get '/dishes/:id/delete', to: "dishes#delete"
  get '/comments/:id/delete', to: "comments#delete"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
