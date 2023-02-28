import styled from "styled-components";

export const Button = styled.button`
  font-size: 0.5rem;
  outline: none;
  border-radius: 5px;
  border: 2px solid #000;
  padding: 0.5rem 2rem;
  cursor: pointer;
  background-color: #eb455f;
  font &:nth-child(0) {
    margin: 0;
  }
  &:hover {
    background-color: #f16767;
  }
`;
