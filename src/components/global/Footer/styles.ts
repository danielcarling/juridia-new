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
    margin: 0 0 0 0.1rem;
  }

  p:last-child {
    margin: 0 0.1rem 0 0;
  }

  @media (min-width: 768px) {
    height: 4rem;
  }
`;
