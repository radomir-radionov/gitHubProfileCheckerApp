import { RectangleLeft } from "assets/images";
import { ReposList } from "modules";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { getUserReposSelector } from "redux/user/selectors";
import {
  StyledLeftArrow,
  StyledRightArrow,
  StyledText,
  Title,
  StyledPagination,
  StyledRepos,
} from "./styles";

const Repos = ({ itemsPerPage }) => {
  const userReposData = useSelector(getUserReposSelector);
  const [currentRepos, setCurrentRepos] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % userReposData.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setCurrentRepos(userReposData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(userReposData.length / itemsPerPage));
  }, [endOffset, itemOffset, itemsPerPage, userReposData]);

  return (
    <StyledRepos>
      <Title>{`Repositories (${userReposData.length})`}</Title>
      <ReposList currentRepos={currentRepos} />
      <StyledPagination>
        <StyledText>
          {itemOffset + 1}-{endOffset} of {userReposData.length} items
        </StyledText>
        <ReactPaginate
          nextLabel={<StyledRightArrow src={RectangleLeft} />}
          previousLabel={<StyledLeftArrow src={RectangleLeft} />}
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          onPageChange={handlePageClick}
          pageCount={pageCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          containerClassName="pagination"
          pageClassName="pagination__page"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </StyledPagination>
    </StyledRepos>
  );
};

export default Repos;
