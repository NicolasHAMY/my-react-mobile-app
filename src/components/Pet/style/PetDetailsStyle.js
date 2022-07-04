import { StyleSheet } from 'react-native'
import texts from '../../../style/Texts'

export default StyleSheet.create({
  ...texts,
  card: {
    backgroundColor: 'white',
    marginVertical: 5,
    elevation: 3
  },
  description: {
    ...texts.description,
    padding: 10,
    textAlign: 'justify'
  }
})
