import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const SelectContainer = styled.div<Props>`
  align-items: center;
  width: 100%;
  cursor: pointer;
  background: ${({ theme }) => theme.color.primary_100};
  padding: 1rem;
  font-size: 1rem;
  position: relative;
  transition: 0.2s;
  border-radius: ${({ isOpen }) => (isOpen ? "5px 5px 0 0" : "5px")};
  color: #b6b7bc;
  border: 1px solid #d7d9dd;
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
    top: 3.6rem;
    outline: 1px solid #d7d9dd;
    border-radius: 0 0 5px 5px;
    left: 0;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    background: ${({ theme }) => theme.color.primary_100};
  }

  .option {
    padding: 1rem;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background-color: #31344d;
    }
  }

  @media (min-width: 1024px) {
  }
`;
