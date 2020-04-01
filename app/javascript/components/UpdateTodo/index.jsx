import React from "react";
import { Mutation } from "react-apollo";
import { UpdateTodoMutation } from "./operations.graphql";
import TodoForm from "../TodoForm";

const UpdateTodo = ({ id, initialTitle, initialDescription, onClose, }) => (
  <div>
    <div>
      <Mutation mutation={UpdateTodoMutation}>
        {(updateTodo, { loading }) => (
          <TodoForm
            initialTitle={initialTitle}
            initialDescription={initialDescription}
            buttonText="Update Todo"
            loading={loading}
            onProcessTodo={({ title, description }) => {
              updateTodo({
                variables: {
                  id,
                  title,
                  description
                },
                optimisticResponse: {
                  __typename: "Mutation",
                  updateTodo: {
                    __typename: "UpdateTodoMutationPayload",
                    todo: {
                      id,
                      __typename: "Todo",
                      title,
                      description
                    },
                  },
                },
              });
              onClose();
            }}
          />
        )}
      </Mutation>
      <button onClick={onClose}>
        Close
      </button>
    </div>
  </div>
);

export default UpdateTodo;
