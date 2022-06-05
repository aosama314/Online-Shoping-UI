import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import TabsPanel from "./common/TabsPanel";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BannerImg from "./assets/banner-01.jpg";
import CustomerHome from "./components/UserHome/CustomerHome";

function App() {
  console.log(BannerImg);

  return (
    <div className="App">
      {/* <Container>
        <Row className="justify-content-md-center mt-5">
          <Col xs={12} md={12} lg={6}>
            <TabsPanel />
          </Col>
        </Row>
      </Container>
      <ToastContainer /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TabsPanel />}>
            {/* <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
          </Route>
          <Route exact path="/home" element={<CustomerHome />} />
          <Route exact path="/aboutUs" element={<CustomerHome />} />
          <Route exact path="/contactUs" element={<CustomerHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
