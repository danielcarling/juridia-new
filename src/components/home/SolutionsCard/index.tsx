import { useRouter } from "next/router";
import {
  ButtonsContainer,
  CardHeader,
  Container,
  TextContainer,
} from "./styles";
import { FuncionalitiesProps } from "@/pages/home/index.page";

export function SolutionsCard({
  description,
  name,
  page_url,
  video_url,
  update_time,
}: FuncionalitiesProps) {
  const router = useRouter();
  return (
    <Container>
      <CardHeader>
        <div className="title">
          <div className="imgContainer">
            <img src={"/home/solutionCardImg1.svg"} alt="" />
          </div>
          <strong>{name}</strong>
        </div>
        <span>
          Atualizado em {update_time.slice(8, 10)}/{update_time.slice(5, 7)}/
          {update_time.slice(0, 4)}
        </span>
      </CardHeader>
      <TextContainer>
        <p>{description}</p>
      </TextContainer>

      <ButtonsContainer>
        <button onClick={() => router.push(page_url)}>Utilizar Solução</button>
        <button onClick={() => router.push(video_url)}>
          <img src="/home/youtubeLogo.svg" alt="" /> Assistir Vídeo Explicativo
        </button>
      </ButtonsContainer>
    </Container>
  );
}
