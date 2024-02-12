import styled from "styled-components";

const InputLayout = styled.input`
  height: 33px;
  border-radius: 5px;
  width: 33%;
  padding: 10px 15px;
  border: 2px solid green;
  outline: none;
`;

interface IInputProp {
  placeholder: string;
  type: string;
  value: string | number;
  onChangeHandler: (e: any) => void;
}

const Input = ({ placeholder, type, value, onChangeHandler }: IInputProp) => {
  return (
    <InputLayout
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
    />
  );
};

export default Input;
Input.defaultProps = {
  placeholder: "Enter a value",
  type: "text",
  value: "",
  onChangeHandler: () => {},
};
