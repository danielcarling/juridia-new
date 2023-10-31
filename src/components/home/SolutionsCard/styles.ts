import styled from "styled-components";

export const Container = styled.div`
  width: 16.75rem;
  margin-top: 2rem;
  border-radius: 11px;
  border: 1px solid #d2ae6d;
  padding: 1rem 0.625rem 0.3rem;

  background: linear-gradient(144deg, #a07d40 25.42%, #282a3b 78.84%);
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

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  button {
    text-align: center;
    border-radius: 20px;
    border: 1px solid #fff;
    background: #a88d61;
    font-weight: 800;
    font-style: italic;
    color: white;
    padding: 0.4rem 0;
    transition: 0.3s;
    &:hover {
      opacity: 0.9;
    }

    &:last-child {
      background-color: white;
      text-shadow: 1px 1px 1px black;
      font-size: 0.75rem;
    }
  }
`;
