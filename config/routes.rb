Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get 'regions/:id', to: 'homes#index'
  get 'vineyards/:id', to: 'homes#index'
  get 'vineyards/:vineyard_id/reviews/new', to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :regions, only: [:index, :show]
      resources :vineyards, only: [:show] do
        resources :reviews, only: [:create]
      end
      resources :varietals, only: [:index]
      resources :cellars, only: [:show]
    end
  end
end