import {GET_ALL_USERS,GET_NUMBER_USERS} from "./types"
export const getAllUsers=(payload)=>({
    type:GET_ALL_USERS,
    payload
})
export const NumberUsers=(payload)=>({
    type:GET_NUMBER_USERS,
    payload
})


