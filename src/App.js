import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Login from "./components/Login";
import TabsPanel from "./common/TabsPanel";

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col xs={12} md={12} lg={6}>
            <TabsPanel />
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
}

export default App;
