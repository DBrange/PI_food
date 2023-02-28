import { useState } from "react";
import { validate } from "./validate";
import axios from "axios";
import Checkbox from "../Checkbox/Checkbox";
import InputForm from "../InputForm/InputForm";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import {
  Container,
  FormRight,
  FormLeft,
  BtnBox,
  Button,
  FormBox,
  H2,
  H4,
  FormComplete,
  Span,
  Arrow,
} from "../../styledComponents/FormStyled";

export default function Form() {

  const recipesOriginal = useSelector((state) => state.recipesOriginal);
  const recipeItem = recipesOriginal.map(el => el.name)
  // console.log(recipeItem);

  const [inputValue, setInputValue] = useState({
    name: "",
    summary: "",
    healthScore: "",
    stepByStep: "",
    image: "",
    diets: [],
  });
  const [error, setError] = useState({
    name: "",
    summary: "",
    healthScore: "",
    stepByStep: "",
    image: "",
    diets: [],
  });

  const handlerInput = (e) => {
    const { value, name, checked } = e.target;

    if (checked) {
      const dietsArray = [...inputValue.diets, value];
      setInputValue({
        ...inputValue,
        diets: dietsArray,
      });
    } else {
      const filterDiet = inputValue.diets.filter((el) => el !== value);
      setInputValue({
        ...inputValue,
        diets: filterDiet,
      });
    }

    if (name !== "diets") {
      setInputValue({
        ...inputValue,
        [name]: value,
      });
      setError(
        validate({
          ...inputValue,
          [name]: value,
          item: recipeItem,
        })
      );
    }
  };

  const [submited, setSubmited] = useState(false);
  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const values = Object.values(error);
      if (!values.length) {
        setSubmited(true);
        setTimeout(() => {
          setSubmited(false);
        }, 3000);
        const response = await axios.post(
          "http://localhost:3001/recipes",
          inputValue
        );
        setInputValue({
          name: "",
          summary: "",
          healthScore: "",
          stepByStep: "",
          image: "",
          diets: [],
        });

        setError({
          name: "",
          summary: "",
          healthScore: "",
          stepByStep: "",
          image: "",
          diets: [],
        });
      } else {
        throw Error("El formulario contiene errores");
      }
    } catch (error) {
      return error;
    }
  };

  const navigate = useNavigate();

  return (
    <Container>
      <Arrow
        onClick={() => {
          navigate("/home");
        }}
      >
        <FaArrowLeft />
      </Arrow>
      <H2>Crea tu porpia receta</H2>
      <FormBox action="" onSubmit={handlerSubmit}>
        <FormComplete>
          <FormLeft>
            <InputForm
              label="Nombre"
              type="text"
              name="name"
              value={inputValue.name}
              handler={handlerInput}
              placeholder="Nombre del plato"
              id="name"
              error={error.name}
            />

            <InputForm
              label="Resumen"
              type="text"
              name="summary"
              value={inputValue.summary}
              handler={handlerInput}
              placeholder="Resumen del plato"
              id="summary"
              error={error.summary}
            />

            <InputForm
              label="Nivel de comida saludable"
              type="text"
              name="healthScore"
              value={inputValue.healthScore}
              handler={handlerInput}
              placeholder="Nivel de comida saludable"
              id="healthScore"
              error={error.healthScore}
            />
          </FormLeft>
          <FormRight className="check-box">
            <InputForm
              label="Paso a paso"
              type="text"
              name="stepByStep"
              value={inputValue.stepByStep}
              handler={handlerInput}
              placeholder="Paso a paso de la receta"
              id="stepByStep"
              error={error.stepByStep}
            />

            <InputForm
              label="Imagen"
              type="text"
              name="image"
              value={inputValue.image}
              handler={handlerInput}
              placeholder="Paso a paso de la receta"
              id="image"
              error={error.image}
            />
            <H4>Selecciona alguna opcion si pertenece a una dieta</H4>

            <Checkbox
              name="diets"
              value="gluten free"
              handler={handlerInput}
              id="gluten free"
              label="gluten free"
              checked={inputValue.diets}
            />

            <Checkbox
              name="diets"
              value="dairy free"
              handler={handlerInput}
              id="dairy free"
              label="dairy free"
              checked={inputValue.diets}
            />

            <Checkbox
              name="diets"
              value="lacto ovo vegetarian"
              handler={handlerInput}
              id="lacto ovo vegetarian"
              label="lacto ovo vegetarian"
              checked={inputValue.diets}
            />

            <Checkbox
              name="diets"
              value="vegan"
              handler={handlerInput}
              id="vegan"
              label="vegan"
              checked={inputValue.diets}
            />

            <Checkbox
              name="diets"
              value="paleolithic"
              handler={handlerInput}
              id="paleolithic"
              label="paleolithic"
              checked={inputValue.diets}
            />

            <Checkbox
              name="diets"
              value="primal"
              handler={handlerInput}
              id="primal"
              label="primal"
              checked={inputValue.diets}
            />

            <Checkbox
              name="diets"
              value="whole 30"
              handler={handlerInput}
              id="whole 30"
              label="whole 30"
              checked={inputValue.diets}
            />

            <Checkbox
              name="diets"
              value="pescatarian"
              handler={handlerInput}
              id="pescatarian"
              label="pescatarian"
              checked={inputValue.diets}
            />

            <Checkbox
              name="diets"
              value="ketogenic"
              handler={handlerInput}
              id="ketogenic"
              label="ketogenic"
              checked={inputValue.diets}
            />

            <Checkbox
              name="diets"
              value="fodmap friendly"
              handler={handlerInput}
              id="fodmap friendly"
              label="fodmap friendly"
              checked={inputValue.diets}
            />
          </FormRight>
        </FormComplete>
        <BtnBox className="btn-box">
          <Button onClick={handlerInput} type="submit">
            Enviar
          </Button>
          {submited && <Span>El formulario a sido enviado exitosamente</Span>}
        </BtnBox>
      </FormBox>
    </Container>
  );
}
