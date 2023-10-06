import { Component } from "react";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Cookies from "js-cookie";
import {
  BsFacebook,
  BsTwitter,
  BsPinterest,
  BsInstagram,
  BsMeta,
} from "react-icons/bs";
import "./index.css";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class LoginPage extends Component {
  state = {
    username: "",
    password: "",
    showSubmitError: false,
    errorMsg: "",
    showpass: false,
  };

  onSubmitSuccess = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    //console.log("Cookies is set", jwtToken);
    const { history } = this.props;
    history.replace("/");
  };

  onSubmitFailure = (errorMsg) => {
    this.setState({ errorMsg: errorMsg, showSubmitError: true });
  };

  onSubmitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    // pending for login checking api
    //const url = "http://localhost:3001/login/";
    const url = "http://localhost:3002/login/";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(response);
    console.log(data);
    if (response.ok === true) {
      this.onSubmitSuccess();
    } else {
      this.onSubmitFailure(data.errorMsg);
    }
    console.log(userDetails);
  };
  //data.jwtToken
  //data.message

  onChangeUserId = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onToggleVisible = () => {
    this.setState((prevState) => ({
      showpass: !prevState.showpass,
    }));
  };

  render() {
    const { showSubmitError, errorMsg, showpass } = this.state;
    const token = Cookies.get("jwt_token");
    if (token !== undefined) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-container">
        <form className="form-style" onSubmit={this.onSubmitForm}>
          <h1 className="login-heading">Welcome Back!</h1>
          <label htmlFor="userName">User Name</label>
          <input
            id="userName"
            type="text"
            className="input-style"
            placeholder="Enter user name..."
            onChange={this.onChangeUserId}
          />
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              id="password"
              type={showpass ? "text" : "password"}
              className="password-style"
              placeholder="Enter password"
              onChange={this.onChangePassword}
            />
            {showpass ? (
              <button
                type="button"
                className="pass-visible-btn"
                onClick={this.onToggleVisible}
              >
                <AiFillEye size={20} color="#00000080" />
              </button>
            ) : (
              <button
                type="button"
                className="pass-visible-btn"
                onClick={this.onToggleVisible}
              >
                <AiFillEyeInvisible size={20} color="#00000080" />
              </button>
            )}
          </div>
          <p className="forgot-pass">Forgot password..?</p>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-msg">{errorMsg}</p>}
          <p className="diff-login-head">or sign in using </p>
          <div className="diff-login-container">
            <button className="sign-in-buttons">
              <BsFacebook size={24} />
            </button>
            <button className="sign-in-buttons">
              <BsInstagram size={24} />
            </button>
            <button className="sign-in-buttons">
              <BsTwitter size={24} />
            </button>
            <button className="sign-in-buttons">
              <BsMeta size={24} />
            </button>
            <button className="sign-in-buttons">
              <BsPinterest size={24} />
            </button>
          </div>
          <p className="register-text">
            Don't have account ? <Link to="/register">click here</Link> to
            Register
          </p>
        </form>
      </div>
    );
  }
}
export default LoginPage;
