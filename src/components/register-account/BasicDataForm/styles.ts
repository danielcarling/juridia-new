import Theme from "@/styles/themes";
import styled from "styled-components";

export const RegisterForm = styled.div`
`;

export const RegisterFormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6vh;

  strong {
    color: ${Theme.color.secondary_100};
    font-size: 1.5rem;
  }

  span {
    font-size: 0.9rem;
    color: white;
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
`;

export const TermsContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  color: white;
  font-size: 0.9rem;

  input {
    
  }

  span {
    color: ${({ theme }) => theme.color.secondary_100};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #A88D61;
    }
  }
`