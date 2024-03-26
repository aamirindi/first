import Lottie from "react-lottie";
import animationData from "../assets/lotties/registration";
import styled from "styled-components";

const Register = () => {
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
          <Lottie options={defaultOptions} width={400} height={400} />
        </div>
        <div>
          <form action="">
            <h1>Registration Form</h1>

            <div>
              <label htmlFor="username">Username</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="username">Email</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="username">Phone</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="username">Password</label>
              <input type="text" />
            </div>
            <button type="submit">Register Now</button>
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

    form {
      width: 100%;
      height: 100%;
      /* background: red; */
      padding: 1rem 2.4rem 3.4rem 2.4rem;
      position: relative;

      h1 {
        margin-bottom: 2rem;
        z-index: 10;
      }

      div {
        display: flex;
        flex-direction: column;

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
        margin-top: 1.3rem;
        border-radius: 5px;
        border: 1px solid var(--btn-color);
        font-size: 1rem;
        transition: all 0.4s ease-in-out;

        &:hover {
          background-color: var(--btn-color);
        }
      }
    }
  }
`;

export default Register;
