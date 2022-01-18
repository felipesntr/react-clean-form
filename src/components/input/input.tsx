import styled from "styled-components";

export const Input = ({ ...props }) => {
  return (
    <InputContainer>
      <InputEle {...props} />
      {props.status && <Status>🟢</Status>}
      {!props.status && <Status>🔴</Status>}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 100%;
  position: relative;
`;

const InputEle = styled.input`
  width: 100%;
  padding: 10px;
  background-color: rgb(227, 239, 255, 0.5);
  border: none;
  border-radius: 5px;
  transition: ease-in-out 0.2s;
  &:focus {
    outline: none;
    background-color: rgb(221, 236, 255);
  }
`;

const Status = styled.span`
  font-size: 12px;
  position: absolute;
  right: 10px;
  top: 9px;
`;
