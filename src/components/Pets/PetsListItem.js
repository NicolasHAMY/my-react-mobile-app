import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './style/PetsListItemStyle'

function PetsListItem ({ pet }) {
  const navigation = useNavigation()

  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate('PetDetails', { id: pet._id })}
      >

        <View style={styles.cardFooter}>
          <Text style={styles.cardTitle}>
            {pet.name}
          </Text>
          <Image
            style={styles.image}
            source={{ uri: pet?.imgUrl }}
            resizeMode='cover'
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default PetsListItem
