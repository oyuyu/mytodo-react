// 高阶组件

import React from 'react'



const dataSorce=[]

class CommentList extends React.Component{
    state={
        comments: dataSorce.getCommnets()
    }
    componentDidMount(){
        //订阅更改
        dataSorce.addChangeListener(this.hanleChange)
    }

    componentWillUnmount(){
        //清除订阅
        dataSorce.removeChangeListener(this.hanleChange)
    }

    handleChange=()=>{
        //数据源更新时，更新组件状态
        this.setState({
            comments: dataSorce.getCommnets()
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.comments.map((e)=>{
                        <Comment comment={comment} key={comment.id}>
                    })
                }
            </div>
        )
    }
}