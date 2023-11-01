import { JuridiaTextSvg } from "../../../../public/JuridiaTextLogo";
import { MessageContainer } from "./styles";

interface Props {
  message: string;
}

export function IaMessage({ message }: Props) {
  return (
    <MessageContainer>
      <div className="header">
        <JuridiaTextSvg />
      </div>
      <p>{message}</p>
    </MessageContainer>
  );
}
