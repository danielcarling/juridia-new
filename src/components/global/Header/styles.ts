import { Offcanvas } from "react-bootstrap";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  padding: 1.4rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.secondary_100};

  button {
    position: absolute;
    left: 0.75rem;
    top: 0.75rem;
    border: 0;
    background: transparent;
    transition: 0.3s;

    img {
      width: 2.5rem;
      height: auto;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  img {
    width: auto;
    height: 1rem;
  }
`;

export const Container = styled(Offcanvas)`
  background-color: ${({ theme }) => theme.color.secondary_100};
  max-width: 300px;

  .btn-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
`;

export const Title = styled(Offcanvas.Title)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: auto;

  img:first-child {
    width: 3rem;
  }

  img:last-child {
    width: 8rem;
  }
`;

export const Body = styled(Offcanvas.Body)`
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.nav`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Social = styled.div`
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  img {
    width: 1.3rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  span,
  strong {
    font-size: 0.8rem;
  }
`;
