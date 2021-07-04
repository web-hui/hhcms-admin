import { client } from '../utils/request'
import { USERS, USER_BY_ID, CREATE_USER, DELETE_USER, CHANGE_USER } from '../gql/users'

export const getUsers = () => {
  return client.query({
    query: USERS,
  })
}

export const getUser = (id: string) => {
  return client.query({
    query: USER_BY_ID,
    variables: {id}
  })
}

export const createUser = (data: any) => {
  return client.mutate({
    mutation: CREATE_USER,
    variables: {data}
  })
}

export const deleteUser = (id: string) => {
  return client.mutate({
    mutation: DELETE_USER,
    variables: {id}
  })
}

export const changeUser = (data: any) => {
  return client.mutate({
    mutation: CHANGE_USER,
    variables: {data}
  })
}
