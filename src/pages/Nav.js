import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="navbar">
      <Link className="navbar_ele" to="/">
        Home
      </Link>
      <Link className="navbar_ele" to="/contact">
        Contact
      </Link>
      <Link className="navbar_ele" to="/about">
        About
      </Link>
      <Link className="navbar_ele" to="/profile">
        Anybody
      </Link>
    </div>
  );
};
