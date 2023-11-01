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
  height: 18rem;
  border-radius: 23px;
  margin-top: 2rem;
  border: 1px solid ${({ theme }) => theme.color.secondary_100};
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
    font-size: 14.741px;
    font-style: italic;
    font-weight: 600;
    line-height: normal;
    padding: 0.5rem 0.75rem 0.5rem 0;
  }
`;
