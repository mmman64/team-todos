import React, { useState } from "react";
import { Query } from "react-apollo";
import { ListQuery } from "./operations.graphql";
import UpdateTodo from "../UpdateTodo";

const List = () => {
  const [todo, setTodo] = useState(null);

  return (
    <Query query={ListQuery}>
      {({ data, loading }) => (
        <div>
          {loading || !data.todos
            ? "loading..."
            : data.todos.map(({ title, id, user, description }) => (
                <button
                  onClick={() => setTodo({ title, id, description })}
                  key={id}
                >
                  <div>{title}</div>
                  <div>{description}</div>
                  {user ? (
                    <div>added by {user.email}</div>
                    ) : null}
                </button>
              ))}
          {todo !== null && (
            <UpdateTodo
              id={todo.id}
              initialTitle={todo.title}
              initialDescription={todo.description}
              onClose={() => setTodo(null)}
            />
          )}
        </div>
      )}
    </Query>
  );
};

export default List;
