import { Title } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  fontSize?: string;
  rest?: any;
}

export function TitleComponent({ content, fontSize, ...rest }: Props) {
  return (
    <Title style={{ position: "relative" }} {...rest}>
      <h1>{content}</h1>
      <div className="line" />
    </Title>
  );
}
