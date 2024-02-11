import styled from "styled-components";

const ButtonLayout = styled.button`
  padding: 10px 15px;
  color: white;
  background-color: #3dba6f;
  border-radius: 6px;
  border: 1px solid #3dba6f;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover{
    background-color: green;

  }
`;

interface IButton {
  text: string;
  onClickHandler: (e:any) => void;
}

export const Button: React.FC<IButton> = ({ text, onClickHandler }) => {
  return <ButtonLayout onClick={onClickHandler}> {text} </ButtonLayout>;
};
