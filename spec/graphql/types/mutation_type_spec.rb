# require "rails_helper"
# require "pry"

# RSpec.describe Types::MutationType do
#   describe "signin" do


#     # subject(:result) do
#     #   TeamTodosSchema.execute(mutation(email: user.email)).as_json
#     # end

#     it "returns the correct user name" do
#       user = create(:user)
#       post "/graphql", params: { mutation: mutation(email: user.email) }
#       binding.pry
#       expect(result.dig("data", "signIn")[:token]).not_to be_empty
#     end
#   end

#   def mutation(email:)
#     <<~GQL
#       mutation {
#         signIn(email: #{email}) {
#           user {
#             token
#           }
#         }
#       }
#     GQL
#   end
# end
