// src/components/MovieList.js
import React, { useEffect } from 'react';
import { Col, Card, Row, Alert } from 'react-bootstrap'; // import the necessary components
import LoadSpinner from "./LoadSpinner";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate'; // import the ReactPaginate component
import { fetchMovies } from '../actions/movieActions';

const MovieList = ({ page, handlePageChange }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [dispatch, page]);

  const movies = useSelector((state) => state.movies);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  return (
    loading ? <LoadSpinner /> : error ? <Alert variant="danger">{error}</Alert> :
      <>
        <Row>
          <h1 className="text-center my-4">Popular Movies</h1>
        </Row>
        <Row className="d-flex">
          {movies.map((movie) => (
            <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Link to={`/movie/${movie.id}`} >
                <Card>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
        <Row  >
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
            forcePage={page-1}
          />
        </Row>
      </>
  );
};

export default MovieList;