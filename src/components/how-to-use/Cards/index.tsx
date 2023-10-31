import { CardHeader, Container, TextContainer } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  rest?: any;
}

export function VideoCard({ imgSrc, ...rest }: Props) {
  return (
    <Container {...rest}>
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
    </Container>
  );
}
