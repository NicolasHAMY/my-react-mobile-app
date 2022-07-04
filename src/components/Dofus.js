import { Button, Image, Text, View } from 'react-native'
import { actionTypes, DofusProvider, useDofus } from '../contexts/DofusContext'
import Images from '../images/Images'
import styles from '../style/DofusStyle'
import Pinchable from 'react-native-pinchable'

const getSourceImg = (dofus) => {
  switch (dofus) {
    case 'Ebene':
      return Images.dofusEbene
    case 'Ivoire':
      return Images.dofusIvoire
    case 'Ocre':
      return Images.dofusOcre
    case 'Pourpre':
      return Images.dofusPourpre
    case 'Turquoise':
      return Images.dofusTurquoise
    case 'Vulbis':
      return Images.dofusVulbis
    default:
      return Images.dofusOcre
  }
}

const DofusValue = () => {
  const { state: { dofus } } = useDofus()
  const sourceImg = getSourceImg(dofus)

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Ton dofus préféré est donc le Dofus {dofus} !</Text>
      <Pinchable>
        <Image
          style={styles.dofus}
          source={sourceImg}
          resizeMode='cover'
        />
      </Pinchable>
    </View>
  )
}

const DofusActions = () => {
  const { dispatch } = useDofus()

  const swapDofus = () => {
    dispatch({
      type: actionTypes.SWAPDOFUS
    })
  }

  return (
    <View>
      <Button style={styles.btn} title='Change de dofus jeune aventurier' onPress={swapDofus} />
    </View>
  )
}

const Dofus = () => {
  return (
    <DofusProvider>
      <View>
        <DofusValue />
        <DofusActions />
      </View>
    </DofusProvider>
  )
}

export default Dofus
