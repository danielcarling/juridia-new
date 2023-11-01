import styled from "styled-components";

export const MessageContainer = styled.div`
  background-color: ${({ theme }) => theme.color.secondary_100};
  color: #d2ae6d;
  font-style: normal;
  border-radius: 10px 0 10px 10px;
  padding: 0.5rem;
  margin-left: 1rem;
  color: black;

  .header {
    padding: 0.7rem 0;
    font-size: 1.2rem;
    text-align: right;
  }

  p {
    text-align: justify;
  }
`;
