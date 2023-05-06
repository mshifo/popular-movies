import React from 'react'
import ReactPaginate from 'react-paginate'; // import the ReactPaginate component

export const Pagination = ({page, handlePageChange}) => {

    return (
        <ReactPaginate
            pageCount={10} // set the total number of pages
            pageRangeDisplayed={5} // set the number of pages to display in the pagination
            marginPagesDisplayed={2} // set the number of pages to display at the beginning and end of the pagination
            onPageChange={handlePageChange} // set the function to handle page changes
            containerClassName="pagination justify-content-center" // set the class name for the pagination container
            pageClassName="page-item" // set the class name for each page item
            pageLinkClassName="page-link" // set the class name for each page link
            activeClassName="active" // set the class name for the active page item
            previousClassName="page-item" // set the class name for the previous button
            previousLinkClassName="page-link" // set the class name for the previous button link
            nextClassName="page-item" // set the class name for the next button
            nextLinkClassName="page-link" // set the class name for the next button link
            breakClassName='page-item'
            breakLinkClassName='page-link'
            forcePage={page - 1}
        />
    )
}
