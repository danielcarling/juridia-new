import { Title } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  fontSize?: string;
  priority?: "primary" | "secondary";
  rest?: any;
}

export function ModalTitle({ content, fontSize, priority="primary", ...rest }: Props) {
  return (
    <Title style={{ position: "relative" }} {...rest} priority={priority}>
      <h1>{content}</h1>
      <div className="line" />
    </Title>
  );
}
