import { View, Text } from 'react-native'
import styles from './style/PetDetailsStyle'

function PetDetails ({ pet }) {
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.description}>{pet.description}</Text>
      </View>
    </View>

  )
}

export default PetDetails
