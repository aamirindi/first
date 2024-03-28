import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 960);

  const openNav = () => {
    setSidebarOpen(true);
  };

  const closeNav = () => {
    setSidebarOpen(false);
  };

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 960);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavLinkClick = () => {
    if (!isDesktop) {
      closeNav();
    }
  };

  return (
    <>
      {isDesktop ? (
        <Navbar />
      ) : (
        <SidebarStyled isSidebarOpen={isSidebarOpen}>
          <div
            className="sidebar-overlay"
            onClick={closeNav}
            style={{ display: isSidebarOpen ? "block" : "none" }}></div>
          <div className="logo-brand">
            <NavLink to="/" onClick={closeNav}>
              <h1>Admin Panel</h1>
            </NavLink>
          </div>
          <div
            className={`sidebar ${
              isSidebarOpen ? "sidebar-open" : "sidebar-close"
            }`}>
            <NavLink to="#" onClick={closeNav} className="closebtn">
              &times;
            </NavLink>
            <ul>
              <li>
                <NavLink
                  to="/"
                  onClick={handleNavLinkClick}
                  activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={handleNavLinkClick}
                  activeClassName="active-link">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  onClick={handleNavLinkClick}
                  activeClassName="active-link">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={handleNavLinkClick}
                  activeClassName="active-link">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  onClick={handleNavLinkClick}
                  activeClassName="active-link">
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  onClick={handleNavLinkClick}
                  activeClassName="active-link">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <div id="main" style={{ marginLeft: isSidebarOpen ? "70%" : "0" }}>
              {!isDesktop && (
                <button className="openbtn" onClick={openNav}>
                  &#9776;
                </button>
              )}
            </div>
          </div>
        </SidebarStyled>
      )}
    </>
  );
};

const SidebarStyled = styled.div`
  position: relative;
  display: flex;
  padding: 1.6em 1em;
  margin-bottom: 3em;
  width: 100%;
  h1 {
    letter-spacing: 0.2rem;
    position: absolute;
  }

  .sidebar {
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--dark-color);
    overflow-x: hidden;
    transition: width 0.5s ease-in-out;
    z-index: 1;
    padding-top: 60px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      .active {
        color: var(--btn-color);
        font-size: 2rem;
        transition: all 0.4s ease-in-out;
      }
    }

    & a {
      padding: 8px;
      text-decoration: none;
      font-size: 1.5rem;
      color: #818181;
      display: block;
      transition: 0.3s;
      font-weight: 600;
      letter-spacing: 0.2rem;

      &:hover {
        color: var(--btn-color);
      }
    }

    & .closebtn {
      position: absolute;
      top: 10px;
      right: 25px;
      font-size: 40px;
      cursor: pointer;
      color: var(--btn-color);
    }
  }

  .sidebar-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4.5px);
    z-index: 1;
    display: none;
    transition: background-color 0.5s ease-in-out;
  }

  #main {
    transition: margin-left 0.5s ease-in-out;
    padding: 0px;
  }

  .openbtn {
    display: none;
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px 15px;
    font-size: 2rem;
    border: none;
    background: transparent;
    color: var(--btn-color);
  }

  .sidebar-open {
    width: 70%;

    .openbtn {
      display: none;
    }
  }

  .sidebar-close {
    width: 0;
  }

  @media (max-width: 960px) {
    .openbtn {
      display: block;
    }

    .sidebar-open {
      width: 70%;

      overflow: hidden;

      & .openbtn {
        display: block;
      }
    }
  }

  .desktop {
    display: flex;
    justify-content: center;
    height: 60px;
    align-items: center;

    & nav {
      width: 50%;
      display: flex;
      justify-content: space-evenly;
      & a {
        padding: 10px;
        text-decoration: none;
        color: #818181;

        &:hover {
          color: #f1f1f1;
        }
      }
    }
  }
`;

export default Sidebar;
