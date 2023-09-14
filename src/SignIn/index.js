import { useState } from "react";
import { Link } from "react-router-dom";
import { signInUserApi } from "../Api";

const SignInPage = () => {
  const [signInState, setSignInState] = useState({ email: "", password: "" });

  const handleSignIn = (e) => {
    e.preventDefault();
    signInUserApi(signInState)
  }

  const handleChange = (type, value) => {
    setSignInState({ ...signInState, [type]: value });
  }
  return (
    <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary">
      <div className="40-w p-5 rounded bg-white">
        <form>
          <h3>Sign In</h3>
          <div className="mb-2">
            <label>Email</label>
            <input type="email"
              required
              onChange={(e) => handleChange("email", e.target.value)}
              value={signInState.fname}
              placeholder="Enter Email"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label>Password</label>
            <input type="password"
              required
              onChange={(e) => handleChange("password", e.target.value)}
              value={signInState.fname}
              placeholder="Enter Pasword"
              className="form-control"
            />
          </div>
          <div className="d-grid">
            <button className="btn btn-primary"
              onClick={(e) => handleSignIn(e)}
            >
              Sign In
            </button>
            <Link to="/sign-up" className=""> create an account</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignInPage;