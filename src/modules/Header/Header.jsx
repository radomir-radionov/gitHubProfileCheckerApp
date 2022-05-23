import { GitHubIcon } from "assets/images";
import SearchBar from "modules/SearchBar";
import { Img, Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <Img src={GitHubIcon} alt="GitHubIcon" />
      <SearchBar />
    </Container>
  );
};

export default Header;
