import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Image,
  H1,
  Main,
} from "../../styledComponents/EntryStyled";
import bgEntry from "../../assets/bgEntry.jpg";

export default function Entry() {
  return (
    <>
      <Container>
        <Image src={bgEntry} alt="" />
        <Main>
          <H1>Sea bienvenido al MUNDO DE LAS RECETAS</H1>
          <Link to="/home">
            <Button>Ingresar</Button>
          </Link>
        </Main>
      </Container>
    </>
  );
}
