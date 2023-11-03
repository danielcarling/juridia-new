import { styled } from "styled-components";

export const Container = styled.div`
  & * {
    font-family: "Lato", sans-serif;
  }
  background-color: ${({ theme }) => theme.color.primary_100};
`;

export const Main = styled.main`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary_100};
  overflow: hidden;
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.color.secondary_100};
  }

  ::-webkit-scrollbar-track {
    background-color: #323654;
  }
`;

export const ChatContainer = styled.div`
  position: relative;
  height: calc(100vh - 11rem);
  padding: 0.75rem 1.125rem 0;
  overflow: auto;
  margin: 0.5rem auto 0;
  max-width: 45rem;
  margin-bottom: 6.5rem;

  @media (min-width: 1024px) {
    max-width: 51rem;
    height: calc(100vh - 10.78rem);
  }
`;

export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  padding-bottom: 0.5rem;
`;

export const IaMessage = styled.div`
  border-radius: 0px 30px 30px 30px;
  background: #282c49;
  color: ${({ theme }) => theme.color.secondary_100};
  font-size: 0.8rem;
  font-weight: bold;
  text-align: justify;
  padding: 1rem 0.5rem;
  margin-right: 1rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const UserMessage = styled(IaMessage)`
  border-radius: 30px 0 30px 30px;
  margin-right: 0;
  margin-left: 1rem;
  color: #2d1d2e;
  background: ${({ theme }) => theme.color.secondary_100};
`;

export const ChatFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.primary_100};
  height: 6rem;
  width: 100%;

  .send-message {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    background-color: ${({ theme }) => theme.color.secondary_100};
    margin-top: 0.2rem;
    padding: 0.5rem;
    border-radius: 15px 15px 0 0;

    input {
      font-weight: 700;
      width: 90%;
      border: 0;
      border-radius: 10px 0px 10px 10px;
      background: #8c7552;
      padding: 0.5rem;
      color: white;

      &::placeholder {
        color: lightgray;
      }

      &:focus {
        outline: 1px solid ${({ theme }) => theme.color.primary_100};
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
  }

  .bottom-bar {
    background-color: #323654;
    height: 100%;
  }

  @media (min-width: 1024px) {
    height: 4.5rem;

    .send-message {
      border-radius: 20px 20px 0 0;
      width: 80%;
      margin: auto;
      height: 100%;
      padding: 0.5rem 0.5rem 0.5rem 9rem;

      input {
        padding: 0.7rem;
      }

      button {
        width: 3rem;
        height: 3rem;

        img {
          width: 2.5rem;
        }
      }
    }
  }
`;
