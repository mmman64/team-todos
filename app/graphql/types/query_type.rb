module Types
  class QueryType < Types::BaseObject
    field :todos,
          [Types::TodoType],
          null: false,
          description: "Returns a list of todos"

    def todos
      Todo.all
    end
  end
end
