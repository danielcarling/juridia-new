import styled from "styled-components";

export const RegisterHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.primary_100};
  border-bottom: 2px solid #D9D9D9;
  padding: 0.25rem;

  img {
    width: 4rem;
    height: auto;
    margin-left: 1rem;
  }

  button {
    padding: 0.6rem 0.8rem;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.color.secondary_100};
    background-color: transparent;
    color: ${({ theme }) => theme.color.secondary_100};
    font-weight: bold;
    margin-right: 5%;
    transition: 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.color.secondary_100};
      color: ${({ theme }) => theme.color.primary_100};
    }
  }
`;
