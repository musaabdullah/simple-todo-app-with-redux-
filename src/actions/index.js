import { ADD_USER, REMOVE_USER, UPDATE_USER } from './actionsTypes';


export const addUser = (user) => ({
    type: ADD_USER,
    payload: user
})

export const removeUser = (id) => ({
    type: REMOVE_USER,
    payload: {id}
})