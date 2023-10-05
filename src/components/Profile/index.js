import { Component } from "react";
import Header from "../Header";
import "./index.css";

class Profile extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="profile-page-container">
          <div className="profile-image-container">
            <img alt="profile_picture" className="profile-image" />
          </div>
        </div>
      </>
    );
  }
}
export default Profile;
