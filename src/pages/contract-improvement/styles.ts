import { styled } from "styled-components";

export const Container = styled.div`

`;

export const Main = styled.main`
  position: relative;
  background-color: ${({ theme }) => theme.color.primary_100};
  min-height: 100vh;
  width: 100%;
  padding-bottom: 4rem;
  overflow: hidden;
  padding: 0.75rem 1.125rem;
`;
