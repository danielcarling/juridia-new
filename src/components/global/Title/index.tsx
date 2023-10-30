import { Title } from "./styles";

interface Props {
  content: string;
  fontSize?: string;
}

export function TitleComponent({ content, fontSize }: Props) {
  return (
    <Title style={{ position: "relative" }}>
      <h1>{content}</h1>
      <div className="line" />
    </Title>
  );
}
