import React from "react"
import { Container, Form, Button, Card} from "react-bootstrap"
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';


export default function Login() {



  return (
    <>
    <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
    >
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Sign In
            </Button>
          </Form>
        </Card.Body>
        <Card.Body className="d-flex align-items-center justify-content-center">
         <FacebookIcon style={{ cursor: "pointer"}}/>
         <EmailIcon style={{ cursor: "pointer"}}/>
         <TwitterIcon style={{ cursor: "pointer"}}/>
        </Card.Body>
      </Card>
    </Container>
    </>
  )
}