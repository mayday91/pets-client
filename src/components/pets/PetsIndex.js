import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/card'
import { Link } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen'
import { getAllPets } from '../../api/pets'
import { messages } from '../shared/AutoDismissAlert/messages'


//style for our card container
const cardContainerStyle = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  padding: '10px'
}

// pets index should make a request to the API to get all pets and then display them 
const PetsIndex = (props) => {
  const [pets, setPets] = useState(null)
  const [error, setError] = useState(false)

  const { msgAlert } = props
useEffect(() => {
  getAllPets()
    .then(res => setPets(res.data.pets))
    .catch(err => {msgAlert ({
      heading: 'error getting pets',
      message: messages.getPetsFailure,
      variant: 'danger',
    })
    setError(true)
  })
}, [])

  // if pets havent been loaded yet, show loading message
  if (!pets) {
    return <LoadingScreen />
  } else if (pets.length === 0) {
    return <p>No pets yet.</p>
  }

  const petCards = pets.map(pet => (
      <Card style={{ width: '30%', margin: '10px'}} key={ pet.id }>
        <Card.Header>{pet.fullTitle}</Card.Header>
        <Card.Body>
          <Card.Text>
            <Link to={`/pets/${pet.id}`}>View {pet.name}</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    ))
  return (
      <div style={ cardContainerStyle }>
        { petCards }
      </div>
    )
}

export default PetsIndex 