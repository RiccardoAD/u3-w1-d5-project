import FilmRow from "./FilmRow";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"
import Dropdown from "react-bootstrap/Dropdown";


const FilmBody = function () {
  return (
    <Container fluid className="px-4 bg-dark text-white">
      <Container  fluid className="d-flex justify-content-between">
        <Container className="d-flex me-3">
          <Row className="d-flex justify-content-start "><h2 className="mb-4">TV Shows</h2></Row>
          <div className="btn-group" role="group">
          <div>
            <Dropdown className="ms-3">
              <Dropdown.Toggle
                id="dropdown-basic"
                className="bg-dark border border-1  border-secondary mt-1   rounded-0 p-1"
              >
                Geners
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          </div>
        </Container>
        <Col className="d-flex justify-content-end">
          <i className="bi bi-grid icons pl-3"></i>
          <i className="bi bi-grid-3x3 icons"></i>
        </Col>
      </Container>
      <Row className="text-start"><h4>Trending Now</h4></Row>
      <FilmRow seriesToSearch="Pirates of the Caribbean" />
      <Row className="text-start"><h4>Watch Again</h4></Row>
      <FilmRow seriesToSearch="Witch" />
      <Row className="text-start"><h4>New realise</h4></Row>
      <FilmRow seriesToSearch="scary" />
    </Container>
  );
};

export default FilmBody;