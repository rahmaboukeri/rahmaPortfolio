import React from 'react'
import './about.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import me from "../../assets/me-cercle.png";
// import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';


const About = () => {
  return (
    <div className='about'>

            <Container>
              <Row>
                <Col>
                    <div className='aboutcol1' >
      
                        <Card 
                        // style={{ width: '20rem' }} 
                        border='light'>
                          <Card.Img variant="top" src={me} />         
                        </Card>
                    </div>
                </Col>
                <Col>
                    <div className='aboutcol2'>
                          <Card
                          //  style={{ width: '30rem' }}
                           >
                              <Card.Body>
                                <Card.Title>ABOUT ME</Card.Title>
                                <Card.Text>
                                    Je suis développeuse Web Full Stack MERN. 
                                  <br />
                                      Mon parcours professionnel m a permis d avoir une bonne maitrise de plusieurs technologies Frontend (HTML, CSS, Bootstrap, JavaScript, React), Backend (NodeJS, ExpressJS, Mongoose et PHP) et Base de données (MongoDB, MySQL). 

                                      Durant mes deux ans d expérience, j'ai géré plusieurs tâches, ce qui m a permis d'être polyvalente et autonome.

                                </Card.Text>
                              </Card.Body>
                          </Card>
                    </div>
                </Col>
              </Row>
            </Container>

    </div>
  )
}

export default About