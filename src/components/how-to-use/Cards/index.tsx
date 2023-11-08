import { CardHeader, Container, TextContainer } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  name: string;
  description: string;
  updateTime: string;
  rest?: any;
}

export function VideoCard({
  imgSrc,
  name,
  description,
  updateTime,
  ...rest
}: Props) {
  return (
    <Container {...rest}>
      <CardHeader>
        <div className="title">
          <div className="imgContainer">
            <img src={imgSrc} alt="" />
          </div>
          <strong>{name}</strong>
        </div>
        <span>
          Atualizado em {updateTime.slice(8, 10)}/{updateTime.slice(5, 7)}/
          {updateTime.slice(0, 4)}
        </span>
      </CardHeader>
      <TextContainer>
        <p>{description}</p>
      </TextContainer>
    </Container>
  );
}
