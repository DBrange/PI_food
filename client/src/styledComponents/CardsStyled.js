import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
`;

export const SelectBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 20px;
`;

export const CardsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px 0;
`;

export const PaginationBox = styled.div`
  font-size: 0.8rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  &:nth-child(1) {
    margin: 0;
  }
`;

export const Request = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
