import { useState } from "react"
import { Link } from "react-router-dom";

import { signUpUserApi } from "../Api";

const defaultState = { fname: "", lname: "", email: "", password: "", confirmPassword: "" };
const SignUpPage = () => {
  const [signUpState, setSignUpState] = useState(defaultState);
  const [error, setError] = useState();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (signUpState.confirmPassword !== signUpState.password) {
      setError({ ...error, "confirmPassword": "not matching with password" })
      return
    }
    signUpUserApi(signUpState);
  }

  const handleChange = (type, value) => {
    setSignUpState({ ...signUpState, [type]: value });
  }

  return <div className="signup template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary">
    <div className="40-w p-5 rounded bg-white">
      <form>
        <h3>Sign Up</h3>
        <div className="mb-2">
          <label>First Name</label>
          <input type="fname"
            required
            placeholder="Enter First Name"
            onChange={(e) => handleChange("fname", e.target.value)}
            value={signUpState.fname}
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label>Last Name</label>
          <input type="lname"
            required
            placeholder="Enter Last Name"
            onChange={(e) => handleChange("lname", e.target.value)}
            value={signUpState.lname}
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label>Email</label>
          <input type="email"
            required
            placeholder="Enter Email"
            onChange={(e) => handleChange("email", e.target.value)}
            value={signUpState.email}
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label>Password</label>
          <input type="password"
            required
            placeholder="Enter Pasword"
            onChange={(e) => handleChange("password", e.target.value)}
            value={signUpState.password}
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label>Confirm Password</label>
          <input type="password"
            required
            placeholder="Enter Confirm Pasword"
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            value={signUpState.confirmPassword}
            className="form-control"
          />
          <p className="text-danger">{error?.confirmPassword}</p>
        </div>
        <div className="d-grid">
          <button className="btn btn-primary"
            onClick={(e) => handleSignUp(e)}
          >
            Sign Up
          </button>
          <Link to="/" className=""> Already has an account?</Link>
        </div>
      </form>
    </div>
  </div>
}
export default SignUpPage;