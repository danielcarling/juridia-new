import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 16rem;
  padding: 1.5rem;
  background-color: ${({theme}) => theme.color.secondary_100};
`;

export const SidebarHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

export const Nav = styled.nav`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
