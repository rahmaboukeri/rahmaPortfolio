import React from 'react'
import './services.css'
import proj1 from "../../assets/proj1.jpg";
import proj2 from "../../assets/proj2.jpg";
import proj3 from "../../assets/proj3.jpg";
import proj4 from "../../assets/proj4.png";
import proj5 from "../../assets/proj5.png";
// import proj6 from "../../assets/proj6.jpeg";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

const Services = () => {
  return (
    <div className='services'>
         
         <Container>
         <h3> WORKS</h3>
            <Row>
              <Col>
          {/* <div className='card' > */}
          <Card>
                  <Card.Img variant="top" src={proj1} />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                 </Card>
          {/* </div> */}
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src={proj2} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                
                </Card>
              </Col>
              <Col>
                  <Card>
                     <Card.Img variant="top" src={proj3} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                  </Card>
              </Col>
            </Row>

          <Row>
              <Col>
                <Card>
                  <Card.Img variant="top" src={proj4} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                </Card.Body>
          
             
                </Card>
              </Col>
              <Col>
              <Card>
                  <Card.Img variant="top" src={proj5} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
          
              
                </Card>
              </Col>
              <Col>
              <Card>
                  <Card.Img variant="top" src={proj4} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
          
              
                </Card>
              </Col>
          </Row>
          
        </Container>

         
         
    </div>
  )
}

export default Services