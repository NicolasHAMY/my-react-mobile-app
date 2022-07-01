import { Image, Text, useWindowDimensions, View } from 'react-native'
import styles from './style/StatStyle'

const ItemSeparator = () => {
  return (
    <View style={
      {
        height: '100%',
        width: 5
      }
  }
    />
  )
}

function StatsListItem ({ pet }) {
  const SCREEN_WIDTH = useWindowDimensions().width

  return (
    <View style={{
      width: SCREEN_WIDTH,
      height: 'auto',
      flexDirection: 'row'
    }}
    >
      <ItemSeparator />
      <View style={styles.dishesCard}>
        {pet.imgUrl &&
          <Image
            style={styles.image}
            source={{ uri: pet.imgUrl }}
            resizeMode='cover'
          />}
        <View style={styles.cardFooter}>
          <Text style={styles.cardTitle}>
            {pet.name}
          </Text>
          <Text style={styles.description}>
            {pet.description}
          </Text>
        </View>
      </View>
      <ItemSeparator />
    </View>
  )
}

export default StatsListItem
