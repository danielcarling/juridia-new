import Theme from "@/styles/themes";
import { useState, useEffect } from "react";
import {
  ArtSection,
  Container,
  EyeSlashContainer,
  FormGroup,
  GoogleLogin,
  JuridiaLogo,
  LoginButton,
  LoginForm,
  LoginFormHeader,
  Main,
  PasswordRecovery,
} from "./styles";

import { PostAPI, refreshToken, token } from "@/lib/axios";
import { useRouter } from "next/router";
import { EyeSlashSVG } from "../../../public/login/EyeSlash";
import { Footer } from "@/components/register-account/Footer";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState<boolean>(false);

  function toggleShowPassword() {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  }

  function scrollToForm() {
    const element = document.getElementById("loginForm");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    scrollToForm();
  }, []);

  async function handleLogin() {
    setDisabled(true);
    const connect = await PostAPI("/login", {
      email,
      password,
    });
    console.log("Email:", email, "Senha:", password);
    if (connect.status !== 200) {
      setDisabled(false);
      return alert(connect.body);
    }
    setDisabled(true);
    localStorage.setItem(token, connect.body.token);
    localStorage.setItem(refreshToken, connect.body.refreshToken);
    // alert("Conta criada com sucesso!");
    return router.push("/home");
  }
  return (
    <Container>
      <Main>
        <ArtSection />
        <LoginForm id="loginForm">
          <JuridiaLogo>
            <img src="/login/juridiaTextLogo.svg" alt="" />
          </JuridiaLogo>
          <LoginFormHeader>
            <strong>Faça seu login para utilizar a plataforma.</strong>
            <span>Tenha acesso a melhor Inteligência Artificial Jurídica</span>
          </LoginFormHeader>
          <GoogleLogin>
            <img src="/login/google.svg" alt="" />
            <strong>Entrar com conta Google</strong>
          </GoogleLogin>
          <div
            style={{
              position: "relative",
              margin: "3vh 0",
            }}
          >
            <div style={{ border: `1px solid ${Theme.color.gray_60}` }} />
            <p
              style={{
                color: "white",
                textAlign: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "0 2rem",
                backgroundColor: Theme.color.primary_100,
              }}
            >
              ou
            </p>
          </div>

          <FormGroup>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
            />
          </FormGroup>

          <FormGroup style={{ position: "relative" }}>
            <label htmlFor="password">Senha</label>
            <input
              type={showPassword}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
            />

            <EyeSlashContainer
              showPassword={showPassword === "password"}
              onClick={toggleShowPassword}
            >
              <EyeSlashSVG />
            </EyeSlashContainer>
          </FormGroup>

          <PasswordRecovery>
            <button onClick={() => router.push("/recover-password")}>
              Esqueceu sua senha?
            </button>
          </PasswordRecovery>
          <LoginButton disabled={disabled} onClick={handleLogin}>
            Entrar
          </LoginButton>

          <p
            style={{
              fontSize: "0.9rem",
              fontWeight: "bold",
              color: Theme.color.gray_20,
            }}
          >
            Não tem uma conta?{" "}
            <span
              style={{ color: Theme.color.blue_100, cursor: "pointer" }}
              onClick={() => router.push("/register-account")}
            >
              Cadastre-se
            </span>
          </p>
        </LoginForm>
      </Main>
      <Footer />
    </Container>
  );
}
