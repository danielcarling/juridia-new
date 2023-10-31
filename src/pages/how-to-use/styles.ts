import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Main = styled.main`
  background-color: ${({ theme }) => theme.color.primary_100};
  min-height: 100vh;
  width: 100%;
  padding-bottom: 4rem;
  overflow: hidden;
`;

export const PrincipalBanner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 1.5rem 0;
  img {
    width: 95%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
  }

  @media (min-width: 1024px) {
    img {
      background-color: transparent;
      width: 70%;
    }
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  padding: 0.5rem 0;
  margin-left: 1rem;
`;
