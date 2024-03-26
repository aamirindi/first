import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavStyled>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">
              <h1>Admin Panel</h1>
            </NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/service">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </NavStyled>
    </>
  );
};

const NavStyled = styled.div`
  .container {
    max-width: 140rem;
    padding: 3rem 2.4rem;
    display: flex;
    justify-content: space-between;
  }

  ul {
    display: flex;
    gap: 3.2rem;
  }
`;

export default Navbar;
