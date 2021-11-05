import React, { FC } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export interface PokeCardType {
  pokedex: number
  name: string
  types: string[]
  gen?: string
  img: string
  onPress: () => void
}

const PokeCard: FC<PokeCardType> = ({
  pokedex,
  name,
  types,
  gen,
  img,
  onPress
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.card}>
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
          <ImageBackground
            style={styles.image}
            source={{ uri: img }}
            resizeMode="cover"
          >
            {/* <CardImg imgUrl={img && img}> */}
            {pokedex && <Text style={styles.topText}>#{pokedex}</Text>}
            {gen && <Text style={styles.topText}>{gen}</Text>}
            {/* </CardImg> */}
          </ImageBackground>
        </LinearGradient>

        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    maxWidth: 84,
    overflow: 'hidden',
    fontSize: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'solid 1px hsla(0, 0%, 0%, 0.12)',
    marginTop: 3,
    marginBottom: 3,
    marginLeft: 1,
    marginRight: 1
  },
  topText: {
    fontSize: 12,
    color: '#fff'
  },
  image: {
    minWidth: 82,
    minHeight: 82,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
    color: '#fff'
    // letterSpacing: "1px",
  },
  name: {
    fontSize: 14,
    textAlign: 'center',
    textTransform: 'capitalize',
    paddingLeft: 5,
    paddingRight: 5
  }
})

export default PokeCard
