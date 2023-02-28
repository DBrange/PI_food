import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  box-shadow: 0px 3px 20px -8px #eb455f;
  margin: 30px 0;
  width: 1200px;
  height: 200px;
  display: flex;
  flex-grow: 1;
  position: relative;
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 0px 3px 20px 0 #eb455f;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 1200px;
  height: 200px;
  border-radius: 10px;
`;

export const ImgBox = styled.div``;

export const ContentBox = styled.div`
  position: absolute;
  width: 400px;
  height: 200px;
  right: 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #000a;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Button = styled.button`
  padding: 5px 20px;
  font-size: 1rem;
  border: 2px solod #000;
  border-radius: 5px;
  background-color: #eb455f;
  cursor: pointer;
  &:hover {
    background-color: #f16767;
  }
`;

export const BtnBox = styled.div`
  margin-top: 10px;
  padding: 15px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
`;

export const H4 = styled.h4`
  color: #eb455f;
`;
