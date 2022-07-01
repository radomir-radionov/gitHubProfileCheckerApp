import { GitHubIcon } from "assets/images";
import { SearchBar } from "modules";
import { Logo, StyledHeader } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={GitHubIcon} alt="GitHubIcon" />
      <SearchBar />
    </StyledHeader>
  );
};

export default Header;
