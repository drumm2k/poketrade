import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList, Button } from 'react-native'

import { Card } from '../../components'
import { GET_POKEMONS } from '../../graphql/pokemons'

const data: any[] = []

for (let i = 1; i < 100; i++) {
  data.push({
    id: i,
    name: `name ${i}`,
    gen: '1 gen',
    types: ['water'],
    img: `https://pokego.ru/img/pokemon/${i}.png`
  })
}

const Trade = () => {
  const [gen, setGen] = useState<number>(1)
  const { data, loading, error } = useQuery(GET_POKEMONS, {
    variables: { gen: gen }
  })

  const renderItem = ({ item }: { item: any }) => (
    <Card
      pokedex={item.pokedex}
      gen={item.gen}
      types={[item.type1, item.type2]}
      name={item.name}
      img={`https://pokego.ru/img/pokemon/${item.pokedex}.png`}
      onPress={() => alert(item.pokedex)}
    />
  )

  return (
    <View style={styles.container}>
      <View style={styles.filters}>
        <Text>Filters</Text>
        <Button title="1" onPress={() => setGen(1)} />
        <Button title="2" onPress={() => setGen(2)} />
      </View>
      {data?.getPokemons && (
        <FlatList
          style={styles.cardWrapper}
          data={data?.getPokemons}
          keyExtractor={(item) => item.pokedex}
          numColumns={4}
          initialNumToRender={24}
          maxToRenderPerBatch={24}
          renderItem={renderItem}
        />
      )}
    </View>
  )
}

export default Trade

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardWrapper: {
    paddingLeft: 10,
    paddingRight: 10
  },
  filters: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row'
  }
})
