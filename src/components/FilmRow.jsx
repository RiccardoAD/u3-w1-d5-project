// Here is your key: 88fd0ad1

// Please append it to all of your API requests,

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=88fd0ad1

import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom'

const URL = "http://www.omdbapi.com/?apikey=88fd0ad1&s=";

// class FilmRow extends Component {
//   state = {
//     moviesArray: [],
//     isLoading: true,
//     isError: false,
//   };
const FilmRow = (props) => {
  const [moviesArray, setMoviesArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

   const fetchPosters = () => {
    fetch(URL + props.seriesToSearch, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nel reperimento dati");
        }
      })

      .then((series) => {
        console.log("SERIES", series);
        setMoviesArray(series.Search);
        setIsLoading(false);
      })

      .catch((error) => {
        console.log("ERRORE", error);
        setIsLoading(false);
        setIsError(true);
      });
  };

  // componentDidMount() {
  //   this.fetchPosters();
  // }

  useEffect(() => {
    fetchPosters();
  }, []); 

  if (isLoading) {
      return (
        <div>
          <Spinner animation="border" variant="secondary" />
        </div>
      );
    }

    if (isError) {
      return (
        <div>
          <Alert variant="danger">
            Something went wrong! Try reloading
          </Alert>
        </div>
      );
    }

    return (
      <>
        
          {moviesArray.length >= 6 && (
            <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 ">
              {moviesArray.slice(0, 6).map((movie) => (
                <Col className="col mb-2 text-center px-1" key={movie.imdbID}>
                 <div>
                 <Link to={`/details/:${movie.imdbID}`}>
                    <img
                      src={movie.Poster}
                      className="img-fluid"
                      alt="movie poster"
                      style={{ height: "350px" }}
                    ></img>
                    </Link>
                 </div>
                </Col>
              ))}
            </Row>
        
        )}
      </>
    );
  
}

export default FilmRow;