import { render } from '@testing-library/react';
import React, {ReactElement, useState} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {NavLink, Route} from 'react-router-dom';
import { JsxElement } from 'typescript';
import './App.css';
import './main.scss';

function App() {

  let [click, clickSet] = useState('');
  let [card, cardSet] = useState([0, 1, 2]);

  function ActiveStyle(){      
    return(
      <ul>
        <NavLink className='main-fontColor--blueGreen' activeClassName={click} exact to='/'>
          <li onClick={() => { clickSet('active') } }>
            chap1
          </li>
        </NavLink>
        <NavLink className='main-fontColor--blueGreen' activeClassName={click} to='/path'>
          <li onClick={ () => { clickSet('active') } }>
            chap2
          </li>
        </NavLink>
      </ul>
    )
  }

  function StockCard(){
    return(     
      <>
        {
          card.map((a) => {
            return <div className='main-box-row'>
                    <div className="main-box-col"></div>
                    <div className="main-box-col"></div>
                    <div className="main-box-col"></div>
                    <div className="main-box-col"></div>                    
                  </div>;
          })
        }
      </>
    )
  }

  return (
    <div className="App">      
      <div id="main-bg">
        <Navbar expand="lg" className='header'>
          <Container className='header-topBar'>
            <Navbar.Brand href="/" className='main-fontColor--light'><h4>Stock</h4></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link className='main-fontColor--light' href="#home">Home</Nav.Link>
                <Nav.Link className='main-fontColor--light' href="#link">Link</Nav.Link>                 */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
        <div>
          <div className='section'>
            <div className="section-left">
              <div className='section-left-top'>
                <div className='section-left-top-container'>
                  {/* <div className="row"> */}
                    <div className='main-title main-fontColor--light'>
                      <h6>Live Rates</h6>
                      <ActiveStyle/>
                    </div>
                    <StockCard/>
                    </div>
                  {/* </div> */}
                </div>
              <div className='section-left-bottom'>
                <div className="section-left-bottom-container main-fontColor--light">
                  <h6>Trades</h6>
                  <div className="section-left-bottom-container-title">
                    <table>
                      <tr>
                        <th>th</th>
                        <th>th</th>
                        <th>th</th>
                        <th>th</th>
                        <th>th</th>
                      </tr>
                    </table>
                  </div>
                  <div className='section-left-bottom-container-table'>
                    <table>
                      <tr>
                        <td>td</td>
                        <td>td</td>
                        <td>td</td>
                        <td>td</td>
                        <td>td</td>                                            
                      </tr>
                      <tr>
                        <td>td</td>
                        <td>td</td>
                        <td>td</td>
                        <td>td</td>
                        <td>td</td>                                            
                      </tr>
                      <tr>
                        <td>td</td>
                        <td>td</td>
                        <td>td</td>
                        <td>td</td>
                        <td>td</td>                                            
                      </tr>
                      <tr>
                        <td>td</td>
                        <td>td</td>
                        <td>td</td>
                        <td>td</td>
                        <td>td</td>                                            
                      </tr>
                      <tr>
                        <td>td</td>
                        <td>td</td>
                        <td>td</td>
                        <td>td</td>
                        <td>td</td>                                            
                      </tr>
                      <tr>
                        <td>td</td>
                        <td>td</td>
                        <td>td</td>
                        <td>td</td>
                        <td>td</td>                                            
                      </tr>
                    </table>                                    
                  </div>
                </div>
              </div>
            </div>
            <div className='section-right'>
              <div className="section-right-container"></div>   
            </div>
          </div>
          <div className="footer">
            <div className="footer-container">
                
            </div>               
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
