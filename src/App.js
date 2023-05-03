// src/App.js
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Movie from './components/Movie'
import { Container } from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css'

const App = () => {

  const [page, setPage] = useState(1);

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage.selected + 1);
  };

  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList page={page} handlePageChange={handlePageChange} />} />
          <Route path="movie/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;