Rails.application.routes.draw do

  root "pages#index"
  get "/index" => "pages#index"

  get "/lotto_numbers" => "pages#lotto_numbers"
  get "/uptime" => "pages#uptime"
  get "/fortune" => "pages#fortune"
  get "/info" => "pages#info"

end
