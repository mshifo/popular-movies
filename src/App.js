// src/App.js
import React from 'react';
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

  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="movie/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;