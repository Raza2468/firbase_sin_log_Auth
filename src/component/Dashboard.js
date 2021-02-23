import React,{useState} from 'react'
import { Card, Button ,Alert } from 'react-bootstrap'


function Dashboard() {
const [error, setError] = useState("")
    function handlelogout() {

    }

    return (
        <div>
            <Card>

                <h1>Profile/Dashboard</h1>
                {error && <Alert variant="danger">{error}</Alert>}
            </Card>
            <Button variant="link" onClick={handlelogout}>Log Out</Button>

        </div>
    )
}

export default Dashboard
