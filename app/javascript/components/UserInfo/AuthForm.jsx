import React from "react";

export const AuthForm = ({ signIn, input }) => {
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          signIn({
            variables: { email: input.current.value }
          }).then(
            ({
              data: {
                signIn: { token }
              }
            }) => {
              if (token) {
                localStorage.setItem("mlToken", token);
              }
            }
          )
        }}
      >
        <input ref={input} type="email" placeholder="your email" />
        <input type="submit" value="Sign In" />
      </form>
    </div>
  )
}
