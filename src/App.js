/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native'
import {
  SafeAreaView,
  StatusBar,
  useColorScheme
} from 'react-native'

import {
  Colors
} from 'react-native/Libraries/NewAppScreen'
import MainNavigator from './navigation/Navigator'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={[{ height: '100%' }, backgroundStyle]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <MainNavigator />
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App
