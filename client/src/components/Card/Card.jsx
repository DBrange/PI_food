import { Link } from "react-router-dom";
import {
  Container,
  Image,
  Button,
  ImgBox,
  ContentBox,
  BtnBox,
  InfoBox,
  H4,
} from "../../styledComponents/CardStyle";

export default function Card({ id, name, image, healthScore, diets }) {
  const allDiets = diets.join(", ");

  return (
    <>
      <Container>
        <ImgBox>
          <Image src={image} alt="" />
        </ImgBox>
        <ContentBox>
          <InfoBox>
            <H4>{name}</H4>
            <h5>Nivel de comida saludable: {healthScore}</h5>
            <h6>Tipo de dieta: {allDiets}</h6>
          </InfoBox>
          <BtnBox>
            <Link to={`/home/detail/${id}`}>
              <Button>Ver mas</Button>
            </Link>
          </BtnBox>
        </ContentBox>
      </Container>
    </>
  );
}
