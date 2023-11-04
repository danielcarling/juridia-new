import { useEffect, useState } from "react";
import { JuridiaTextSvg } from "../../../../public/JuridiaTextLogo";
import { Container, Content, CreditCardInfo } from "./styles";

interface Props {
  cardNumber: string;
  setCardNumber: (value: string) => void;
}

export function CreditCard({ cardNumber, setCardNumber }: Props) {
  const handleCardNumberChange = (value: string) => {
    const inputCardNumber = value.replace(/\D/g, ""); // Remove non-digit characters

    // Mask the input card number with 'X'
    const maskedCardNumber = inputCardNumber
      .padEnd(16, "X")
      .split("")
      .map((char, index) => (index % 4 === 0 && index > 0 ? ` ${char}` : char))
      .join("")
      .trim();

    setCardNumber(maskedCardNumber);
  };

  useEffect(() => {
    handleCardNumberChange(cardNumber);
  }, [cardNumber]);

  return (
    <Container>
      <div className="logoContainer">
        <img src="/juridiaLogo.svg" alt="" />
      </div>
      <Content>
        <div className="textLogo">
          <JuridiaTextSvg />
        </div>
        <CreditCardInfo>
          <strong>{cardNumber}</strong>
          <span>Cartão de Crédito Jurid IA</span>
        </CreditCardInfo>
      </Content>
    </Container>
  );
}
