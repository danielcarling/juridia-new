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

  @media (min-width: 1024px) {
    padding: 2rem 3.5rem 4rem;
  }
`;

export const PageTitle = styled.div`
  padding: 1rem 0 2rem;
  @media (min-width: 1024px) {
    padding: 1rem 0 4.75rem;
  }
`;

export const CaseOptions = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 20rem;
  gap: 2.5rem;

  @media (min-width: 420px) {
    grid-template-columns: 25rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: 20rem 20rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 30rem 30rem;
  }
`;

export const SelectGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ClientDataButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.secondary_100};
  padding: 0.5rem 0;
  font-size: 1rem;
  font-style: italic;
  position: relative;
  transition: 0.2s;
  border-radius: 10px;
  color: white;
  width: 16.75rem;
  margin: auto;

  @media (min-width: 1024px) {
    width: 22rem;
  }
`;

export const CaseDescription = styled.div`
  margin-top: 1rem;
  .subtitle {
    display: grid;
    grid-template-columns: 20rem;
    justify-content: center;

    @media (min-width: 420px) {
      grid-template-columns: 25rem;
    }

    @media (min-width: 768px) {
      grid-template-columns: 42rem;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 62rem;
    }
  }
`;

export const ChatContainer = styled.div`
  margin: 0 auto;
  max-width: 47rem;
  border-radius: 23px;
  margin-top: 2rem;
  border: 1px solid ${({ theme }) => theme.color.secondary_100};
  overflow: hidden;
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 6px; 
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) =>
      theme.color
        .secondary_100}; 
  }

  ::-webkit-scrollbar-track {
    background-color: #323654;
  }

  @media (min-width: 1024px) {
    max-width: 55rem;
  }
`;

export const ChatHeader = styled.header`
  border-radius: 23px 23px 0 0;
  display: flex;
  gap: 0.625rem;
  align-items: center;
  background-color: #323654;

  img {
    margin-left: 0.25rem;
    width: 2rem;
  }

  p {
    color: #fff;
    text-align: justify;
    font-size: 0.93rem;
    font-style: italic;
    font-weight: 600;
    line-height: normal;
    padding: 0.5rem 0.75rem 0.5rem 0;
  }

  @media (min-width: 1024px) {
    img {
      margin-left: 2rem;
    }

    p {
      padding: 1.3rem;
    }
  }
`;

export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.2rem;
  overflow: auto;
  height: 16rem;
  padding: 0 0.2rem;

  @media (min-width: 1024px) {
    height: 20rem;
  }
`;

export const ChatFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-grow: 0;
  background-color: ${({ theme }) => theme.color.secondary_100};
  margin-top: 0.2rem;
  padding: 0.5rem;

  input {
    font-weight: 700;
    width: 90%;
    border: 0;
    border-radius: 10px 0px 10px 10px;
    background: #8c7552;
    padding: 0.5rem;
    color: white;

    &:focus {
      outline: 1px solid ${({ theme }) => theme.color.primary_100};
    }
    &::placeholder {
      color: white;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #323654;
    border-radius: 50%;
    width: 2.2rem;
    height: 2.2rem;
    border: 0;
    transition: 0.2s;
    margin-right: 0.5rem;

    img {
      width: 2rem;
      height: auto;
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const BuildContract = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.625rem;

  button {
    background-color: ${({ theme }) => theme.color.secondary_100};
    color: #1d1f2e;
    text-align: center;
    font-size: 21.788px;
    font-style: italic;
    font-weight: 900;
    line-height: normal;
    padding: 0.875rem;
    border: 0;
    border-radius: 7px;

    transition: 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.color.secondary_100_hover};
    }
  }
`;
