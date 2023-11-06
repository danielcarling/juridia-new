import { maskCnpj } from "@/utils/masks";
import { RoleSelect } from "../RoleSelect";
import { FormGroup, RegisterForm, RegisterFormHeader } from "./styles";

interface Props {
  companyName: string;
  cnpj: string;
  role: string;
  onCompanyNameChange: (value: string) => void;
  onCnpjChange: (value: string) => void;
  onRoleChange: (value: string) => void;
}

export function CompanyDataForm({
  companyName,
  cnpj,
  role,
  onCompanyNameChange,
  onCnpjChange,
  onRoleChange,
}: Props) {
  return (
    <RegisterForm>
      <RegisterFormHeader>
        <strong>Dados da Empresa</strong>
        <span>Preencha os campos logo abaixo</span>
      </RegisterFormHeader>

      <FormGroup>
        <label htmlFor="companyName">Nome da Empresa (Opcional)</label>
        <input
          type="text"
          id="companyName"
          placeholder="Digite o nome da empresa"
          value={companyName}
          onChange={(e) => onCompanyNameChange(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="cnpj">CNPJ (Opcional)</label>
        <input
          type="text"
          placeholder="Digite o CNPJ"
          value={cnpj}
          onChange={(e) => onCnpjChange(maskCnpj(e.target.value))}
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="role">Seu Cargo (Opcional)</label>
        <RoleSelect
          values={["Advogado", "Advogada"]}
          selectedValue={role}
          setSelectedValue={onRoleChange}
        />
      </FormGroup>
    </RegisterForm>
  );
}
