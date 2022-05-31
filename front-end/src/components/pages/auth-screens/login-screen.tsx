import { gql, useMutation } from "@apollo/client";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import authContext from "../../../context/auth-context";
import Button from "../../atoms/button/button";
import ScreenTemplate from "../../screen-template/screen-template";
import "./auth-style.scss";

const LOGIN_QUERY = gql`
  mutation Mutation($email: String!, $password: String!) {
    doLogin(email: $email, password: $password) {
      userId
      tokenExpires
      token
    }
  }
`;

const LoginScreen = () => {
  const [authToken, setAuthToken] = useState("");

  const navigate = useNavigate();

  const auth = useContext(authContext);

  const [loginfunc, { loading, data }] = useMutation(LOGIN_QUERY, {
    onError: (err) => {
      console.log(err.message);
    },
    onCompleted: ({ doLogin: { token, userId, tokenExpires } }) => {
      auth.login(token, userId, tokenExpires);
      setAuthToken(token);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    loginfunc({ variables: { email, password } });
    e.currentTarget.email.value = "";
    e.currentTarget.password.value = "";
  };
  return (
    <ScreenTemplate classStyle="bg-[red]">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="btn-control">
          <Button title="SignUp" onClick={() => navigate("/auth/signup")} />
          <Button title="Submit" />
        </div>
      </form>
    </ScreenTemplate>
  );
};

export default LoginScreen;
