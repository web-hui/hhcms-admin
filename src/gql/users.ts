import { gql } from '@apollo/client'

export const USERS = gql`
  query users {
    users {
      _id
      name
      age
    }
  }
`

export const USER_BY_ID = gql`
  query users($id: ID!) {
    user(id: $id) {
      _id
      name
    }
  }
`

export const CREATE_USER = gql`
  mutation createUser($data: CreateUserInput) {
    createUser(createUserInput: $data) {
      _id
      name
      age
    }
  }
`

export const DELETE_USER = gql`
  mutation deleteUser($id: String!) {
    deleteUser(id: $id) {
      _id
    }
  }
`

export const CHANGE_USER = gql`
  mutation chaneUser($data: CreateUserInput!) {
    changeUser(user: $data) {
      _id
    }
  }
`
