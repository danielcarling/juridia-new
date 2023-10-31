import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const SelectContainer = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #d7d9dd;
  background: ${({ theme }) => theme.color.secondary_100};
  padding: 0.75rem 0.625rem 0.75rem 3rem;
  font-size: 1.125rem;
  position: relative;
  transition: 0.2s;

  img {
    width: 1.5rem;
    transition: 0.2s;
    transform: ${({ isOpen }) => (isOpen ? "rotate(0deg)" : "rotate(180deg)")};
  }

  .options-container {
    position: absolute;
    bottom: 3.1rem;
    border: 1px solid #d7d9dd;
    border-radius: 5px 5px 0 0;
    left: 0;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    background: ${({ theme }) => theme.color.secondary_100};
  }

  .option {
    padding: 0.2rem 2rem;
    transition: 0.2s;

    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.color.secondary_100_hover};
      scale: 1.01;
    }
  }
`;
