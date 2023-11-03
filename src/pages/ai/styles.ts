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
  padding: 0.75rem 1.125rem 0;
`;

export const ChatContainer = styled.div`
  /* height: calc(100vh - 3.75rem); */
  overflow: auto;
`;

export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const IaMessage = styled.div`
  border-radius: 0px 30px 30px 30px;
  background: #282c49;
  color: ${({ theme }) => theme.color.secondary_100};
  font-weight: bold;
  text-align: justify;
  padding: 1rem 0.5rem;
  margin-right: 1rem;
`;

export const UserMessage = styled(IaMessage)`
  border-radius: 30px 0 30px 30px;
  margin-right: 0;
  margin-left: 1rem;
  color: #2d1d2e;
  background: ${({ theme }) => theme.color.secondary_100};
`;

export const ChatFooter = styled.div``;
