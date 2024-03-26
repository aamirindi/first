import Lottie from "react-lottie";
import animationData from "../assets/lotties/login";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 960) {
        setWidth(350);
        setHeight(350);
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
        <div className="login-image">
          <Lottie options={defaultOptions} width={width} height={height} />
        </div>
        <div className="login">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
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
            <button type="submit">LOGIN</button>
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
    .login-image {
      width: 50%;
    }
    .login {
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

      .login-image {
        width: 90%;
      }
      .login {
        width: 90%;
      }
    }
  }
`;

export default Login;
