Rails.application.routes.draw do
  resources :movements
  resources :exercises
  resources :worksets
  devise_for :users
  resources :users

  get'graphs/volume'
  get'graphs/rep_ranges'
  get'graphs/intensity'

  get'meals/slides'


  resources :workouts
  resources :meals
  resources :journals



  root to: 'users#show'
end
