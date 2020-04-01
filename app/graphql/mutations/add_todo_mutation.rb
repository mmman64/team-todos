module Mutations
  class AddTodoMutation < Mutations::BaseMutation
    argument :attributes, Types::TodoAttributes, required: true

    field :todo, Types::TodoType, null: true
    field :errors, Types::ValidationErrorsType, null: true

    def resolve(attributes: )
      check_authentication!

      # title, description, user
      todo = Todo.new(attributes.to_h.merge(user: context[:current_user]))

      # treat user-input error as valid to avoid exception (not save!)
      if todo.save
        { todo: todo }
      else
        { errors: todo.errors.full_messages}
      end
    end
  end
end
