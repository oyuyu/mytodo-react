//统一创建action
import axios from 'axios';
import {INIT_LIST,CHANGE_IPTVAL,ADDITEM, DELITEM} from './actionType'


// thunk中间件  action返回异步函数 
export const getInitAsynicAction=()=>{
    return ((dispatch)=>{
        axios.get('/todolist').then((res)=>{   
            const data=res.data
            const action=getInitItemAction(data)
            dispatch(action)
        }).catch(()=>{
            console.log('error')
        })
    })
}



// 一般情况下action是一个对象    用于描述组件想要执行的操作
export const getInitItemAction=(data)=>({
    type:INIT_LIST,
    // 等价于：value:value
    data
})

export const getIptValCAction=(value)=>({
    type:CHANGE_IPTVAL,
    value
})
export const getAddItemAction=(color)=>({
        type:ADDITEM,
        color
})
export const getDelItemAction=(value)=>({
    type:DELITEM,
    // 等价于：value:value
    value
})


