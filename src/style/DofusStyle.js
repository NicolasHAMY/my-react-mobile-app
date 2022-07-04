import { StyleSheet } from 'react-native'
import texts from './Texts'

export default StyleSheet.create({
  ...texts,
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    ...texts.cardTitle,
    textAlign: 'center',
    padding: 10
  },
  dofus: {
    width: 225,
    height: 225
  },
  btn: {
    padding: 10,
    marginTop: 10
  }
})
