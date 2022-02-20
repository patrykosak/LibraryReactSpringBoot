import React from "react";
import ReactPaginate from "react-paginate";

const AppPagination = ({ info }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      nextLabel="następna"
      previousLabel="poprzednia"
      previousClassName="btn btn-primary"
      nextClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      pageCount={info?.totalPages}
    />
  );
};

export default AppPagination;
