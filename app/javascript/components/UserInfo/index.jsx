import React, { useRef } from "react";
import { Query, Mutation } from "react-apollo";
import { Me, SignMeIn } from "./operations.graphql";
import { AuthForm } from "./AuthForm";

const UserInfo = () => {
  const input = useRef(null);

  return (
    <div>
      <Query query={Me}>
        {({ data, loading }) => {
          if (loading) return "...Loading";
          if (!data.me) {
            return (
              // Mutation accepts cache and mutation result as arguments
              <Mutation
                mutation={SignMeIn}
                update={(cache, { data: { signIn } }) => {
                  cache.writeQuery({
                    query: Me,
                    data: { me: signIn.user }
                  });
                }}
              >
                {(signIn, { loading: authenticating }) =>
                  authenticating ? (
                    "..."
                  ) : <AuthForm signIn={signIn} input={input} />
                }
              </Mutation>
            );
          }

          const { fullName } = data.me;
          return <div>{fullName}</div>;
        }}
      </Query>
    </div>
  );
};

export default UserInfo;
