import { windowDimension } from "@/utils/windowDimensions";
import { BackIconSvg } from "../../../../public/BackIcon";
import { JuridiaTextSvg } from "../../../../public/JuridiaTextLogo";
import { BackButton, HeaderContainer, UserInfo } from "./styles";
import Image from "next/image";

export function ContractHeader() {
  return (
    <HeaderContainer>
      <BackButton>
        <BackIconSvg />
      </BackButton>
      <div className="logo">
        <JuridiaTextSvg width="13rem" />
      </div>
      {!windowDimension(1024) && (
        <UserInfo>
          <Image width={50} height={50} src="/userPhoto.png" alt={""} />
          <div className="nameAndEmail">
            <strong>Gabriel Antonio</strong>
            <span>email@example.com</span>
          </div>
        </UserInfo>
      )}
    </HeaderContainer>
  );
}
