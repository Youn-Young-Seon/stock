import axios from 'axios';
import React, {ReactElement, useState} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {NavLink, Route} from 'react-router-dom';
import './App.css';
import './main.scss';

const secretKey :string = 'NTVoNqBCa6w4WY0zqtP488WlWdVMsK4H4z%2BanvgdokVDEjJOsFtXTI98sRy2NUrAaw3IUMu0izHR0DFo%2F2XqHA%3D%3D'

function App() {

  let [click, clickSet] = useState('');
  let [card, cardSet] = useState([0, 1, 2]);

  function stockInfo(){
    axios.get(`https://api.odcloud.kr/api/GetStockSecuritiesInfoService/v1/getStockPriceInfo?resultType=json&serviceKey=${secretKey}`)
    .then((result)=> {
      console.log(result)
    })
    .catch((e)=>{

    })
  }

  function ActiveStyle(){      
    return(
      <ul>
        <NavLink className='main-fontColor--blueGreen' activeClassName={click} exact to='/'>
          <li onClick={() => { clickSet('active'); stockInfo();} }>
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
                  <div className='main-title main-fontColor--light'>
                    <h6>Live Rates</h6>
                    <ActiveStyle/>
                  </div>
                  <StockCard/>
                  </div>                
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
            <div className='section-right main-fontColor--light'>              
              <div className="section-right-title">
                <h6>Analytics</h6>
              </div>              
              <div className="section-right-container">
                
              </div>   
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
