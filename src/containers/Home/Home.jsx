import React, { useState } from 'react'
import { Card, Button, Alert, Container, Row, Col } from "react-bootstrap"
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default function Home() {
  const [error, setError] = useState("")
  const { logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push('/register')

    } catch {
      setError("Failed to log out")
    }
  };
  
  return (
    <>
    <Card>
      <Card.Body>
        <h1 className="text-center mb-4">Bank Transfer</h1>
        {error && <Alert variant="danger">{error}</Alert>}
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      <Button className="w-10" onClick={handleLogout}>
        LogOut
      </Button>
      <Container fluid="md mt-5">
        <Row>
          <Col><h2>Menu</h2></Col>
        </Row>
        <Row className="md mt-5">
          <Col><Button className="w-10">Create Account</Button></Col>
          <Col><Button className="w-10">Transactions</Button></Col>
          <Col><Button className="w-10">Ask for a loan</Button></Col>
        </Row>
    </Container>
    </div>
  </>
  )
}


