import Lottie from "react-lottie";
import animationData from "../assets/lotties/registration";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 960) {
        setWidth(300);
        setHeight(300);
      } else {
        setWidth(400);
        setHeight(400);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <RegisterStyled>
      <div className="container">
        <div className="registration-image">
          <Lottie options={defaultOptions} width={width} height={height} />
        </div>
        <div className="register">
          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="username"
                id="username"
                required
                autoComplete="off"
                value={user.username}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="enter your email"
                id="email"
                required
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                name="phone"
                placeholder="enter your phone no"
                id="phone"
                required
                autoComplete="off"
                value={user.phone}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="enter your password"
                id="password"
                required
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
              />
            </div>
            <button type="submit">SIGN UP</button>
          </form>
        </div>
      </div>
    </RegisterStyled>
  );
};

const RegisterStyled = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .registration-image {
      width: 50%;
    }
    .register {
      width: 40%;
      form {
        width: 100%;
        height: 100%;
        padding: 1rem 2.4rem 3.4rem 2.4rem;
        position: relative;

        h1 {
          margin-bottom: 2rem;
          z-index: 10;
          letter-spacing: 0.1rem;
        }

        div {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          label {
            margin-top: 1.3rem;
          }

          input {
            padding: 0.5rem 1rem;
            border-radius: 5px;
            background: #646cff12;
            border: none;
            border-left: 3px solid var(--btn-color);

            &:focus {
              outline: none;
            }
          }
        }
        button {
          background-color: #646cff12;
          padding: 1rem 2.4rem;
          margin-top: 1.5rem;
          border-radius: 5px;
          border: 1px solid var(--btn-color);
          font-size: 1rem;
          transition: all 0.4s ease-in-out;
          letter-spacing: 0.2rem;

          &:hover {
            background-color: var(--btn-color);
          }
        }
      }
    }
  }
  @media (max-width: 960px) {
    .container {
      flex-direction: column;

      .registration-image {
        width: 100%;
      }
      .register {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 1rem;
      }
    }
  }
`;

export default Register;
