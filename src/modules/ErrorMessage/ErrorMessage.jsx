import { Container, Img, TextError } from "./styles";

const ErrorMessage = ({ img, textError }) => {
  return (
    <Container>
      <Img src={img} />
      <TextError>{textError}</TextError>
    </Container>
  );
};

export default ErrorMessage;
