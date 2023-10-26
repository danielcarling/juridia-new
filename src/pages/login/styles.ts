import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  position: relative;
  /* padding-bottom: 4rem; */
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.color.primary_100};
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 8rem;

  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const LoginForm = styled.div`
  padding: 0 8%;
  width: 95%;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 50vw;
  }
`;

export const JuridiaLogo = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0 3rem;
  img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
`;

export const LoginFormHeader = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.color.gray_20};
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.color.gray_80};
  }
`;

export const GoogleLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: white;
  font-size: 0.875rem;
  border-radius: 9px;
  padding: 1rem 0.5rem;
  margin: 2.5vh 0;

  strong {
    font-weight: 500;
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

interface EyeSlashProps {
  showPassword: boolean;
}

export const EyeSlashContainer = styled.div<EyeSlashProps>`
  color: ${({ theme, showPassword }) =>
    showPassword ? theme.color.gray_80 : theme.color.gray_10};
  transition: 0.3s;

  svg {
    position: absolute;
    right: 1rem;
    bottom: 0.9rem;
    cursor: pointer;
  }
`;

export const PasswordRecovery = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    font-size: 0.75rem;
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.color.blue_100};
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  border-radius: 5px;
  margin: 3vh 0;
  border: 0;
  background-color: ${({ theme }) => theme.color.secondary_100};
  color: white;
  font-weight: bold;
`;

export const ArtSection = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  img {
    width: 100%;
  }

  @media (min-width: 1200px) {
    height: 100vh;

    width: 50vw;

    img {
      height: 100vh;
    }
  }
`;
