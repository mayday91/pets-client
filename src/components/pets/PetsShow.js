import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import LoadingScreen from '../shared/LoadingScreen'
import { getOnePet } from '../../api/pets'

const ShowPet = (props) => {
  const [pet, setPet] = useState(null)

  const { id } = useParams()
  
  useEffect(() => {
    getOnePet(id)
      .then(res => setPet(res.data.pet))
  }, [])

  if (!pet) {
    return <LoadingScreen />
  }

  return <p>This is the show pet component for { id }</p>
}

export default ShowPet