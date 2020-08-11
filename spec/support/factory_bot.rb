require 'factory_bot'

FactoryBot.define do
  factory :user do
    username { 'jimmy123' }
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

end
