import styled from "styled-components";

const InputLayout = styled.input`
  height: 33px;
  border-radius: 5px;
  width: 40%;
  padding: 10px 15px;
  border: 2px solid #3dba6f;
  outline: none;
`;

interface IInputProp {
  placeholder: string;
  type: string;
  value: string;
  onChangeHandler: (e:any) => void;
}

const Input = ({
  placeholder,
  type,
  value,
  onChangeHandler,
}: IInputProp) => {
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
