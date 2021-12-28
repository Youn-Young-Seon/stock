import React, {useState} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import './App.css';
import './main.scss';

function App() {

  const [click, clickSet] = useState('addClass');

  function addClass(){
    clickSet("click");
  }

  return (
    <div className="App">      
      <div id="main-bg">
        <Navbar expand="lg">
          <Container className='main-topBar'>
            <Navbar.Brand href="/" className='main-fontColor--light'><h3>Stock</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link className='main-fontColor--light' href="#home">Home</Nav.Link>
                <Nav.Link className='main-fontColor--light' href="#link">Link</Nav.Link>                 */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="row">
            <div className='main-title'>              
                <h6 className='main-fontColor--light'>Live Rates</h6>
                <ul className='main-fontColor--blueGreen' onClick={ addClass }>
                  <li>chap1</li>
                  <li>chap2</li>
                  <li>chap3</li>
                  <li>chap4</li>
                  <li>chap5</li>
                </ul>              
            </div>
            {/* <div className="col-3">
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
            </div> */}
          </div>          
        </div>
    </div>
  );
}

export default App;
