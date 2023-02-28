import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 80px;
  font-size: 1.5rem;
  border: 2px solod #000;
  border-radius: 10px;
  background-color: #eb455f;
  margin-top: 30px;
  cursor: pointer;
  &:hover {
    background-color: #f16767;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url("./");
  overflow: hidden;
  z-index: 0;
`;

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 60px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Image = styled.img`
  background: #000;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

export const H1 = styled.h1`
  z-index: 1;
  color: #fff;
`;
