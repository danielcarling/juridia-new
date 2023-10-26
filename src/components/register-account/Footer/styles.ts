import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.color.gray_60};
  font-size: 0.5rem;
  color: ${({ theme }) => theme.color.gray_20};
  position: absolute;
  bottom: 0;
  width: 100%;
  gap: 1rem;

  p:first-child {
    margin-left: 0.2rem;
  }

  p:last-child {
    margin-right: 0.2rem;
  }

  @media (min-width: 768px) {
    font-size: 0.675rem;
    height: 4rem;

    p:first-child {
      margin-left: 2rem;
    }

    p:last-child {
      margin-right: 2rem;
    }
  }

  @media (min-width: 1024px) {
    p:first-child {
      margin-left: 5rem;
    }

    p:last-child {
      margin-right: 5rem;
    }
  }
`;
