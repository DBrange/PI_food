import Card from "../Card/Card";
import { useDispatch } from "react-redux";
import { addRecipes, filter, order, origin } from "../../redux/action-types";
import { useEffect, useState } from "react";
import SelectForm from "../SelectForm/SelectForm";
import {
  Container,
  SelectBox,
  CardsBox,
  PaginationBox,
  Request,
} from "../../styledComponents/CardsStyled";
import Loader from "../Loader/Loader";
import MessageError from "../MessageError/MessageError";
import Pagination from "../Pagination/Pagination";

export default function Cards({ filteredRecipes, pageNum, prev, next, reset }) {
  useEffect(() => {
    dispatch(addRecipes(fnLoader, fnError));
  }, []);

  const dispatch = useDispatch();

  const handlerSelect = (e) => {
    const { value, name } = e.target;
    if (name === "diets") dispatch(filter(value));
    else if (name === "order") dispatch(order(value));
    else if (name === "origin") dispatch(origin(value));
    reset();
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fnLoader = (boolean) => setLoading(boolean);
  const fnError = (res) => setError(res);

  return (
    <>
      <Container>
        <SelectBox>
          <SelectForm
            name="order"
            handler={handlerSelect}
            optionQuantity={[
              { value: "default", html: "Orden" },
              { value: "moreHealth", html: "Mas Saludable" },
              { value: "lowHealth", html: "Menos Saludable" },
              { value: "orderAlphabet", html: "A-Z" },
              { value: "orderAlphabetReversed", html: "Z-A" },
            ]}
          />
          <SelectForm
            name="origin"
            handler={handlerSelect}
            optionQuantity={[
              { value: "default", html: "Todo" },
              { value: "dataBase", html: "Base de Datos" },
              { value: "api", html: "API" },
            ]}
          />
          <SelectForm
            name="diets"
            handler={handlerSelect}
            optionQuantity={[
              { value: "default", html: "Diets" },
              { value: "gluten free", html: "Gluten free" },
              { value: "dairy free", html: "Dairy free" },
              { value: "lacto ovo vegetarian", html: "Lacto ovo vegetarian" },
              { value: "vegan", html: "Vegan" },
              { value: "paleolithic", html: "Paleolithic" },
              { value: "primal", html: "Primal" },
              { value: "whole 30", html: "Whole 30" },
              { value: "pescatarian", html: "Pescatarian" },
              { value: "ketogenic", html: "Ketogenic" },
              { value: "fodmap friendly", html: "Fodmap friendly" },
            ]}
          />
        </SelectBox>
        <CardsBox>
          <PaginationBox>
            <Pagination pageNum={pageNum} prev={prev} next={next} />
          </PaginationBox>
          {filteredRecipes().map((el, i) => {
            return (
              <Card
                key={i}
                id={el.id}
                name={el.name}
                image={el.image}
                healthScore={el.healthScore}
                diets={el?.diets || el.Diets}
              />
            );
          })}
          <Request>
            {loading && !error && <Loader />}
            {error && <MessageError error={error} />}
          </Request>

          <PaginationBox>
            <Pagination pageNum={pageNum} prev={prev} next={next} />
          </PaginationBox>
        </CardsBox>
      </Container>
    </>
  );
}
