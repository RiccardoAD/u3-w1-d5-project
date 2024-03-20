import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";

const MovieDetails = function () {
  const [filmDet, setFilmDet] = useState(null);
//   const [comment, setComment] = useState([]);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=88fd0ad1&i=${params.filmId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(" its NOT ok");
        }
        return response.json();
      })
      .then((data) => {
        setFilmDet(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(" movie details:", error);
      });
  }, [params.filmId]);

//   useEffect(() => {
//     fetch(`https://striveschool-api.herokuapp.com/api/comments/${params.filmId}`, {
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWZhZjRkZDcxNzQ3YjAwMWExYjAyZmEiLCJpYXQiOjE3MTA5NDU1MDEsImV4cCI6MTcxMjE1NTEwMX0.gNa6O84yCTlZStTa3UncuXHPxCQ3J7wZuUBn8T9ck9Q",
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(" its NOT ok");
//         }
//         return response.json();
//       })
//       .catch((error) => {
//         console.error(" movie details:", error);
//       })
//       .then((data) => {
//         setComment(data);
//         console.log(data);
//         console.log(comment);
//       });
//   }, [params.filmId]);

  return (
    <div>
      {!filmDet && (
        <div>
          <Spinner animation="border"></Spinner>
        </div>
      )}
      {filmDet && (
        <Card style={{ width: "18rem" }} className="mx-auto">
          <Card.Img variant="top" src={filmDet.Poster} />
          <Card.Body>
            <Card.Title>{filmDet.Title}</Card.Title>
            <Card.Text>{filmDet.Plot}</Card.Text>
            {/* <h5>Recensioni del Film</h5>
            {comment.map((commentObj, index) => (
              <div key={index} className="bg-dark text-white ">
                <p>Commento: {commentObj.comment}</p>
                <p>Autore: {commentObj.author}</p>
              </div>
            ))} */}
            <Link to="/">
              {" "}
              <Button variant="danger">Torna alla home</Button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default MovieDetails;
    
