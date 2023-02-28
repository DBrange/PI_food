import SearchBar from "../SearchBar/SearchBar";
import Cards from "../Cards/Cards";
import { Container, ContainerBox } from "../../styledComponents/HomeStyled";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const recipes = useSelector((state) => state.recipes);

  const [currentPage, setCurrentPage] = useState(0);
  const [pageNum, setPageNum] = useState(1);

  const reset = () => {
    setCurrentPage(0);
    setPageNum(1);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const filteredRecipes = () => {
    return recipes.slice(currentPage, currentPage + 9);
  };

  const next = () => {
    if (recipes.length < currentPage + 9) return;
    setCurrentPage(currentPage + 9);
    setPageNum((num) => num + 1);
    scrollToTop();
  };

  const prev = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 9);
    setPageNum((num) => num - 1);
    scrollToTop();
  };

  return (
    <Container>
      <ContainerBox>
        <SearchBar reset={reset} />
        <Cards
          filteredRecipes={filteredRecipes}
          pageNum={pageNum}
          prev={prev}
          next={next}
          reset={reset}
        />
      </ContainerBox>
    </Container>
  );
}
