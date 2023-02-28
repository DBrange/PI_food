import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ContainerBox = styled.div`
  position: relative;
  background-color: transparent;
  border-radius: 10px;
  width: auto;
`;

export const Label = styled.label`
  position: absolute;
  font-size: 20px;
  top: 7px;
  left: 7px;
`;

export const Input = styled.input`
  display: inline-block;
  width: 300px;
  text-align: center;
  padding: 0 80px;
  margin: 0;
  height: 35px;
  border: 2px solid #000;
  border-radius: 10px;
  outline: none;
`;

export const Button = styled.button`
  position: absolute;
  right: 0;
  bottom: -3px;
  margin-top: 30px;
  outline: none;
  border-radius: 5px;
  border: 2px solid #000;
  padding: 0.5rem 2rem;
  cursor: pointer;
  background-color: #eb455f;
  &:hover {
    background-color: #f16767;
  }
`;
