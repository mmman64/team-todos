FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "user-#{n}@example.com" }
  end

  factory :todo do
    sequence(:title) { |n| "todo-#{n}" }
    user
  end
end
