import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByName } from "../../redux/action-types";
import {
  Container,
  ContainerBox,
  Label,
  Input,
  Button,
} from "../../styledComponents/SearchBarStyled";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function SearchBar({ reset }) {
  const dispatch = useDispatch();

  const [recipe, setRecipe] = useState("");

  const handlerInput = (e) => {
    const { value } = e.target;
    setRecipe(value);
    dispatch(filterByName(value));
    reset();
  };

  return (
    <>
      <Container>
        <ContainerBox>
          <Label htmlFor="search">
            <FiSearch />
          </Label>
          <Input
            type="text"
            name="search"
            value={recipe}
            onChange={handlerInput}
            placeholder="Buscar recetas"
            id="search"
          />
        </ContainerBox>
        <Link to="/form">
          <Button>Crear Receta</Button>
        </Link>
      </Container>
    </>
  );
}
