import { StyleSheet, Text } from 'react-native'
import { Camera, useCameraDevices } from 'react-native-vision-camera'

function CameraScreen () {
  const devices = useCameraDevices()
  const device = devices.back

  if (device == null) return <Text>Votre appareil n'est pas reconnu</Text>
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive
    />
  )
}

export default CameraScreen
