import React,{Component,Fragment} from 'react'
import {Input,Button,List} from 'antd'
import 'antd/dist/antd.css'; 
// react-redux在组件内部用于获取 store数据的API
import {connect} from 'react-redux'

import {getIptChangeAction,getAddItemAction,getDelItemAction} from "../store/actionCreater"

class Todolist extends Component{
    
    // constructor(props){
    //     super(props)
    //     // 获取store的数据
    //     // this.state=store.getState()
    //     this.iptChange=this.iptChange.bind(this)
    // }
    render(){
        const {disabled,iptValue,list,iptChange,addItem,delItem}=this.props
        return (
        <Fragment>
            <Input
                style={{width:'50%'}}
                value={iptValue}
                onChange={iptChange}
            />
            <Button type='primary' disabled={disabled}
             onClick={addItem}
            >
             提交
            </Button>
            <List
                style={{width:'50%'}}
                bordered
                dataSource={list}
                renderItem={(itemObj,index)=>(<List.Item style={{display:'absolute'}} onClick={()=>delItem(index)}>
                        {itemObj.item}
                        <span style={{display:'reletive',float:'right'}}>{itemObj.time}</span>
                    </List.Item>)}
            >
            </List>
        </Fragment>
        )
    }
   
}
// export default Todolist;


//把store中的数据映射给组件 变成组件的Props
const mapStateProps=(state)=>{
    return {
        disabled:state.disabled,
        // store中的iptValue映射到组件中props的iptValue
        iptValue:state.iptValue,
        list:state.list
    }
}
// 使props里的方法能够调用dispatch 派发action 操作store中的数据
// 把store的dispatch方法挂载到props上
// 通过修改组件的Props内容 修改store中的数据      dispatch---store.dispatch
const mapDispathToProps=(dispatch)=>{
    return {
        iptChange(e){
            const ipt=e.target.value
            const action=getIptChangeAction(ipt)
            dispatch(action)
        },
        addItem(){
            const date=new Date()
            let year=date.getFullYear()
            let month=date.getMonth()+1
            if(month<10){
                month='0'+month
            }
            const day=date.getDate()
            if(day<10){
                day='0'+day
            }
            let hour=date.getHours()
            if(hour<10){
                hour='0'+hour
            }
            let minute=date.getMinutes()
            if(minute<10){
                minute='0'+minute
            }
            let second=date.getSeconds()
            if(second<10){
                second='0'+second
            }
            let time=`${year}-${month}-${day}  ${hour}:${minute}:${second}`
            let action=getAddItemAction(time)
            dispatch(action)
        },
        delItem(index){
            const action=getDelItemAction(index)
            dispatch(action)
        }

    }

}

// 导出connect方法 并把组件传给connect方法
// 把TodoList与store做关联    store中的数据通过mapStateProps映射给组件的props
export default connect(mapStateProps,mapDispathToProps)(Todolist);