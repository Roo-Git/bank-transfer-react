import React, { useRef, useState } from "react"
import { Container, Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from '../../contexts/AuthContext';
import { signInWithGoogle, signInWithFacebook, signInWithTwitter} from '../../firebase';
import { useHistory } from "react-router-dom"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


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

  // Sign in with Google

  async function handleClickGoogle(e) {
    e.preventDefault()

    try {
    await signInWithGoogle()
    history.push("/")
    } catch {
      setError("Failed to log in")
    }
  };

  // Sign in with Facebook

  async function handleClickFacebook(e) {
    e.preventDefault()

    try {
    await signInWithFacebook()
    history.push("/")
    } catch {
      setError("Failed to log in")
    }
  };

  // Sign in with Twitter

  async function handleClickTwitter(e) {
     e.preventDefault()
  
    try {
    await signInWithTwitter()
    history.push("/")
    } catch {
      setError("Failed to log in")
    }
  };




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
            <Button disabled={loading} className="w-100" type="submit">
              Sign In
            </Button>
          </Form>
        </Card.Body>
        <Card.Body className="d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faGoogle} onClick={handleClickGoogle} style={{ cursor: "pointer", margin: "4px"}}/>
          <FacebookIcon onClick={handleClickFacebook} style={{ cursor: "pointer", margin: "4px"}}/>
          <TwitterIcon onClick={handleClickTwitter} style={{ cursor: "pointer", margin: "4px"}}/>
        </Card.Body>
      </Card>
    </Container>
    </>
  )
}

