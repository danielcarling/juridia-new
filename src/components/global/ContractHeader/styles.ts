import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  background-color: #8c7552;
  color: white;
  display: flex;
  justify-content: center;
  padding: 1.125rem 0;

  .logo img {
    width: 20rem;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  color: #282c49;
  top: 1rem;
  left: 2%;
  background-color: transparent;
  border: none;

  .svg {
    width: 1rem;
  }

  @media (min-width: 1024px) {
    top: 0.5rem;
  }
`;

export const UserInfo = styled.div`
  position: absolute;
  top: 0.3rem;
  right: 2%;
  display: flex;
  align-items: center;
  gap: 0.625rem;

  img {
    width: 3.125rem;
    height: 3.125rem;
  }

  .nameAndEmail {
    display: flex;
    flex-direction: column;

    strong {
      font-weight: 900;
      font-style: italic;
    }

    span {
      font-size: 0.625rem;
      font-weight: 500;
    }
  }
`;
