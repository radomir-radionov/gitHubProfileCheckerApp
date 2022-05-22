import { searchIconBig } from "assets/images";
import { Spinner } from "components";
import { EmptyState, UserItem } from "modules";
import { useSelector } from "react-redux";
import {
  getLoadingValueSelector,
  getUserNameSelector,
} from "redux/user/selectors";
import { HomePageContainer } from "./styles";

const HomePage = () => {
  const userName = useSelector(getUserNameSelector);
  const isLoading = useSelector(getLoadingValueSelector);

  return (
    <HomePageContainer>
      {isLoading ? (
        <Spinner />
      ) : userName ? (
        <UserItem />
      ) : (
        <EmptyState
          img={searchIconBig}
          textError="Start with searching a GitHub user"
        />
      )}
    </HomePageContainer>
  );
};

export default HomePage;
