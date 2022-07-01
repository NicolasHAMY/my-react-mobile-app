import { useEffect, useState } from 'react'
import { Text, View, ScrollView } from 'react-native'
import StatsList from '../components/Pet/StatsList'
import HeaderPet from '../components/Pet/HeaderPet'
import PetDetails from '../components/Pet/PetDetails'
import { getPetById } from '../services/Api'

function PetScreen ({ route, navigation }) {
  const [pet, setpet] = useState()
  const { id } = route.params

  useEffect(() => {
    const getData = async () => {
      const data = await getPetById(id)
      setpet(data)
      navigation.setOptions({ title: data.title })
    }
    getData()
  })

  if (!pet) {
    return (
      <View>
        <Text>Chargement...</Text>
      </View>
    )
  }

  return (

    <ScrollView>
      <HeaderPet pet={pet} />
      <PetDetails pet={pet} />
      <StatsList stats={pet.statistics} />
    </ScrollView>
  )
}

export default PetScreen
