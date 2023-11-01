import { styled } from "styled-components";

export const Container = styled.div``;

export const Main = styled.main`
  position: relative;
  background-color: ${({ theme }) => theme.color.primary_100};
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 0.75rem 1.125rem 4rem;
`;

export const ContractForm = styled.div`
  margin: auto;
  max-width: 39rem;
`;

export const ContractDetails = styled.div`
  textarea {
    border-radius: 10px;
    border: 3px solid #d2ae6d;
    background: #dadada;
    width: 100%;
    height: 8rem;
    padding: 0.75rem;

    &::placeholder {
      color: #9d9d9d;
      font-weight: 300;
      font-style: italic;
    }
  }
`;

export const SelectContract = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 20px;
  border: 3px solid #d2ae6d;
  height: 8.875rem;
  padding: 0 0.5rem;

  span {
    color: ${({ theme }) => theme.color.secondary_100};
    font-weight: 700;
    font-size: 1.125rem;
  }

  label {
    text-align: center;
    border-radius: 8.54px;
    border: 3px solid #d2ae6d;
    padding: 0.75rem 0.5rem;
    color: ${({ theme }) => theme.color.secondary_100};
    font-size: 0.875rem;
    font-weight: 800;
    font-style: italic;
  }

  strong {
    color: ${({ theme }) => theme.color.secondary_100};
    text-align: center;
  }

  #select-document {
    display: none;
  }
`;

export const SubmitContract = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.125rem 0 1.5rem;
  button {
    font-size: 1.625rem;
    font-weight: 800;
    font-style: italic;
    color: #1d1f2e;
    border: 0;
    padding: 1rem 5%;
    border-radius: 20px;
    background: ${({ theme }) => theme.color.secondary_100};

    &:hover {
      background: ${({ theme }) => theme.color.secondary_100_hover};
    }
  }
`;

export const ExtraInfo = styled.div`
  max-width: 39rem;
  margin: auto;
`;

export const SolutionInfo = styled.div`
  background-color: #282c49;
  width: 95%;
  height: 20rem;
  margin: 0 auto;
  border-radius: 20px;
`;
