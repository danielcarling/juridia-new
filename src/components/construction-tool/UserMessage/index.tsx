import { JuridiaTextSvg } from "../../../../public/JuridiaTextLogo";
import { MessageContainer } from "./styles";

interface Props {
  message: string;
}

export function UserMessage({ message }: Props) {
  return (
    <MessageContainer>
      <div className="header">
        <strong>Usuário</strong>
      </div>
      <p>{message}</p>
    </MessageContainer>
  );
}
