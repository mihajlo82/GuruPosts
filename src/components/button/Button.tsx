import styled from "styled-components";

const ButtonLayout = styled.button`
  padding: 10px 15px;
  color: white;
  background-color: green;
  border-radius: 6px;
  border: 1px solid green;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover{
    background-color: #25a85a;

  }
`;

interface IButton {
  text: string;
  onClickHandler: (e:any) => void;
}

export const Button: React.FC<IButton> = ({ text, onClickHandler }) => {
  return <ButtonLayout onClick={onClickHandler}> {text} </ButtonLayout>;
};

Button.defaultProps = {
  text: 'Play', 
  onClickHandler: ()=> {}
}