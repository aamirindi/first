import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <NavStyled>
      <div className="container">
        <div className="logo-brand">
          <NavLink exact to="/" activeClassName="active-link">
            <h1>Admin Panel</h1>
          </NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink
                exact
                to="/"
                className="link"
                activeClassName="active-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="link"
                activeClassName="active-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className="link"
                activeClassName="active-link">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="link"
                activeClassName="active-link">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className="link"
                activeClassName="active-link">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="link"
                activeClassName="active-link">
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </NavStyled>
  );
};

const NavStyled = styled.div`
  .container {
    padding: 1.6em 1em;
    margin-bottom: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    h1 {
      letter-spacing: 0.2rem;
    }
    ul {
      display: flex;
      gap: 3.2rem;
    }
  }

  @media (max-width: 960px) {
    nav {
      display: none;
    }
  }
`;

export default Navbar;
