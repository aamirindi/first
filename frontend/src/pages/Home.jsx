import styled from "styled-components";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HomeStyled>
        <main>
          <section className="home-section">
            <div className="container">Hello </div>
          </section>
        </main>
      </HomeStyled>
      <Footer />
    </>
  );
};

const HomeStyled = styled.div`
  background-color: red;
  height: 100%;
`;

export default Home;
