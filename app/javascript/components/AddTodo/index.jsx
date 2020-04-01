import React from "react";
import { Mutation } from "react-apollo";
import { AddTodoMutation } from "./operations.graphql";
import { ListQuery } from "../List/operations.graphql";
import TodoForm from "../TodoForm";

const AddTodo = () => (
  <Mutation mutation={AddTodoMutation}>
    {(addTodo, { loading }) => (
      <TodoForm
        buttonText="Add Todo"
        loading={loading}
        onProcessTodo={({ title, description }) =>
          addTodo({
            variables: {
              title,
              description
            },
            update: (cache, { data: { addTodo } }) => {
              {
                const todo = addTodo.todo;

                if (todo) {
                  const currentTodos = cache.readQuery({ query: ListQuery });
                  cache.writeQuery({
                    query: ListQuery,
                    data: {
                      todos: [todo].concat(currentTodos.todos)
                    }
                  });
                }
              }
            },
          })
        }
      />
    )}
  </Mutation>
);

export default AddTodo;
