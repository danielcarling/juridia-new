import { styled } from "styled-components";

export const Container = styled.div`
  & * {
    font-family: "Lato", sans-serif;
  }
`;

export const Main = styled.main`
  position: relative;
  background-color: ${({ theme }) => theme.color.primary_100};
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 0.75rem 1.125rem 4rem;
`;

export const PageTitle = styled.div`
  padding: 1rem 0 2rem;
  @media (min-width: 1024px) {
    padding: 1rem 0 4.75rem;
  }
`;

export const Content = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }
`;

export const ContractForm = styled.div`
  margin: 0 auto;
  max-width: 39rem;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
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
    font-weight: 900;
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
    font-weight: 900;
    font-style: italic;
    color: #1d1f2e;
    border: 0;
    padding: 1rem 5%;
    border-radius: 20px;
    background: ${({ theme }) => theme.color.secondary_100};
    transition: 0.3s;

    &:hover {
      background: ${({ theme }) => theme.color.secondary_100_hover};
    }
  }
`;

export const ExtraInfo = styled.div`
  max-width: 39rem;
  margin: auto;

  @media (min-width: 1024px) {
    width: 95%;
  }
`;

export const SolutionInfo = styled.div`
  background-color: #282c49;
  width: 95%;
  height: 20rem;
  margin: 0 auto;
  border-radius: 20px;
`;

export const VideoContainer = styled.div`
  margin: auto;
  .iframe-container {
    position: relative;
    overflow: hidden;
    width: 95%;
    margin: auto;
    padding-bottom: 56.25%;
  }

  iframe {
    border-radius: 15px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: 26.25rem;
  }
`;
