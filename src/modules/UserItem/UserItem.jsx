import { useSelector } from "react-redux";
import {
  getErrorMessageSelector,
  getUserReposSelector,
  getUserSelector,
} from "redux/user/selectors";
import { GroupIcon, PersonIcon, Union, User } from "assets/images";
import PaginatedRepos from "modules/PaginatedRepos";
import EmptyState from "modules/EmptyState";
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
} from "./styles";

const UserItem = () => {
  const userData = useSelector(getUserSelector);
  const userReposData = useSelector(getUserReposSelector);
  const errorMessage = useSelector(getErrorMessageSelector);

  return (
    <>
      {errorMessage ? (
        <EmptyState img={User} textError="User not found" />
      ) : (
        <Container>
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
            <EmptyState
              img={Union}
              textError="Repository list is empty"
              height={"500px"}
              width={"250px"}
            />
          )}
        </Container>
      )}
    </>
  );
};

export default UserItem;
