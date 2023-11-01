import { Title } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  variant?: "primary" | "secondary";
  rest?: any;
}

export function Subtitle({ content, variant="primary", ...rest }: Props) {
  return (
    <Title variant={variant} style={{ position: "relative" }} {...rest}>
      <h2>{content}</h2>
      <div className="line" />
    </Title>
  );
}
