import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      accessToken
      user {
        id
        userName
        email
        roles
        trainer {
          team
          level
          code
        }
      }
    }
  }
`
