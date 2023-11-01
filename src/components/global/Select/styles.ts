import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const SelectContainer = styled.div<Props>`
  & * {
    font-family: "Lato", sans-serif;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  background: #f5f5f5;
  padding: 0.5rem 0;
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-style: italic;
  position: relative;
  transition: 0.2s;
  border-radius: ${({ isOpen }) => (isOpen ? "10px 10px 0 0" : "10px")};
  color: ${({ theme }) => theme.color.secondary_100};
  width: 16.75rem;
  margin: auto;

  svg {
    position: absolute;
    top: 0;
    right: 1rem;
    transition: 0.2s;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  }

  .options-container {
    position: absolute;
    z-index: 10;
    top: 2.5rem;
    border: 1px solid #d7d9dd;
    border-radius: 0 0 5px 5px;
    left: 0;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    background: #f5f5f5;
  }

  .option {
    padding: 0.2rem 2rem;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background-color: #d5d2d2;
      scale: 1.01;
    }
  }

  @media (min-width: 1024px) {
    width: 22rem;
  }
`;
