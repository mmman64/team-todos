import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const ListQuery = gql`
  {
    todos {
      id
      title
      user {
        email
      }
    }
  }
`;

export default () => (
  <Query query={ListQuery}>
    {({ data, loading }) => (
      <div>
        {loading
          ? "loading..."
          : data.todos.map(({ title, id, user }) => (
              <div key={id}>
                <b>{title}</b> {user && `added by ${user.email}`}
              </div>
            ))}
      </div>
    )}
  </Query>
);
