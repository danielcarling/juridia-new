import { ErrorContainer } from "./styles";

interface Props {
  message: string | undefined;
}

export function ErrorMessage({ message }: Props) {
  return (
    <ErrorContainer>
      <strong>{message}</strong>
    </ErrorContainer>
  );
}
