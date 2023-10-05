import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./index.css";

class Register extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    showpass: false,
    errorMsg: "",
  };

  onSubmitSuccess = () => {
    alert("Successfully registered, please login again to continue");
    const { history } = this.props;
    history.replace("/login");
  };

  onSubmitFailure = (message) => {
    this.setState({ errorMsg: message });
  };

  onSubmitForm = async (event) => {
    event.preventDefault();
    // pending code for registration api changes
    const { username, password, email } = this.state;
    const userDetails = { username, password, email };
    const url = "http://localhost:3001/users/";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      this.onSubmitSuccess();
    } else {
      this.onSubmitFailure(data.message);
    }
  };

  onChangeUserName = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onToggleVisible = () => {
    this.setState((prevState) => ({
      showpass: !prevState.showpass,
    }));
  };

  render() {
    const { showpass, errorMsg } = this.state;
    const token = Cookies.get("jwt_token");
    if (token !== undefined) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-container">
        <form className="form-style" onSubmit={this.onSubmitForm}>
          <h1 className="login-heading">Register Now!</h1>
          <label htmlFor="emailId">Email</label>
          <input
            id="emailId"
            type="text"
            className="input-style"
            placeholder="Enter Email..."
            onChange={this.onChangeEmail}
          />
          <label htmlFor="userName">User name</label>
          <input
            id="userName"
            type="text"
            className="input-style"
            placeholder="Enter user name..."
            onChange={this.onChangeUserName}
          />
          <label htmlFor="password">Create Password</label>
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
                className="pass-visible-btn"
                onClick={this.onToggleVisible}
              >
                <AiFillEye size={20} color="#00000080" />
              </button>
            ) : (
              <button
                className="pass-visible-btn"
                onClick={this.onToggleVisible}
              >
                <AiFillEyeInvisible size={20} color="#00000080" />
              </button>
            )}
          </div>

          <button type="submit" className="login-button">
            Regsiter
          </button>
          <p className="error-msg">{errorMsg}</p>

          <p className="register-text">
            already have an account ? <Link to="/login">click here</Link> to
            Login
          </p>
        </form>
      </div>
    );
  }
}
export default Register;
