import React, { useState } from 'react'
import { Card, Button, Alert } from "react-bootstrap"
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
        <h2 className="text-center mb-4">Bank Transfer</h2>
        {error && <Alert variant="danger">{error}</Alert>}
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      <Button variant="link" onClick={handleLogout}>
        LogOut
      </Button>
    </div>
  </>
  )
}


