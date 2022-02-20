import React from "react";
import ReactPaginate from "react-paginate";

const AppPagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      nextLabel="następna"
      previousLabel="poprzednia"
      previousClassName="page-link"
      nextClassName="page-link"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      pageCount={info?.totalPages}
      onPageChange={(data)=>{
        setPageNumber(data?.selected)}}
    />
  );
};

export default AppPagination;
