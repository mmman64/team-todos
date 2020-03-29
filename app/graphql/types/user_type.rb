module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :email, String, null: false
    field :full_name, String, null: false
  end

  def full_name
    # object refers to User instance
    [object.first_name, object.last_name].compact.join(" ")
  end
end
