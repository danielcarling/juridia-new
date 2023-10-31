import { styled } from "styled-components";

export const Container = styled.div`

`;

export const Main = styled.main`
  background-color: ${({ theme }) => theme.color.primary_100};
  min-height: 100vh;
  width: 100%;
  padding-bottom: 4rem;
  overflow: hidden;
`;

export const UserInfo = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 2%;
`
