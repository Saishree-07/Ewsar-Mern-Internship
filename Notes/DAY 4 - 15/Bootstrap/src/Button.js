import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert, Button, Breadcrumb, Card } from 'react-bootstrap'
const Boot = () => {
  return (
    <div>
        <Card style={{background:"pink"}}>
            <Card.Title>
                Title:Card
            </Card.Title>
            <Card.Text>
                THIS IS SAI CARD
            </Card.Text>
            <Card.Img src='https://th.bing.com/th/id/OIP.hLdN5SGnqfMuDDfUQdIhRgHaHi?w=188&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7'style={{
    display: 'block', 
    margin: '10px auto', 
    width: '140px',
    height: '150px',
    borderRadius: '10px'
  }}>
            </Card.Img>
            </Card>
            <Card style={{background:"grey"}}>
            <Card.Title>
                Title 2:Card
            </Card.Title>
            <Card.Text>
                YOU ARE INVITED
            </Card.Text>
        </Card>
        <Alert>I'M SAI</Alert>
        <Alert variant="primary">saiiiii</Alert>
        <Alert variant='secondary'>saiiiiiiiiiii</Alert>
        <Alert variant='success'>saiiiiiiiiiiiiiiiiiii</Alert>
      <Button 
      type="button"
      class="btn btn-primary btn-lg btn-block"
      data-toggle="button"
      aria-pressed="false"
      aria-autocomplete='off'
      disabled
      >BUTTON FROM BOOTSTRAP</Button>
      <Breadcrumb>
      <Breadcrumb.Item >Sai Home</Breadcrumb.Item>
      <Breadcrumb.Item >Sai About</Breadcrumb.Item>
      <Breadcrumb.Item >Sai Contact</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default Boot;