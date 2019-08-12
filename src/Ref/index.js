import React from 'react'

class TextInput extends React.PureComponent{
    constructor(props){
        super(props)
        // 创建一个ref存储textInput的DOM元素
        this.textInput=React.createRef()
    }
    focusTextInput=()=>{
        // 通过current访问DOM节点
        this.textInput.current.focus()
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.textInput} />
                <input type="button"  value='点击聚焦' onClick={this.focusTextInput} />
            </div>
        )
    }

}

// 为组件添加Ref
export default class AutoFocus extends React.Component{
    constructor(props){
        super(props)
        // 创建一个ref存储textInput的DOM元素
        this.textInput=React.createRef()
    }
    componentDidMount(){
        this.textInput.current.focusTextInput()
    }

    render(){
        return(
            <TextInput ref={this.textInput}/>
        )
    }

}


class CustomText extends React.Component{
    constructor(props){
        super(props)
        this.textInput=null
        this.setInputRef = ele => {
            this.textInput=ele
        }
        this.focusTextInput=() =>{
            if(this.textInput) this.textInput.focus()
        }
    }
    componentDidMount(){
        // 组件挂载后 文本框自动获取焦点
        this.focusTextInput()
    }
    render(){
        return(
        <div>
            <input type='text' ref={this.setInputRef} />
            <input type='button' value='聚焦' onClick={this.focusTextInput} />
            <input />
        </div>)
    }
}

