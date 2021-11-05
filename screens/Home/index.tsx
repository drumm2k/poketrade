import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Home = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button
        title="Go to Trades"
        onPress={() => navigation.navigate('Trade')}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
