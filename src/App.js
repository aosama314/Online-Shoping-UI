import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import TabsPanel from "./common/TabsPanel";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer />
    </div>
  );
}

export default App;
