import {GET_ALL_USERS,GET_ALL_ARTICLES} from "./types"

export const getAllUsers=(payload)=>({
    type:GET_ALL_USERS,
    payload
})

export const getAllArticles=(payload)=>({
    type:GET_ALL_ARTICLES,
    payload
})
