import {IPT_CHANGE,ADD_ITEM,DEL_ITEM} from "./action"


// 初始值
const initState={
    disabled:true,
    iptValue:'',
    list:[
        {item:'自律',time:"1994年1月1日"},
        {item:'自由',time:"1994年1月1日"}
    ]
}



export default (preveState=initState,action)=>{
    // 这样写是一个浅拷贝   会出错
    // const  newState=preveState
    const newState=JSON.parse(JSON.stringify(preveState))

    if (action.type===IPT_CHANGE) {
        newState.iptValue=action.value
        console.log(newState);
        
        if(newState.iptValue!==''){
            newState.disabled=false
        }else{
            newState.disabled=true
        }
        return newState   
    } else if(action.type===ADD_ITEM){
        const newItem={item:newState.iptValue,time:action.time}
        newState.list.push(newItem)
        newState.iptValue=''
        newState.disabled=true
        return newState          
    }else if(action.type===DEL_ITEM){
        if(window.confirm("是否删除该备忘")){
            newState.list.splice(action.index,1)
        }
        return newState
    }else{
        return newState
    }
    
}