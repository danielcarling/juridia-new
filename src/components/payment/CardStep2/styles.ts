import styled from "styled-components";

export const CreditCardForm = styled.div`
  padding: 0 2rem;
  max-width: 29rem;
  margin: 1rem auto 0;

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2vh;

  & label {
    font-size: 0.9rem;
    font-weight: 500;
  }

  & input {
    padding: 1rem;
    border: 1px solid #d7d9dd;
    background-color: transparent;
    border-radius: 5px;
    transition: 0.3s;
    color: ${({ theme }) => theme.color.gray_20};

    &::placeholder {
      color: ${({ theme }) => theme.color.gray_80};
    }
  }

  @media (min-width: 1024px) {
    .cep {
      width: 14rem;
    }

    .number {
      width: 10rem;
    }
  }
`;

export const CepAndNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  .cep,
  .number {
    width: 100%;
  }

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;

    .cep {
      width: 14rem;
    }

    .number {
      width: 10rem;
    }
  }
`;

interface InstallmentsProps {
  isOpen: boolean;
}

export const InstallmentsContainer = styled.div<InstallmentsProps>`
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

  img {
    width: 1.5rem;
    transition: 0.2s;

    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  }

  .installments {
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

    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.color.secondary_100_hover};
    }
  }
`;
