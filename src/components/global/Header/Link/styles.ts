import Theme from "@/styles/themes";
import styled from "styled-components";

interface Props {
  isActive: boolean;
}

export const Container = styled.div<Props>`
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.color.secondary_100 : theme.color.primary_100};
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 2.2rem;
  font-style: italic;
  font-weight: 800;
  text-align: center;
  color: ${({ theme, isActive }) =>
    isActive ? theme.color.primary_100 : theme.color.secondary_100};
  border: 2px solid ${({ theme }) => theme.color.primary_100};
`;
