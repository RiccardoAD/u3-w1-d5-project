// Here is your key: 88fd0ad1

// Please append it to all of your API requests,

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=88fd0ad1

import { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const URL = "http://www.omdbapi.com/?apikey=88fd0ad1&s=";

class FilmRow extends Component {
  state = {
    moviesArray: [],
    isLoading: true,
    isError: false,
  };

  fetchPosters = () => {
    fetch(URL + this.props.seriesToSearch, {
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
        this.setState({
          moviesArray: series.Search,
          isLoading: false,
        });
      })

      .catch((error) => {
        console.log("ERRORE", error);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };

  componentDidMount() {
    this.fetchPosters();
  }

  render() {
    const { moviesArray, isLoading, isError } = this.state;

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
                  <img
                    src={movie.Poster}
                    className="img-fluid"
                    alt="movie poster"
                    style={{ height: "350px" }}
                  ></img>
                </Col>
              ))}
            </Row>
        
        )}
      </>
    );
  }
}

export default FilmRow;