import FilmRow from "./FilmRow";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"
import Dropdown from "react-bootstrap/Dropdown";


const MainContainer = function () {
  return (
    <div className="container-fluid px-4 bg-dark text-white">
      <Container className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">TV Shows</h2>
          <div className="btn-group" role="group">
            <div className="dropdown ms-4 mt-1">
              <button
                type="button"
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: "#221f1f" }}
              >
                Genres
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#link">
                    Comedy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#link">
                    Drama
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#link">
                    Thriller
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <i className="bi bi-grid icons pl-3"></i>
          <i className="bi bi-grid-3x3 icons"></i>
        </div>
      </Container>
      <Row className="text-start"><h4>Trending Now</h4></Row>
      <FilmRow seriesToSearch="Pirates of the Caribbean" />
      <Row className="text-start"><h4>Watch Again</h4></Row>
      <FilmRow seriesToSearch="lord of the rings" />
      <Row className="text-start"><h4>New realise</h4></Row>
      <FilmRow seriesToSearch="scary" />
    </div>
  );
};

export default MainContainer;