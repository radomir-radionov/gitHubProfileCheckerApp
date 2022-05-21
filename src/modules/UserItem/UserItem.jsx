import { useSelector } from "react-redux";
import {
  getErrorMessageSelector,
  getUserReposSelector,
  getUserSelector,
} from "redux/user/selectors";
import { GroupIcon, PersonIcon, Union, User } from "assets/images";
import PaginatedRepos from "modules/PaginatedRepos";
import ErrorMessage from "modules/ErrorMessage";
import {
  Container,
  UserBox,
  ReposContainer,
  Img,
  FullName,
  UserName,
  BoxSecondary,
  SecondaryText,
  ContainerNames,
  ContainerSecondary,
  Title,
  Icon,
  ErrorContainer,
  ErrorImg,
  ErrorText,
} from "./styles";

const UserItem = () => {
  const userData = useSelector(getUserSelector);
  const userReposData = useSelector(getUserReposSelector);
  const errorMessage = useSelector(getErrorMessageSelector);

  return (
    <Container>
      {errorMessage ? (
        <ErrorMessage img={User} textError="User not found" />
      ) : (
        <>
          <UserBox>
            <ContainerNames>
              <Img src={userData.avatar_url} alt="User Image" />
              <FullName>{userData.name ? userData.name : "Unknown"}</FullName>
              <UserName href={userData.html_url} target="_blank">
                {userData.login}
              </UserName>
            </ContainerNames>
            <ContainerSecondary>
              <BoxSecondary>
                <Icon src={GroupIcon} alt="Group Icon" />
                <SecondaryText>{userData.followers} followers</SecondaryText>
              </BoxSecondary>
              <BoxSecondary>
                <Icon src={PersonIcon} alt="Person Icon" />
                <SecondaryText>{userData.following} following</SecondaryText>
              </BoxSecondary>
            </ContainerSecondary>
          </UserBox>
          {userReposData.length ? (
            <ReposContainer>
              <Title>{`Repositories (${userReposData.length})`}</Title>
              <PaginatedRepos itemsPerPage={4} />
            </ReposContainer>
          ) : (
            <ErrorContainer>
              <ErrorImg src={Union} />
              <ErrorText>Repository list is empty</ErrorText>
            </ErrorContainer>
          )}
        </>
      )}
    </Container>
  );
};

export default UserItem;
