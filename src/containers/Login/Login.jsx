import React, { useRef, useState } from "react"
import { Container, Form, Button, Card, Alert} from "react-bootstrap"
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from "react-router-dom"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }


  return (
    <>
    <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
    >
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Sign In
            </Button>
          </Form>
        </Card.Body>
        <Card.Body className="d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faGoogle} style={{ cursor: "pointer"}}/>
          <FacebookIcon style={{ cursor: "pointer"}}/>
          <TwitterIcon style={{ cursor: "pointer"}}/>
        </Card.Body>
      </Card>
    </Container>
    </>
  )
}