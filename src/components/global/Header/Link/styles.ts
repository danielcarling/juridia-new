import Theme from "@/styles/themes";
import styled from "styled-components";

interface Props {
  isActive: boolean;
}

export const Container = styled.div<Props>`
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.color.secondary_100 : theme.color.primary_100};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  cursor: pointer;
  text-align: center;
  font-size: 1.125rem;
  font-style: italic;
  font-weight: 900;
  text-align: center;
  color: ${({ theme, isActive }) =>
    isActive ? theme.color.primary_100 : theme.color.secondary_100};
  border: 2px solid ${({ theme }) => theme.color.primary_100};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;
