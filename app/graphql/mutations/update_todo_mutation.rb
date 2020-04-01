module Mutations
  class UpdateTodoMutation < Mutations::BaseMutation
    argument :id, ID, required: true
    argument :attributes, Types::TodoAttributes, required: true

    field :todo, Types::TodoType, null: true
    field :errors, Types::ValidationErrorsType, null: true

    def resolve(id: , attributes: )
      check_authentication!

      todo = Todo.find(id)

      # treat user-input error as valid to avoid exception (not save!)
      if todo.update(attributes.to_h)
        TeamTodosSchema.subscriptions.trigger("todoUpdated", {}, todo)
        { todo: todo }
      else
        { errors: todo.errors.full_messages }
      end
    end
  end
end
