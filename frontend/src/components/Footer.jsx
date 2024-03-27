import styled from "styled-components";
const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <p>developed by aamirindi</p>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  div {
    width: 100%;
    background-color: var(--btn-color);
    bottom: 0;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Footer;
