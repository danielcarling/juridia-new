import styled from "styled-components";

interface Props {
  fontSizeSm?: string;
  fontSizeLg?: string;
}

export const Title = styled.div<Props>`
  position: relative;
  color: white;
  font-style: italic;

  h1 {
    font-size: ${({ fontSizeSm }) => (fontSizeSm ? fontSizeSm : "1.5rem")};
  }

  .line {
    position: absolute;
    left: 0.2rem;
    bottom: -0.5rem;
    height: 0.5rem;
    width: 4.5rem;
    background-color: ${({ theme }) => theme.color.secondary_100};
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: ${({ fontSizeLg }) => (fontSizeLg ? fontSizeLg : "1.875rem")};
    }

    .line {
      height: 0.625rem;
      width: 6.125rem;
    }
  }
`;
