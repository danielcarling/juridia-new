import styled from "styled-components";

interface Props {
  priority?: "primary" | "secondary";
}

export const Title = styled.div<Props>`
  position: relative;
  color: ${({ priority }) => (priority === "primary" ? "#1d1f2e" : "#fff")};
  font-style: italic;

  h1 {
    font-weight: 800;
    font-size: ${({ priority }) =>
      priority === "primary" ? "1.3rem" : "1rem"};
  }

  .line {
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    height: 0.5rem;
    width: 4.5rem;
    background-color: ${({ theme }) => theme.color.primary_100};
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: ${({priority}) => (priority === "primary" ? "1.875rem" : "1.3rem")};
    }

    .line {
      height: 0.625rem;
      width: 6.125rem;
    }
  }
`;
