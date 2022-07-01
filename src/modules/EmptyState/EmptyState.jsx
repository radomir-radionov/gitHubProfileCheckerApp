import { Container, Img, TextError } from "./styles";

const EmptyState = ({ img, textError }) => {
  return (
    <Container>
      <Img src={img} />
      <TextError>{textError}</TextError>
    </Container>
  );
};

export default EmptyState;
