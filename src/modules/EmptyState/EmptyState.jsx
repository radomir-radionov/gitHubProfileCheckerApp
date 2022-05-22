import { Container, Img, TextError } from "./styles";

const EmptyState = ({ img, textError, height = null, width = "220px" }) => {
  return (
    <Container height={height}>
      <Img src={img} />
      <TextError width={width}>{textError}</TextError>
    </Container>
  );
};

export default EmptyState;
