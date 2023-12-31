import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  background: linear-gradient(110deg, #887146 6.39%, #282a3b 93.04%);
  border-radius: 6px;
  box-shadow: 0.75687px 1.89218px 1.13531px 0px rgba(0, 0, 0, 0.15);
  color: "white";
  width: 20rem;

  .logoContainer {
    position: absolute;
    top: 1.125rem;
    left: 1.25rem;
    img {
      width: 4.125rem;
      height: auto;
    }
  }

  .textLogo {
    svg {
      width: 8.125rem;
      height: auto;
    }
  }

  @media (min-width: 1024px) {
    width: 26.5rem;

    .logoContainer {
      top: 1.5rem;
      left: 1.625rem;
      img {
        width: 5.625rem;
      }
    }

    .textLogo {
      svg {
        width: 10.875rem;
      }
    }
  }
`;

export const Content = styled.div`
  color: white;
  margin-left: 4rem;
  padding: 2.75rem 0 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 1024px) {
    padding: 3.75rem 0 2rem;
  }
`;

export const CreditCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.875rem;
  & * {
    font-weight: 400;
    font-family: monospace;
    font-size: 0.75rem;
  }

  @media (min-width: 1024px) {
    & * {
      font-size: 0.875rem;
    }
  }
`;
