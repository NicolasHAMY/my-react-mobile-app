import { ImageBackground, Text, View } from 'react-native'
import styles from './style/HeaderPetStyle'

function HeaderPet ({ pet }) {
  return (
    <View>
      <ImageBackground
        source={{ uri: pet.imgUrl }}
        style={styles.headerImage}
        resizeMode='cover'
      >
        <View style={styles.backdrop}>
          <Text style={styles.title}>{pet.name}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default HeaderPet
