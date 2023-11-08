import { useEffect, useState } from "react";
import {
  CepAndNumberContainer,
  CreditCardForm,
  FormGroup,
  InstallmentsContainer,
} from "./styles";
import { DropdownIconSvg } from "../../../../public/DropdownIcon";
import { maskCep, maskCpfCnpj, maskPhone } from "@/utils/masks";
import { formatMoney } from "@/utils/formatMoney";
import { getAPI } from "@/lib/axios";

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
  installments: string | number;
  setInstallments: (value: string) => void;
  installmentsValues: number[];
  saveCreditCard: boolean;
  setSaveCreditCard: (value: boolean) => void;
  creditValue: number | undefined;
}

export function CardStep2({
  name,
  phoneNumber,
  cpfCnpj,
  cep,
  residencialNumber,
  installments,
  saveCreditCard,
  setName,
  setPhoneNumber,
  setCpfCnpj,
  setInstallments,
  installmentsValues,
  setCep,
  setResidencialNumber,
  setSaveCreditCard,
  creditValue,
}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
  };

  function handleSelect(value: string) {
    setInstallments(value);
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
        <strong>
          {installments}
          {installments !== "Número de parcelas" &&
            `x - ${formatMoney(
              (creditValue ? creditValue : 0) / Number(installments)
            )}`}
        </strong>
        <DropdownIconSvg width="1.6rem" />
        <div className="installments">
          {installmentsValues.map((value) => (
            <div
              className="option"
              onClick={() => handleSelect(value.toString())}
            >
              {value}x - {formatMoney((creditValue ? creditValue : 0) / value)}
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
        <input
          type="checkbox"
          name="saveCard"
          id="saveCard"
          checked={saveCreditCard}
          onChange={(e) => {
            setSaveCreditCard(!saveCreditCard);
          }}
        />
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
