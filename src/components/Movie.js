import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Movie = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const param = useParams();

  const [movie, setMovie] = useState({});
  useEffect(() => {
    //console.log("apikey = "+ apiKey);
    axios
      .get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=${apiKey}&language=en-US`)
      .then((response) => {
        const movie = response.data;
        setMovie(movie)
      })
      .catch((error) => {
        setMovie({});
      });

  }, [param.id, apiKey])

  return (
    <Row className='mt-5'>
      <Col md="12">
        <Card className='w-100 border-0'>
          <div className='d-flex justify-content-center'>
            <Card.Img variant="top" className='item-image' style={{ 'width': '200px' }} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
          </div>
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
              {movie.overview}
            </Card.Text>
            <div className='d-flex justify-content-between'>
              <Button target='_blank' href={`https://www.imdb.com/title/${movie.imdb_id}`} variant="primary">IMDB</Button>
              <Link to="/"><Button variant="danger">Back</Button></Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Movie