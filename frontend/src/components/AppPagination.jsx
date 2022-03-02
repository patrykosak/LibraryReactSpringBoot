import React from "react";
import ReactPaginate from "react-paginate";

const AppPagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className="w-100 pagination justify-content-center gap-4 my-4"
      nextLabel="następna"
      previousLabel="poprzednia"
      previousLinkClassName="btn btn-primary"
      nextLinkClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      pageCount={info?.totalPages}
      onPageChange={(data)=>{
        setPageNumber(data?.selected)}}
    />
  );
};

export default AppPagination;
