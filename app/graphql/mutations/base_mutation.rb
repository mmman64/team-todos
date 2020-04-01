module Mutations
  class BaseMutation < GraphQL::Schema::Mutation
    def check_authentication!
      return if context[:current_user]

      raise GraphQL::ExecutionError,
            "Please sign in..."
    end
  end
end
