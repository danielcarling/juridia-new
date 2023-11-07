import { useState } from "react";
import {
  CepAndNumberContainer,
  CreditCardForm,
  FormGroup,
  InstallmentsContainer,
} from "./styles";
import { DropdownIconSvg } from "../../../../public/DropdownIcon";
import { maskCep, maskCpfCnpj, maskPhone } from "@/utils/masks";

interface Props {
  name: string;
  setName: (value: string) => void;
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  cpfCnpj: string;
  setCpfCnpj: (value: string) => void;
  cep: string;
  setCep: (value: string) => void;
  residencialNumber: string;
  setResidencialNumber: (value: string) => void;
}

export function CardStep2({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  cpfCnpj,
  setCpfCnpj,
  cep,
  setCep,
  residencialNumber,
  setResidencialNumber,
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [installments, setInstallments] = useState("Número de Parcelas");

  const installmentsValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const handleBlur = () => {
    setIsFocused(false);
  };

  function handleSelect(value: string) {
    setInstallments(value + "x");
    setIsFocused(false);
    const saveCard = document.getElementById("saveCard");
    saveCard?.focus();
  }

  return (
    <CreditCardForm>
      <FormGroup>
        <label htmlFor="name">Nome Completo</label>
        <input
          type="text"
          id="cardName"
          placeholder="Digite o seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="phoneNumber">Telefone de Cobrança</label>
        <input
          type="tel"
          id="phoneNumber"
          placeholder="Digite o seu número de telefone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(maskPhone(e.target.value))}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="cpf-cnpj">CPF ou CNPJ</label>
        <input
          type="text"
          id="cpf-cnpj"
          placeholder="Digite seu CPF ou CNPJ"
          value={cpfCnpj}
          onChange={(e) => setCpfCnpj(maskCpfCnpj(e.target.value))}
        />
      </FormGroup>

      <CepAndNumberContainer>
        <FormGroup>
          <label htmlFor="cep">CEP de Cobrança</label>
          <input
            type="text"
            id="cep"
            placeholder="Digite o CEP de cobrança"
            className="cep"
            value={cep}
            onChange={(e) => setCep(maskCep(e.target.value))}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="number">Número</label>
          <input
            type="text"
            id="number"
            placeholder="Digite o número"
            className="number"
            value={residencialNumber}
            onChange={(e) => setResidencialNumber(e.target.value)}
          />
        </FormGroup>
      </CepAndNumberContainer>

      <InstallmentsContainer
        tabIndex={0}
        onClick={() => setIsFocused(!isFocused)}
        onBlur={handleBlur}
        isOpen={isFocused}
      >
        <strong>{installments} </strong>
        <DropdownIconSvg width="1.6rem" />
        <div className="installments">
          {installmentsValues.map((value) => (
            <div
              className="option"
              onClick={() => handleSelect(value.toString())}
            >
              {value}x - R$ 1250,00
            </div>
          ))}
        </div>
      </InstallmentsContainer>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          margin: "1.5rem 0 1rem",
        }}
      >
        <input type="checkbox" name="saveCard" id="saveCard" />
        <label
          htmlFor="saveCard"
          style={{ fontWeight: "bold", fontStyle: "italic" }}
        >
          Salvar Cartão para renovação
        </label>
      </div>
    </CreditCardForm>
  );
}
