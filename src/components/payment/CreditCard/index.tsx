import { useEffect, useState } from "react";
import { JuridiaTextSvg } from "../../../../public/JuridiaTextLogo";
import { Container, Content, CreditCardInfo } from "./styles";

interface Props {
  cardNumber: string;
  setCardNumber: (value: string) => void;
}

export function CreditCard({ cardNumber, setCardNumber }: Props) {
  const handleCardNumberChange = (value: string) => {
    value = value.replace(/\D/g, "");

    if (value.length >= 16) {
      value = value.slice(0, 16);
    }

    const maskedCardNumber = value
      .split("")
      .map((char, index) => (index % 4 === 0 && index > 0 ? ` ${char}` : char))
      .join("")
      .trim();

    return maskedCardNumber;
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
          <strong>
            {cardNumber.length === 0
              ? "XXXX XXXX XXXX XXXX"
              : handleCardNumberChange(cardNumber)}
          </strong>
          <span>Cartão de Crédito Jurid IA</span>
        </CreditCardInfo>
      </Content>
    </Container>
  );
}
