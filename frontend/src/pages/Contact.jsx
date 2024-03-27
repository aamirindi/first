import styled from "styled-components";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "../assets/lotties/contact.json";

const Contact = () => {
  const [width, setWidth] = useState(350);
  const [height, setHeight] = useState(350);

  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleResize = () => {
    if (window.innerWidth <= 960) {
      setWidth(300);
      setHeight(300);
    } else {
      setWidth(350);
      setHeight(350);
    }
  };

  window.addEventListener("resize", handleResize);

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
    <ContactStyled>
      <h1>Contact Us</h1>
      <div className="contact-container">
        <div className="contact-img">
          <Lottie
            options={defaultOptions}
            isClickToPauseDisabled={true}
            width={width}
            height={height}
          />
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
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
                placeholder="email"
                id="email"
                required
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                required
                autoComplete="off"
                value={user.message}
                onChange={handleInput}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </ContactStyled>
  );
};

const ContactStyled = styled.div`
  display: grid;
  justify-content: center;

  .contact-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    .contact-form {
      width: 30vw;

      form {
        width: 100%;
        height: 100%;

        position: relative;

        h1 {
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
          textarea {
            padding: 0.5rem 1rem;
            border-radius: 5px;
            background: #646cff12;
            border: none;
            border-left: 3px solid var(--btn-color);
            height: 30vh;
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
    .contact-container {
      flex-direction: column !important;
      .contact-form {
        width: 100%;
      }
    }
  }
`;

export default Contact;
