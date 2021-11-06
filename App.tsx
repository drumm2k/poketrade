import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { HomeScreen, Login, TradeScreen } from './screens'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from './graphql/apollo'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Tab = createBottomTabNavigator()

export default function App() {
  const [authed, setAuthed] = useState<boolean>(false)

  const checkAuth = async () => {
    // await AsyncStorage.setItem('token', '')
    const token = await AsyncStorage.getItem('token')
    if (token) setAuthed(true)
  }

  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <ApolloProvider client={apolloClient}>
      {authed && (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName

                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline'
                } else if (route.name === 'Trade') {
                  iconName = focused ? 'file-tray' : 'file-tray-outline'
                }

                // @ts-expect-error
                return <Ionicons name={iconName} size={size} color={color} />
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray'
            })}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Home'
              }}
            />
            <Tab.Screen name="Trade" component={TradeScreen} />
          </Tab.Navigator>
          <ExpoStatusBar style="auto" />
        </NavigationContainer>
      )}
      {!authed && <Login setAuthed={setAuthed} />}
    </ApolloProvider>
  )
}
