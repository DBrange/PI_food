import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { Arrow } from "../../styledComponents/FormStyled";
import { FaArrowLeft } from "react-icons/fa";
import Loader from "../Loader/Loader";
import MessageError from "../MessageError/MessageError";
import {
  Container,
  Img,
  ImgBox,
  ContainerBox,
  InfoBox,
  H2,
  H3,
  Paragraph,
  Loading,
} from "../../styledComponents/DetailStyled";
// require("dotenv").config();
// const  API_KEY  = process.env.API_KEY;
const API_KEY = "4547f4d5ef444736b51924db486e047a";

export default function Detail() {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { detailId } = useParams();

  const fetchData = async () => {
    setLoading(true);
    try {
      setError(null);
      if (isNaN(detailId)) {
        const responseDB = await axios(
          `http://localhost:3001/recipes/${detailId}`
        );
        const resultDB = responseDB.data;
        const diets = resultDB.Diets.map((el) => el.name);
        resultDB.Diets = diets;

        setRecipe(resultDB);
        setLoading(false);
      } else {
        const response = await axios(
          `https://api.spoonacular.com/recipes/${detailId}/information?apiKey=${API_KEY}`
        );
        const result = response.data;
        const recipeApi = {
          id: result.id,
          name: result.title,
          image: result.image,
          summary: result.summary,
          healthScore: result.healthScore,
          stepByStep: result.instructions,
          diets: result.diets,
        };

        setLoading(false);
        setRecipe(recipeApi);
      }
    } catch (err) {
      setError("Ocurrio un error");
      return err || "Ocurrio un error";
    }
  };
  useEffect(() => {
    fetchData();
  }, [detailId]);

  let allDiets;
  if (isNaN(detailId)) {
    allDiets = recipe.Diets;
  } else {
    allDiets = recipe.diets;
  }
  const regex = /(<b>|<\/b>|<p>|<\/p>|<a href=|<\/a>|>)/gi;
  const noneHTMLSummary = (recipe.summary + "").replace(regex, " ");
  const noneHTMLSteps = (recipe.stepByStep + "").replace(regex, " ");

  const navigate = useNavigate();

  return (
    <Container>
      {loading && !error ? (
        <Loading>
          <Loader />
        </Loading>
      ) : (
        <>
          <Arrow
            onClick={() => {
              navigate("/home");
            }}
          >
            <FaArrowLeft />
          </Arrow>
          <ContainerBox>
            <ImgBox>
              <Img src={recipe.image} alt="" />
            </ImgBox>
            <InfoBox>
              <H2>{recipe.name}</H2>
              <H3>
                <b>Nivel de comida saludable:</b> {recipe.healthScore}
              </H3>
              <H3>
                <b>Dietas:</b> {allDiets}
              </H3>
              <Paragraph>
                <b>Resumen:</b> {noneHTMLSummary}
              </Paragraph>
              <Paragraph>
                <b>Paso a paso:</b> {noneHTMLSteps}
              </Paragraph>
              <img src="../assets/pi.jpg" alt="" />
            </InfoBox>
          </ContainerBox>
        </>
      )}
      {error && <MessageError error={error} />}
    </Container>
  );
}
