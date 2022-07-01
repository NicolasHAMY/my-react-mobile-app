import { Image, ScrollView, useColorScheme, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

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
          // style={styles.image}
          source={require('../images/osatopia.jpg')}
          resizeMode='cover'
        />
      </View>

    </ScrollView>
  )
}

export default HomeScreen
