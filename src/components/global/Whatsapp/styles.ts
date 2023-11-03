import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0.3rem;
  cursor: pointer;
  right: 0.5rem;
  opacity: 0.4;
  transition: 0.3s;
  img {
    width: 1.8rem;
  }

  &:hover {
    opacity: 1;
  }

  @media(min-width: 1024px) {
    right: 1.5rem;
    bottom: 0.5rem;
    img {
      width: 2.5rem;
    }
  }
`;
