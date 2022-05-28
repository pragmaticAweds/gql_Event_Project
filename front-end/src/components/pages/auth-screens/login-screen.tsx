import ScreenTemplate from "../../screen-template/screen-template";

import "./auth-style.css";

const LoginScreen = () => {
  return (
    <ScreenTemplate>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <button type="button" className="btn bg-[#01fdfd]">
            SignUp
          </button>
          <button type="submit" className="btn bg-[#01fdfd]">
            Submit
          </button>
        </div>
      </form>
    </ScreenTemplate>
  );
};

export default LoginScreen;
