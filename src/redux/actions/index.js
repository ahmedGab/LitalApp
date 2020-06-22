<<<<<<< HEAD
import {GET_ALL_USERS,GET_ALL_ARTICLES} from "./types"

=======
import {GET_ALL_USERS,GET_NUMBER_USERS} from "./types"
>>>>>>> ef48c334ef85cb0b2274d910cf24d643bea27ef0
export const getAllUsers=(payload)=>({
    type:GET_ALL_USERS,
    payload
})
<<<<<<< HEAD

export const getAllArticles=(payload)=>({
    type:GET_ALL_ARTICLES,
    payload
})
=======
export const NumberUsers=(payload)=>({
    type:GET_NUMBER_USERS,
    payload
})


>>>>>>> ef48c334ef85cb0b2274d910cf24d643bea27ef0
