module Types
  class MutationType < Types::BaseObject
    field :sign_in, mutation: Mutations::SignInMutation
    field :add_todo, mutation: Mutations::AddTodoMutation
    field :update_todo, mutation: Mutations::UpdateTodoMutation
  end
end
