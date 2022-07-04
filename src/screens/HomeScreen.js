import { Image, ScrollView, useColorScheme, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Dofus from '../components/Dofus'
import styles from '../style/HomePageStyle'

function HomeScreen () {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior='automatic'
      style={backgroundStyle}
    >
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white
        }}
      >
        <Image
          style={styles.image}
          source={require('../images/eniripsa.png')}
          resizeMode='cover'
        />
      </View>
      <Dofus />

    </ScrollView>
  )
}

export default HomeScreen
