import { windowDimension } from "@/utils/windowDimensions";
import { BackIconSvg } from "../../../../public/BackIcon";
import { JuridiaTextSvg } from "../../../../public/JuridiaTextLogo";
import { BackButton, HeaderContainer, UserInfo } from "./styles";
import Image from "next/image";
import { useRouter } from "next/router";


interface Props {
  routerPath: string;
}
export function ContractHeader({routerPath}:Props) {
  const router = useRouter()
  return (
    <HeaderContainer>
      <BackButton onClick={()=> router.push(`${routerPath}`)}>
        <BackIconSvg />
      </BackButton>
      <div className="logo">
        <JuridiaTextSvg width="13rem" />
      </div>
      {!windowDimension(1024) && (
        <UserInfo>
          <Image width={200} height={200} src="/userPhoto.png" alt={""} />
          <div className="nameAndEmail">
            <strong>Gabriel Antonio</strong>
            <span>email@example.com</span>
          </div>
        </UserInfo>
      )}
    </HeaderContainer>
  );
}
