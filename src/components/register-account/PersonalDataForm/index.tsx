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

interface Props {
  cpf: string;
  onCpfChange: (value: string) => void;
}
export function PersonalDataForm({ cpf, onCpfChange }: Props) {
  const [selectedGender, setSelectedGender] = useState("");
  const handleRadioChange = (event: { target: { value: string } }) => {
    setSelectedGender(event.target.value);
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
          onChange={(e) => onCpfChange(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="bithDate">Data de Nascimento</label>
        <input
          type="date"
          placeholder="Sua Data de Nascimento"
          style={{ width: "100%" }}
        />
      </FormGroup>

      <div>
        <label htmlFor="gender" style={{ marginBottom: "0.75rem" }}>
          Sexo
        </label>
        <RadioContainer>
          <RadioGroup>
            <RadioSelector htmlFor="male" checked={selectedGender === "male"}>
              <div />
            </RadioSelector>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={selectedGender === "male"}
              onChange={handleRadioChange}
            />
            <label htmlFor="male">Masculino</label>
          </RadioGroup>

          <RadioGroup>
            <RadioSelector
              htmlFor="female"
              checked={selectedGender === "female"}
            >
              <div />
            </RadioSelector>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={selectedGender === "female"}
              onChange={handleRadioChange}
            />
            <label htmlFor="female">Feminino</label>
          </RadioGroup>
        </RadioContainer>
      </div>
    </RegisterForm>
  );
}
