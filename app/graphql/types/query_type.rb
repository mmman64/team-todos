module Types
  class QueryType < Types::BaseObject
    field :todos,
          [Types::TodoType],
          null: false,
          description: "Returns a list of todos"

    def todos
      # Todo.all
      # Eager load users - can be improved with batch loading!
      Todo.preload(:user)
    end

    field :todo, Types::TodoType, null: false do
      argument :id, ID, required: true
    end

    def todo(id: )
      Todo.find(id)
    end

    field :me, Types::UserType, null: true

    #  returns the current_user from the execution context
    def me
      context[:current_user]
    end

  end
end
