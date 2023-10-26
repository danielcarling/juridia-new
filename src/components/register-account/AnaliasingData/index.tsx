import Theme from "@/styles/themes";
import { Container } from "./styles";
import { Footer } from "@/components/register-account/Footer";
import { useEffect, useState } from "react";

export function AnialiasingFormData() {
  const [dotsValue, setDotsValue] = useState('.');

  const [pontos, setPontos] = useState('.');
  function AlternarPontos() {
    
    useEffect(() => {
      const interval = setInterval(() => {
        if (pontos === '.') {
          setPontos('..');
        } else if (pontos === '..') {
          setPontos('...');
        } else {
          setPontos('.');
        }
      }, 500); // Altere o intervalo de tempo conforme desejado (em milissegundos)
      
      return () => clearInterval(interval);
    }, [pontos]);}

  AlternarPontos();


  return (
    <>
      <Container>
        <strong>Estamos analisando!</strong>
        <span
          style={{
            color: Theme.color.gray_80,
            maxWidth: "400px",
            textAlign: "center",
          }}
          className="mt-3 mb-5"
        >
          Isso leva menos de 1 minuto, aguarde aqui mesmo.
        </span>
        <div className="custom-loader mt-3 mb-5" />
        <span style={{ color: Theme.color.darkBlueAxion, position: "relative" }}>
          CARREGANDO<span style={{ position: "absolute", right: "-20px", width: '20px' }}>{pontos}</span>
        </span>
      </Container>
      ;
    </>
  );
}
