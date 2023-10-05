import { Link, withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import { TbHexagonLetterT, TbHexagonLetterG } from "react-icons/tb";
import "./index.css";

const Header = (props) => {
  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    const { history } = props;
    history.replace("/login");
  };
  return (
    <div>
      <nav className="header-container">
        <Link to="/" className="link-style">
          <h1 className="website-name">Travel Guide</h1>
          <TbHexagonLetterT />
          <TbHexagonLetterG />
        </Link>
        <ul className="nav-items">
          <Link to="/" className="link-style">
            <li>Home</li>
          </Link>
          <Link to="/profile" className="link-style">
            <li>Profile</li>
          </Link>
          <li onClick={onClickLogout} className="logout">
            Logout
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default withRouter(Header);
