import styled from "styled-components";

export const Button = ({ ...props }) => {
  return <ButtonEle>{props.text}</ButtonEle>;
};

const ButtonEle = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 9px;
  background-color: rgb(80, 116, 235, 1);
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  border: none;
  border-radius: 5px;
  transition: ease-in-out 0.2s;
  &:hover {
    outline: none;
    background-color: rgb(80, 116, 235, 0.8);
  }
`;
