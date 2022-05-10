import React, { useContext, useState } from "react";
import ReactPaginate from "react-paginate";
import { Post } from "../Post/Post";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { Context } from "../../Context/Context";

export const Feed = ({ data }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const { theme } = useContext(Context);

  const dataPerPage = 10;
  const pagesVisited = pageNumber * dataPerPage;

  const DisplayData = data
    .slice(pagesVisited, pagesVisited + dataPerPage)
    .map((item, index) => {
      return <Post key={index} data={item} />;
    });

  const pageCount = Math.ceil(data.length / dataPerPage);
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className='paginate'>{DisplayData}</div>{" "}
      {data.length > 10 && (
        <div className='paginate-btn-container'>
          <ReactPaginate
            previousLabel={<ArrowBack />}
            nextLabel={<ArrowForward />}
            pageCount={pageCount}
            onPageChange={pageChange}
            containerClassName='paginationBtn'
            previousLinkClassName='prevBtn btn'
            nextLinkClassName='nextBtn btn'
            disableClassName='paginationDisabled'
            activeClassName='paginationActive'
            style={{ color: theme.text }}
          />
        </div>
      )}
    </>
  );
};
