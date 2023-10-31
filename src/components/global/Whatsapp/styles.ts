import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 1rem;
  cursor: pointer;
  right: 1rem;
  opacity: 0.4;
  transition: 0.3s;
  img {
    width: 2.5rem;
  }

  &:hover {
    opacity: 1;
  }
`;
