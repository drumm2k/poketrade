import { useMutation } from '@apollo/client'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { Button, StyleSheet, Text, View, TextInput } from 'react-native'
import { LOGIN } from '../../graphql/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({
  setAuthed
}: {
  setAuthed: Dispatch<SetStateAction<boolean>>
}) => {
  const [email, onChangeEmail] = useState<string>('')
  const [password, onChangePassword] = useState<string>('')

  const setAuth = async (data: any) => {
    const { accessToken, user } = data
    await AsyncStorage.setItem('token', accessToken)
  }

  const [login, { loading, error }] = useMutation(LOGIN, {
    onCompleted(data) {
      setAuth(data.login)
      setAuthed(true)
    }
  })

  return (
    <View style={styles.container}>
      <Text>Login screen</Text>
      <TextInput
        style={styles.input}
        placeholder="email"
        value={email}
        onChangeText={onChangeEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        value={password}
        onChangeText={onChangePassword}
        autoCapitalize="none"
        secureTextEntry
      />
      {error && <Text style={styles.error}>{error.message}</Text>}
      <Button
        title="Sign in"
        onPress={() => {
          login({
            variables: {
              email: email,
              password: password
            }
          })
        }}
        disabled={loading}
      />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    padding: 10,
    marginTop: 10,
    borderColor: 'grey',
    borderWidth: 1,
    width: 200
  },
  error: {
    color: 'red',
    marginTop: 10,
    marginBottom: 10
  }
})
