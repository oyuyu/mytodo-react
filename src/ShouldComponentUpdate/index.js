// 避免不必要的元素被渲染    -------purComponent对其进行了封装 √

import React from 'react'

class ButtonC extends React.Component{
    state={
        count:1
    }
    shouldComponentUpdate(nextProps, nextState){
        //浅比较的方式  检查字段  决定是否需要更新组件
        if(this.props.color!== nextProps.color){
            return true   //组件进行更新
        }
        if(this.state.count!==nextState){
            return true   
        }
        return false
    }
    render(){
        return(
            <button
            color={this.props.color}
            onClick={()=>this.setState(state=>({count: state.count+1}))}
            >
                count:{this.state.count}
            </button>
        )
    }
}