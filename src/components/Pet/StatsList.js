import { FlatList, Text, View } from 'react-native'
import StatsListItem from './StatsListItem'
import styles from './style/StatStyle'

function StatsList ({ stats }) {
  const renderItem = ({ item }) => (
    <StatsListItem stat={item} />
  )

  const detailsStat = (stat) => {
    let statName
    let statMin
    let statMax
    for (const [key, value] of Object.entries(stat)) {
      statName = key
      statMin = value.min
      statMax = value.max
    }

    return {
      name: statName,
      stat: {
        min: statMin,
        max: statMax
      }
    }
  }

  return (
    <>
      {stats === undefined || stats.length === 0
        ? <Text style={styles.subTitle}>Ce familier ne possède pas de statistiques</Text>
        : <View>
          <View style={styles.card}>
            <Text style={styles.title}>Statistique</Text>
            {stats.map((s, i) => (
              <View key={i}>
                <Text style={styles.subTitle}>{detailsStat(s).name}</Text>
                <Text style={styles.description}>Minimum : {detailsStat(s).stat.min}</Text>
                <Text style={styles.description}>Maximum : {detailsStat(s).stat.max}</Text>
                <FlatList
                  horizontal
                  pagingEnabled
                  legacyImplementation={false}
                  data={stats.filter(d => d.category === s)}
                  renderItem={renderItem}
                />
              </View>
            ))}
          </View>
          </View>}
    </>
  )
}

export default StatsList
