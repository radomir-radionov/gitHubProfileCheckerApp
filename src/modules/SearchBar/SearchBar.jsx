import { SearchIcon } from "assets/images";
import { Input } from "components";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "redux/user/slice";
import { Form, Image } from "./styles";
import { history } from "utils";

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
        history.push(`../${searchText}`);
        searchText && dispatch(userActions.getUserData(searchText));
      }
    };
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [dispatch, searchText]);

  return (
    <Form>
      <Image src={SearchIcon} alt="Search icon" />
      <Input value={searchText} onChange={onChangeSearchTextInput} />
    </Form>
  );
};

export default SearchBar;
