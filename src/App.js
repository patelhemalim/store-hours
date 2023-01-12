// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
  from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



// Import other React Component
import CreateStoreHours from
  "./Components/create-store-hours.component";

import StoreHoursList from
  "./Components/store-hours-list.component";

import EditHours from
  "./Components/edit-store-hour.component";

// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-store-hours"}
                  className="nav-link">
                  Create Store Hours
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">


                <Nav>
                  <Link to={"/store-hours-list"}
                    className="nav-link">
                    Store Hours List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>

                  <Route path="/create-store-hours"
                    element={<CreateStoreHours />} />
                  <Route path="/edit-store-hour/:id"
                    element={<EditHours />} />
                  <Route path="/store-hours-list"
                    element={<StoreHoursList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
