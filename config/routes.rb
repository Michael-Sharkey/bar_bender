Rails.application.routes.draw do
  devise_for :users
  resources :users

  resources :worksets

  resources :workouts

  get'graphs/volume'
  get'graphs/rep_ranges'
  get'graphs/intensity'

  get'meals/slides'
  resources :meals

  get 'tours/show'
  get 'tours/workout'
  get 'tours/eat'
  get 'tours/note'
  get 'tours/slides'
  get 'tours/notes'

  root to: 'users#show'
end
