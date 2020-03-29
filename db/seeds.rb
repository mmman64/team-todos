require "faker"

5.times do
  User.create!(
    email: Faker::Internet.email,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
  )

  10.times do
    Todo.create!(
      title: Faker::Game.genre,
      description: Faker::Marketing.buzzwords,
      user: User.find(User.pluck(:id).sample),
    )
  end
end
