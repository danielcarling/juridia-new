import { Header } from "@/components/global/Header";
import { Container } from "./styles";
import { Sidebar } from "@/components/global/Sidebar";

export default function Home() {
  return (
    <Container>
      <Sidebar />
      <Header />
    </Container>
  );
}
