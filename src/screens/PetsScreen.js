import { useEffect, useState } from 'react'
import { View } from 'react-native'
import PetsList from '../components/Pets/PetsList'
import { getPets } from '../services/Api'

function PetsScreen () {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await getPets()
      setPets(data)
    }
    getData()
  }, [])

  return (
    <View>
      <PetsList pets={pets} />
    </View>
  )
}

export default PetsScreen
