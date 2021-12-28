import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import './App.css';
import './main.scss';

function App() {  

  return (
    <div className="App">      
      <div id="main-bg">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/" className='main-fontColor'><h3>Stock</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link className='main-fontColor' href="#home">Home</Nav.Link>
                <Nav.Link className='main-fontColor' href="#link">Link</Nav.Link>                 */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="row">
            <div>
              <h4>안녕</h4>
            </div>
            <div className="col-3">
              <div className="main-box"></div>
              <div className="main-box"></div>
              <div className="main-box"></div>
            </div>
            <div className="col-3">
              <div className="main-box"></div>
              <div className="main-box"></div>
              <div className="main-box"></div>
            </div>
            <div className="col-3">
              <div className="main-box"></div>
              <div className="main-box"></div>
              <div className="main-box"></div>
            </div>
            <div className="col-3">
              <div className="main-box"></div>              
            </div>
          </div>          
        </div>
    </div>
  );
}

export default App;
