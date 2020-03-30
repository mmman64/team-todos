require "rails_helper"
require "pry"

RSpec.describe Types::QueryType do
  describe "todos" do
    let!(:todos) { create_pair(:todo) }

    let(:query) do
      %(query {
        todos {
          title
        }
      })
    end

    subject(:result) do
      TeamTodosSchema.execute(query).as_json
    end

    it "returns all todos" do
      expect(result.dig("data", "todos")).to match_array(
        todos.map { |todo| { "title" => todo.title } }
      )
    end
  end
end
