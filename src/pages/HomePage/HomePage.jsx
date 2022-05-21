import { SearchIcon } from "assets/images";
import { Spinner } from "components";
import { UserItem } from "modules";
import { useSelector } from "react-redux";
import {
  getLoadingValueSelector,
  getUserNameSelector,
} from "redux/user/selectors";
import { HomePageContainer, Text, Img, GreetingMessage } from "./styles";

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
        <GreetingMessage>
          <Img src={SearchIcon} />
          <Text>Start with searching a GitHub user</Text>
        </GreetingMessage>
      )}
    </HomePageContainer>
  );
};

export default HomePage;
