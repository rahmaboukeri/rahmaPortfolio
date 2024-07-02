import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from './components/header/NavBaar';
import Slide from './components/header/Slide';
import About from "../src/components/main/About";
import Services from "./components/main/Services";
import Contact from "./components/main/Contact";
// import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
            <header className='header'>    
                    
                        <NavBar />
                  
                        <Slide />
                  
                      <div id='stars'></div>
                      <div id='stars2'></div>
                      <div id='stars3'></div>
                      <div id='title'></div>
                  
                    
              </header>
            
   
                
              <main>
                  <Container fluid="lg">
                        <Row>
                          <Col>
                              <About />
                          </Col>
                        </Row>

                        <Row>
                            <Col>
                            <Services />
                            </Col>
                        </Row>

                        <Row> 
                            <Col>
                              <Contact />
                            </Col>
                        </Row>
                  </Container>
                </main>
      
    </div>
  );
}

export default App;
