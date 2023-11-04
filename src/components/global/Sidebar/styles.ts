import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 18rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.color.secondary_100};
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

export const UserInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.7rem 0 0.7rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #8c7552;

  .user-picture {
    img {
      width: 2.3125rem;
      height: auto;
    }
  }

  .name-and-email {
    color: white;
    display: flex;
    flex-direction: column;
    font-style: italic;

    strong {
      font-size: 1rem;
      font-weight: 900;
    }

    span {
      font-size: 0.625rem;
      font-weight: 500;
    }
  }
`;
