import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.primary_100};
  padding-bottom: 5rem;
  min-height: 100vh;
`;

export const Main = styled.main`
  padding: 0.75rem;
`;

interface ProgressBarProps {
  step: number;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  position: absolute;
  left: 0;
  background-color: ${({ theme }) => theme.color.secondary_100};
  height: 4px;
  transition: 0.5s ease-in-out;
  top: 30rem;

  width: ${({ step }) =>
    step === 1 ? "10%" : step === 2 ? "50%" : step === 3 ? "90%" : "100%"};

  @media (min-width: 1024px) {
    top: -0.125rem;
  }
`;

export const SalesArtContainer = styled.div`
  img {
    width: 100%;
  }
`;

export const PaymentHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;

  strong {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.secondary_100};
  }

  span {
    font-size: 0.875rem;
    color: white;
  }
`;

export const PayOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  @media (min-width: 360px) {
    flex-direction: row;
  }
`;

interface PayOptionCardProps {
  selected: boolean;
}

export const PayOptionCard = styled.div<PayOptionCardProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 10rem;
  height: 4.8rem;
  border-radius: 10px;
  transition: 0.3s;
  border: 1px solid ${({ theme }) => theme.color.secondary_100};
  background-color: ${({ theme, selected }) =>
    selected ? theme.color.secondary_100 : theme.color.primary_100};
  color: ${({ theme, selected }) =>
    selected ? theme.color.primary_100 : theme.color.secondary_100};

  svg {
    margin-left: 1rem;
    width: 3.5rem;
    height: auto;
  }
`;
