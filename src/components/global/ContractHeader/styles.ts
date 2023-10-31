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
  top: 0.5rem;
  left: 2%;
  background-color: transparent;
  border: none;
`;

export const UserInfo = styled.div`
  position: absolute;
  top: 0.3rem;
  right: 2%;
  display: flex;
  align-items: center;
  gap: 0.625rem;

  .nameAndEmail {
    display: flex;
    flex-direction: column;

    strong {
      font-weight: 800;
      font-style: italic;
    }

    span {
      font-size: 0.625rem;
      font-weight: 500;
    }
  }
`;
