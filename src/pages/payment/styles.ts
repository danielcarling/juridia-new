import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.primary_100};
  padding-bottom: 5rem;
  min-height: 100vh;
  font-family: "Archivo", sans-serif;
`;

export const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 82vh;

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
  }
`;

export const SalesArtContainer = styled.div`
  margin: auto;
  padding: 0.75rem;

  img {
    width: 100%;
    width: clamp(100%, 100%, 30rem);
  }
`;

export const PaymentContainer = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    width: 50vw;
  }
`;

interface ProgressBarProps {
  step: number;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  position: fixed;
  z-index: 9999;
  left: 0;
  background-color: ${({ theme }) => theme.color.secondary_100};
  height: 4px;
  transition: 0.5s ease-in-out;
  top: 5.6rem;

  width: ${({ step }) =>
    step === 1 ? "20%" : step === 2 ? "80%" : "100%"};
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

  @media (min-width: 1024px) {
    width: 14.25rem;
    height: 6.8rem;
    gap: 1rem;
    font-size: 2rem;

    svg {
      width: 4.8rem;
    }
  }
`;

export const GeneratePix = styled.button`
  margin: 7rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0;
  border-radius: 10px;
  background: #37b5aa;
  color: white;
  padding: 0 0.5rem;

  span {
    font-size: 1rem;
  }

  strong {
    font-size: 1.5rem;
  }

  @media (min-width: 768px) {
    span {
      font-size: 1.125rem;
    }

    strong {
      font-size: 1.75rem;
    }
  }
`;

export const PixContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QrCode = styled.div`
  width: 13rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: white;
  margin: 1rem 0 1.9rem;

  img {
    width: 11rem;
    height: auto;
  }

  @media (min-width: 1024px) {
    width: 17rem;

    img {
      width: 15rem;
    }
  }
`;

export const CopyPastePix = styled(GeneratePix)`
  margin: 0;
  background: #20b038;
  color: white;
  padding: 0 2rem;

  span {
    font-size: 0.75rem;
  }

  strong {
    font-size: 1.125rem;
  }

  @media (min-width: 768px) {
    span {
      font-size: 1.125rem;
    }

    strong {
      font-size: 1.75rem;
    }
  }
`;

export const FinishPix = styled(CopyPastePix)`
  background: ${({ theme }) => theme.color.secondary_100};
  color: black;
  margin-top: 1rem;

  span {
    font-size: 0.625rem;
  }

  strong {
    font-size: 0.875rem;
  }

  @media (min-width: 768px) {
    margin-top: 2rem;

    span {
      font-size: 0.875rem;
    }

    strong {
      font-size: 1.375rem;
    }
  }
`;

export const NextStep = styled.div`
  display: flex;
  justify-content: center;

  button {
    background-color: ${({ theme }) => theme.color.secondary_100};
    font-size: 1.5rem;
    font-style: italic;
    font-weight: bold;
    padding: 0.75rem 2rem;
    border: 0;
    border-radius: 8px;
    color: black;
    transition: 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.color.secondary_100_hover};
    }
  }
`;

export const EndPurchase = styled(NextStep)`
  button {
    background-color: #20b038;
    color: black;

    &:hover {
      background-color: #1b922f;
    }
  }
`;
