import { Title } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  rest?: any;
}

export function Subtitle({ content, ...rest }: Props) {
  return (
    <Title style={{ position: "relative" }} {...rest}>
      <h2>{content}</h2>
      <div className="line" />
    </Title>
  );
}
