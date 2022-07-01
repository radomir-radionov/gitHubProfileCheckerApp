import { Union } from "assets/images";
import { Spinner } from "components";
import { Profile, Repos, EmptyState } from "modules";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getLoadingValueSelector,
  getUserReposSelector,
} from "redux/user/selectors";
import { userActions } from "redux/user/slice";
import { StyledUserPage } from "./styles";

const UserPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoadingValueSelector);
  const userReposData = useSelector(getUserReposSelector);
  let { userName } = useParams();

  useEffect(() => {
    userName && dispatch(userActions.getUserData(userName));
  }, [dispatch, userName]);

  return (
    <StyledUserPage>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Profile />
          {userReposData.length ? (
            <Repos itemsPerPage={4} />
          ) : (
            <EmptyState img={Union} textError="Repository list is empty" />
          )}
        </>
      )}
    </StyledUserPage>
  );
};

export default UserPage;
