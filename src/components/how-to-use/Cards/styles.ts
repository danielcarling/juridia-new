import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  width: 16.75rem;
  margin-top: 2rem;
  border-radius: 11px;
  border: 1px solid #d2ae6d;
  padding: 1rem 0.625rem 0.3rem;
  background: linear-gradient(144deg, #a07d40 25.42%, #282a3b 78.84%);
  transition: 0.2s;

  &:hover {
    scale: 1.02;
  }
`;

export const CardHeader = styled.header`
  .title {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    color: white;
    gap: 0.5rem;
  }

  .imgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background-color: white;

    img {
      width: 2.2rem;
      height: auto;
    }
  }

  span {
    font-size: 0.75rem;
    color: white;
  }
`;

export const TextContainer = styled.div`
  margin: 0.5rem 0;
  color: white;
  text-align: justify;
`;
