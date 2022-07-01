import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'
import HomeScreen from '../screens/HomeScreen'
import PetsScreen from '../screens/PetsScreen'
import colors from '../style/Colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PetScreen from '../screens/PetScreen'

const TabNavigator = createBottomTabNavigator()

const StackNavigator = createNativeStackNavigator()

const PetNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name='PetsList' component={PetsScreen} />
      <StackNavigator.Screen name='PetDetails' component={PetScreen} />
    </StackNavigator.Navigator>
  )
}

const MainNavigator = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName
          const iconSize = focused ? 30 : 25

          switch (route.name) {
            case ('Home'):
              iconName = 'home'
              break
            case ('Pets'):
              iconName = 'pets'
              break
            default:
              break
          }

          return <Icon name={iconName} size={iconSize} color={colors.primary} />
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text
      })}
    >
      <TabNavigator.Screen name='Home' component={HomeScreen} />
      <TabNavigator.Screen
        name='Pets'
        component={PetNavigator}
        options={{
          headerShown: false
        }}
      />
    </TabNavigator.Navigator>
  )
}

export default MainNavigator
