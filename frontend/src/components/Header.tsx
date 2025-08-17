import { NavLink } from "react-router";

const Header = () => {
  return (
    <header>
      <span>Logo</span>
      <NavLink to={"/"}></NavLink>
    </header>
  );
};

export default Header;
