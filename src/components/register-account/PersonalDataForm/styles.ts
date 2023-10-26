import styled from "styled-components";

export const Container = styled.div`
  /* min-height: 100vh; */
  position: relative;
  padding-bottom: 4rem;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const RegisterForm = styled.div``;

export const RegisterFormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6vh;

  strong {
    color: ${({ theme }) => theme.color.secondary_100};
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

export const RadioContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  input[type="radio"] {
    display: none;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

interface RadioSelectorProps {
  checked: boolean;
}

export const RadioSelector = styled.label<RadioSelectorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.625rem;
  height: 1.625rem;
  border: 1px solid ${({ theme }) => theme.color.gray_60};
  border-radius: 50%;

  div {
    transition: 0.3s;
    width: 1.125rem;
    height: 1.125rem;
    background-color: ${({ theme, checked }) =>
      checked ? theme.color.gray_60 : "trasnsparent"};
    border-radius: 50%;
  }
`;

export const NextButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  border-radius: 5px;
  margin: 3vh 0;
  border: 0;
  color: white;
  font-weight: bold;
`;

export const BackButton = styled(NextButton)`
  background-color: transparent;
`;


