import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  position: relative;
  padding-bottom: 4rem;
  background-color: ${({ theme }) => theme.color.primary_100};
`;

interface ProgressBarProps {
  step: number;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  position: absolute;
  top: 3.7rem;
  background-color: ${({ theme }) => theme.color.secondary_100};
  height: 5px;
  transition: 0.5s ease-in-out;

  width: ${({ step }) =>
    step === 1 ? "10%" : step === 2 ? "50%" : step === 3 ? "90%" : "100%"};
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const FormContainer = styled.div`
  padding: 0 8%;
  width: 95%;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 50vw;
  }
`;

export const RegisterFormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6vh;

  strong {
    font-size: 1.5rem;
  }

  span {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.color.gray_80};
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

export const PasswordRecovery = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    border: 0;
  }
`;

export const TermsContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  font-size: 0.9rem;

  input {
  }

  span {
    cursor: pointer;
    transition: 0.3s;

    &:hover {
    }
  }
`;

export const NextButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  border-radius: 5px;
  margin: 3vh 0;
  border: 0;
  outline: 0;
  background-color: ${({ theme }) => theme.color.secondary_100};
  color: white;
  font-weight: bold;

  transition: 0.3s;

  &:hover {
    background-color: #ad905a;
  }
`;

export const BackButton = styled(NextButton)`
  background-color: transparent;
  color: ${({ theme }) => theme.color.secondary_100};
  border: 1px solid ${({ theme }) => theme.color.secondary_100};

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary_100};
    color: ${({ theme }) => theme.color.primary_100};
  }
`;

export const ArtSection = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-bottom: 5rem;

  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    margin-bottom: 1rem;
  }

  @media (min-width: 1200px) {
    height: 100vh;

    width: 50vw;

    img {
      height: 100vh;
    }
  }
`;
