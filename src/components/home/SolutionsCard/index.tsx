import {
  ButtonsContainer,
  CardHeader,
  Container,
  TextContainer,
} from "./styles";

interface Props {
  imgSrc: string;
}

export function SolutionsCard({ imgSrc }: Props) {
  return (
    <Container>
      <CardHeader>
        <div className="title">
          <div className="imgContainer">
            <img src={imgSrc} alt="" />
          </div>
          <strong>Melhorar Contratos</strong>
        </div>
        <span>Atualizado em 12/09/2023</span>
      </CardHeader>
      <TextContainer>
        <p>
          Insira seus Contratos e deixe a Inteligência Artificial trabalhar por
          Você, após melhorar seu contrato ela passará um resumo das alterações.
        </p>
      </TextContainer>

      <ButtonsContainer>
        <button>Utilizar Solução</button>
        <button><img src="/home/youtubeLogo.svg" alt="" /> Assistir Vídeo Explicativo</button>
      </ButtonsContainer>
    </Container>
  );
}
