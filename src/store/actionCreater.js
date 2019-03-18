import {IPT_CHANGE,ADD_ITEM,DEL_ITEM} from "./action"

export const getIptChangeAction=(value)=>({
    type:IPT_CHANGE,
    value
})
export const getAddItemAction=(value)=>({
    type:ADD_ITEM,
    value
})
export const getDelItemAction=(index)=>({
    type:DEL_ITEM,
    index
})