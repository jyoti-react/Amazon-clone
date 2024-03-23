import {ADD_PRODUCT,DELETE_PRODUCT} from '../Actions/Actiontypes'

export const addtocart=(items)=>({
    type:ADD_PRODUCT,
    payload:items
})