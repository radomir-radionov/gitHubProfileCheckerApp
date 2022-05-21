import { GitHubIcon } from "assets/images";
import SearchBar from "modules/SearchBar";
import { Img, Nav } from "./styles";

const NavBar = () => {
  return (
    <Nav>
      <Img src={GitHubIcon} alt="GitHubIcon" />
      <SearchBar />
    </Nav>
  );
};

export default NavBar;
