import { GroupIcon, PersonIcon } from "assets/images";
import { useSelector } from "react-redux";
import { getUserSelector } from "redux/user/selectors";
import {
  BoxSecondary,
  FullName,
  Icon,
  Img,
  Secondary,
  SecondaryText,
  StyledProfile,
  UserName,
} from "./styles";

const Profile = () => {
  const userData = useSelector(getUserSelector);

  const formatNumber = (num) => {
    return num >= 1000 ? `${Math.round((num / 1000) * 10) / 10}k` : `${num}`;
  };

  return (
    <StyledProfile>
      <Img src={userData.avatar_url} alt="User avatar" />
      <FullName>{userData.name ? userData.name : "Unknown"}</FullName>
      <UserName href={userData.html_url} target="_blank">
        {userData.login}
      </UserName>
      <Secondary>
        <BoxSecondary>
          <Icon src={GroupIcon} alt="Group Icon" />
          <SecondaryText>
            {formatNumber(userData.followers)} followers
          </SecondaryText>
        </BoxSecondary>
        <BoxSecondary>
          <Icon src={PersonIcon} alt="Person Icon" />
          <SecondaryText>
            {formatNumber(userData.following)} following
          </SecondaryText>
        </BoxSecondary>
      </Secondary>
    </StyledProfile>
  );
};

export default Profile;
