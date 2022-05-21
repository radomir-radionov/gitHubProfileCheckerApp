import { SearchIcon } from "assets/images";
import { Input } from "components";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { userActions } from "redux/user/slice";
import { SearchBarContainer, Form, FormInput, BoxImage, Image } from "./styles";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const onChangeSearchTextInput = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        searchText && dispatch(userActions.getUserData(searchText));
      }
    };
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [dispatch, searchText]);

  return (
    <SearchBarContainer>
      <Form>
        <FormInput>
          <BoxImage>
            <Image src={SearchIcon} alt="Search icon" />
          </BoxImage>
          <Input value={searchText} onChange={onChangeSearchTextInput} />
        </FormInput>
      </Form>
    </SearchBarContainer>
  );
};

export default SearchBar;
