import React, { useContext, useState } from "react";
import ReactPaginate from "react-paginate";
import { Context } from "../../Context/Context";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import SingleWriter from "./SingleWriter";

const AllWritersList = ({ data }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const { theme } = useContext(Context);

  const dataPerPage = 15;
  const pagesVisited = pageNumber * dataPerPage;

  const DisplayData = data
    .slice(pagesVisited, pagesVisited + dataPerPage)
    .map((item, index) => {
      return <SingleWriter key={index} data={item} />;
    });

  const pageCount = Math.ceil(data.length / dataPerPage);
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <div className='paginate'>{DisplayData}</div>{" "}
      {data.length > 15 && (
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

export default AllWritersList;
