import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  ArtSection,
  BackButton,
  Container,
  FormContainer,
  Main,
  NextButton,
  ProgressBar,
} from "./styles";
import { PostAPI, authGetAPI, loginVerifyAPI } from "@/lib/axios";
import { Footer } from "@/components/register-account/Footer";
import { RegisterAccountHeader } from "@/components/register-account/Header";
import { BasicDataForm } from "@/components/register-account/BasicDataForm";
import { PersonalDataForm } from "@/components/register-account/PersonalDataForm";
import { CompanyDataForm } from "@/components/register-account/CompanyDataForm";
import { scrollToElement } from "@/utils/scrollToElement";
import { ErrorMessage } from "@/components/global/ErrorMessage";
import { Spinner } from "react-bootstrap";

export default function RegisterAccount() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [mobilePhone, setMobilePhone] = useState<string>("");
  const [termsChecked, setTermsChecked] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [birthDate, setBirthDate] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [cnpj, setCnpj] = useState<string>("");
  const [role, setRole] = useState<string>("Selecione seu cargo");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const router = useRouter();

  async function handleVerify() {
    const connect = await loginVerifyAPI();

    if (connect === 200) {
      const connect2 = await authGetAPI("/user/validation");

      if (connect2.status === 200) {
        return router.push("/");
      } else {
        alert("Assinatura necessária.");
        return router.push("/payment");
      }
    } else {
      return;
    }
  }

  function validateEmail(email: string) {
    if (!email) {
      return false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return false;
    }
    return true;
  }

  useEffect(() => {
    handleVerify();

    if (window.innerWidth < 1024) {
      scrollToElement("registerForm");
    }
  }, []);

  function validateForm() {
    if (step === 1) {
      if (!name) {
        return setErrorMessage("Nome é obrigatório");
      } else if (!validateEmail(email)) {
        return setErrorMessage("Insira um email válido");
      } else if (mobilePhone.replace(/\D/g, "").length < 11) {
        return setErrorMessage("Insira um número de telefone válido");
      } else if (password.length < 6) {
        return setErrorMessage("Senha deve ter no mínimo 6 caracteres");
      } else if (!termsChecked) {
        return setErrorMessage("Aceite os termos");
      }
    } else if (step === 2) {
      if (!cpf) {
        return setErrorMessage("CPF/CNPJ é obrigatório");
      } else if (cpf.replace(/\D/g, "").length < 11) {
        return setErrorMessage("CPF deve ter pelo menos 11 digitos");
      } else if (!birthDate) {
        return setErrorMessage("Data de nascimento é obrigatório");
      } else if (!gender) {
        return setErrorMessage("Escolha um gênero");
      }
    }
    setErrorMessage("");
    setStep(step + 1);
  }

  async function handleRegister() {
    setErrorMessage("");
    setDisabled(true);

    const selectedRole = role === "Selecione seu cargo" ? "" : role;

    const data = {
      name,
      email,
      password,
      cpfCnpj: cpf,
      mobilePhone,
      birth_date: birthDate,
      sex: gender,
      enterprise: companyName,
      enterprise_cnpj: cnpj,
      role: selectedRole,
    };

    const connect = await PostAPI("/register", data );

    console.log(data);

    if (connect.status !== 200) {
      setDisabled(false);
      return alert(connect.body);
    }
    setDisabled(true);
    alert("Conta criada com sucesso!");
    return router.push("/login");
  }
  return (
    <Container>
      <>
        <RegisterAccountHeader />
        <Main>
          <ProgressBar step={step} />
          <ArtSection />
          <FormContainer id="registerForm">
            {step === 1 ? (
              <>
                <BasicDataForm
                  name={name}
                  email={email}
                  mobilePhone={mobilePhone}
                  password={password}
                  termsChecked={termsChecked}
                  onNameChange={setName}
                  onEmailChange={setEmail}
                  onMobilePhoneChange={setMobilePhone}
                  onPasswordChange={setPassword}
                  onTermsChange={setTermsChecked}
                />
              </>
            ) : step === 2 ? (
              <PersonalDataForm
                cpf={cpf}
                birthDate={birthDate}
                gender={gender}
                onCpfChange={setCpf}
                onBirthDateChange={setBirthDate}
                onGenderChange={setGender}
              />
            ) : (
              <>
                <CompanyDataForm
                  companyName={companyName}
                  cnpj={cnpj}
                  role={role}
                  onCompanyNameChange={setCompanyName}
                  onCnpjChange={setCnpj}
                  onRoleChange={setRole}
                />
              </>
            )}

            <ErrorMessage message={errorMessage} />

            {step === 1 ? (
              <NextButton onClick={validateForm} disabled={!termsChecked}>
                Proximo
              </NextButton>
            ) : step === 2 ? (
              <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                <BackButton onClick={() => setStep(step - 1)}>
                  Voltar
                </BackButton>
                <NextButton onClick={validateForm}>Continuar</NextButton>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                <BackButton onClick={() => setStep(step - 1)}>
                  Voltar
                </BackButton>
                <NextButton onClick={handleRegister} disabled={disabled}>
                  {disabled ? (
                    <Spinner style={{ width: "1.3rem", height: "1.3rem" }} />
                  ) : (
                    "Finalizar Cadastro"
                  )}
                </NextButton>
              </div>
            )}
          </FormContainer>
        </Main>
      </>
      <Footer />
    </Container>
  );
}
