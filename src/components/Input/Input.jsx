import { InputStyled } from "./styles";

const Input = ({ value, onChange }) => {
  return (
    <InputStyled
      type="search"
      value={value}
      onChange={onChange}
      autoComplete="off"
      placeholder="Enter GitHub username"
    />
  );
};

export default Input;
