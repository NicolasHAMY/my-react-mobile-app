import { FlatList } from 'react-native'
import PetsListItem from './PetsListItem'

function PetsList ({ pets }) {
  const renderItem = ({ item }) => (
    <PetsListItem pet={item} />
  )

  return (
    <FlatList
      data={pets}
      renderItem={renderItem}
      keyExtractor={item => item._id}
    />
  )
}

export default PetsList
