import { Link } from "react-router-dom";
import { NavBarWrapper } from "../styles";

const NavBar = () => {
  return (
    <NavBarWrapper>
      <nav className="navbar navbar-inverse">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <Link
          to="/members"
          className="navbar-brand"
          style={{ padding: "0.25em 1em" }}
        >
          Members
        </Link>
        <Link
          to="/books"
          className="navbar-brand"
          style={{ padding: "0.25em 1em" }}
        >
          Books
        </Link>
        <div className="navbar-nav ml-auto"></div>
      </nav>
    </NavBarWrapper>
  );
};

export default NavBar;
