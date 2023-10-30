import styled from "styled-components";

export const CreditCardForm = styled.div`
  padding: 0 2rem;
  max-width: 26.25rem;
  margin: auto;

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

  .validity,
  .securityCode {
    width: 8rem;
  }

  @media (min-width: 1024px) {
    .validity,
    .securityCode {
      width: 10rem;
    }
  }
`;