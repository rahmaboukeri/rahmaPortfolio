import React from 'react'
import Button from 'react-bootstrap/Button';

import downloadCV from "../../files/CV-Rahma-Boukeri-Développeuse-web-Full-Stack.pdf";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Slide.css'

const Slide = () => {
  return (
    <div className='slide'>

<Container>
      <Row>
        <Col>
        <p>
            Bonjour, je suis Rahma BOUKERI

        </p>
        <p className='subtitle'>
            <span>
              Développeuse web Full Stack MERN
            </span>
            <span>
              Développeuse web PHP
            </span>
            <span>
              Développeuse web WORDPRESS
            </span>
        </p> 
        <p className='vwork'>
                <Button variant="warning" type='button'>
                   Mes travails
                </Button>
             <a href={downloadCV} download> 
                <Button variant="warning" type='button'>
                    Télecharger mon CV
                </Button>
              </a>
        </p>
        </Col>
      </Row>
</Container>      

       
        
    </div>
  )
}

export default Slide