import styled from "styled-components";

interface Props {
  variant: "primary" | "secondary";
}

export const Title = styled.div<Props>`
  position: relative;
  color: white;
  font-style: italic;

  h2 {
    font-size: 1.125rem;
  }

  .line {
    position: absolute;
    left: 0.2rem;
    bottom: -0.5rem;
    height: 0.5rem;
    width: 4.5rem;
    background-color: ${({ theme, variant }) =>
      variant === "primary" ? theme.color.secondary_100 : "#282C49"};
  }

  @media (min-width: 1024px) {
    h2 {
      font-size: 1.5rem;
    }

    .line {
      height: 0.625rem;
      width: 6.125rem;
    }
  }
`;
