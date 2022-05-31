import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import ScreenTemplate from "../../screen-template/screen-template";

const SIGNUP_QUERY = gql`
  mutation Mutation($userInput: UserInput!) {
    doSignUp(userInput: $userInput) {
      username
      email
      id
    }
  }
`;

const SignUpScreen = () => {
  const navigate = useNavigate();
  const [signUpFunc, { loading, data }] = useMutation(SIGNUP_QUERY, {
    onError: (err) => {
      console.log(err.message);
    },
    onCompleted: (data) => {
      console.log(data);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    signUpFunc({ variables: { userInput: { username, email, password } } });

    console.log(username, email, password);
    e.currentTarget.email.value = "";
    e.currentTarget.username.value = "";
    e.currentTarget.password.value = "";
  };

  return (
    <ScreenTemplate>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="btn-control">
          <button type="button" onClick={() => navigate("/auth/login")}>
            Log In
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </ScreenTemplate>
  );
};

export default SignUpScreen;
