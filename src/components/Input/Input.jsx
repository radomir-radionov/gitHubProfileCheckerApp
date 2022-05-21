import { InputStyled } from "./styles";

const Input = ({ value, onChange }) => {
  return (
    <InputStyled
      type="search"
      placeholder="Enter GitHub username"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
