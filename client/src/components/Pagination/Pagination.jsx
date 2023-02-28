import { Button } from "../../styledComponents/CardStyle";
import { useSelector } from "react-redux";

export default function Pagination({ pageNum, prev, next }) {
  const recipes = useSelector((state) => state.recipes);

  return (
    <>
      <Button onClick={prev}>
        <h6 style={{ fontWeight: 400 }}>Anterior</h6>
      </Button>
      <div>
        <p>{`Pagina ${pageNum} de ${Math.ceil(recipes.length / 9)}`}</p>
      </div>
      <Button onClick={next}>
        <h6 style={{ fontWeight: 400 }}>Siguiente</h6>
      </Button>
    </>
  );
}
