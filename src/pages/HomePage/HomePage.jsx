import { NoUser, searchIconBig } from "assets/images";
import { Spinner } from "components";
import { EmptyState } from "modules";
import { useSelector } from "react-redux";
import {
  getErrorValueSelector,
  getLoadingValueSelector,
} from "redux/user/selectors";
import { StyledHomePage } from "./styles";

const HomePage = () => {
  const isLoading = useSelector(getLoadingValueSelector);
  const isError = useSelector(getErrorValueSelector);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <EmptyState img={NoUser} textError="User not found" />;
  }

  return (
    <StyledHomePage>
      <EmptyState
        img={searchIconBig}
        textError="Start with searching a GitHub user"
      />
    </StyledHomePage>
  );
};

export default HomePage;
