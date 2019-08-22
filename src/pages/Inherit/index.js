import React from 'react';
import {Input, Button} from 'antd'

const {TextArea}=Input

function  FancyBorder (props) {
    return(
        <div className={props.color}>
            {/* 父组件FancyBorder标签中的所有内容会作为children传给子组件 */}
            {props.children}
        </div>
    )
}

function Dialog(props){
    return(
        <FancyBorder>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
            {props.children}
        </FancyBorder>
    )
}

class WelcomeDialog extends React.Component{
    state={
        input: ''
    }
    handleChange=(e)=>{
        console.log(e.target.value);
        
        this.setState({input: e.target.value})
    }
    render(){
        return(
            <Dialog title='请打开对话框' message='好好学习，天天向上'>
                <Input  onChange={this.handleChange} />
                <TextArea value={this.state.input} />
                <Button> sign In </Button>
            </Dialog>
        )

    }
   
}

export default WelcomeDialog