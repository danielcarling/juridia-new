import Theme from "@/styles/themes";
import {
  FormGroup,
  RadioContainer,
  RadioGroup,
  RadioSelector,
  RegisterForm,
  RegisterFormHeader,
} from "./styles";
import { useState } from "react";
import { maskCpf } from "@/utils/masks";

interface Props {
  cpf: string;
  onCpfChange: (value: string) => void;
  birthDate: string;
  onBirthDateChange: (value: string) => void;
  gender: string;
  onGenderChange: (value: string) => void;
}
export function PersonalDataForm({
  cpf,
  onCpfChange,
  birthDate,
  onBirthDateChange,
  gender,
  onGenderChange,
}: Props) {
  const handleRadioChange = (event: { target: { value: string } }) => {
    onGenderChange(event.target.value);
  };

  return (
    <RegisterForm>
      <RegisterFormHeader>
        <strong>Dados Básicos</strong>
        <span>Preencha os campos logo abaixo</span>
      </RegisterFormHeader>

      <FormGroup>
        <label htmlFor="cpf">Seu CPF</label>
        <input
          type="text"
          id="cpf"
          placeholder="Digite seu CPF"
          value={cpf}
          onChange={(e) => onCpfChange(maskCpf(e.target.value))}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="bithDate">Data de Nascimento</label>
        <input
          type="date"
          placeholder="Sua Data de Nascimento"
          style={{ width: "100%" }}
          value={birthDate}
          onChange={(e) => onBirthDateChange(e.target.value)}
        />
      </FormGroup>

      <div>
        <label htmlFor="gender" style={{ marginBottom: "0.75rem" }}>
          Sexo
        </label>
        <RadioContainer>
          <RadioGroup>
            <RadioSelector htmlFor="male" checked={gender === "male"}>
              <div />
            </RadioSelector>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={gender === "male"}
              onChange={handleRadioChange}
            />
            <label htmlFor="male">Masculino</label>
          </RadioGroup>

          <RadioGroup>
            <RadioSelector htmlFor="female" checked={gender === "female"}>
              <div />
            </RadioSelector>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={gender === "female"}
              onChange={handleRadioChange}
            />
            <label htmlFor="female">Feminino</label>
          </RadioGroup>
        </RadioContainer>
      </div>
    </RegisterForm>
  );
}
