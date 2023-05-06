// src/components/MovieList.js
import React, { useEffect, useState } from 'react';
import { Col, Card, Row, Alert } from 'react-bootstrap'; // import the necessary components
import LoadSpinner from "./LoadSpinner";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../actions/movieActions';
import { Pagination } from './Pagination';

const MovieList = () => {

  const [page, setPage] = useState(1);

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage.selected + 1);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [dispatch, page]);

  const { loading, movies, error } = useSelector((state) => state);

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
          <Pagination page={page} handlePageChange={handlePageChange} />
        </Row>
      </>
  );
};

export default MovieList;