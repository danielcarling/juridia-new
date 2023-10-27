import { useRouter } from "next/router";
import { Container } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  href: string;
}

export function Link({ content, href, ...rest }: Props) {
  const router = useRouter();

  return (
    <Container
      {...rest}
      isActive={router.pathname === href}
      onClick={() => router.push(href)}
    >
      {content}
    </Container>
  );
}
