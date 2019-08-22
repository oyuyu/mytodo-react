import React from 'react';
import { Input } from 'antd';
import styles from './index.less'

function IsBoiled(props){
    if (props.celsius>=100) {
        return <spn style={{color: 'red'}}> 沸腾</spn>
    } else {
        return <spn style={{color: 'blue'}}> 未沸腾</spn>
    }
}

//华氏度、摄氏度转换函数
function toCelsius(f){
    return (f-32)*5/9
}

function toFahren(c){
    return (c*9/5)+32
}

//输入无效值时的处理函数
function invaild( temp, convert){
    const input =parseFloat(temp)
    if (Number.isNaN(input)) {
        return ''
    }
    const output = convert(input)
    const rounded = Math.round(output*1000)/1000
    return rounded.toString()
}

const scaleNames={
    c: '℃',
    f: '℉'
}

class TempInput extends React.Component{
    // state={
    //     temperature: ''
    // }
    handleChange=(e)=>{
        console.log(e.target.value);
        
        this.props.onTempChange(e.target.value)
    }
    render(){
        const {scaleName, temperature}=this.props
        return(
            <fieldset>
                <span>请输入温度</span>
                <Input
                value={ temperature }
                style={{ width: 100, margin: 10 }}
                onChange={ this.handleChange }
                />
                <span>{scaleNames[scaleName]}</span>

                {/* <IsBoiled celsius = { parseFloat( temperature )} /> */}
            </fieldset>
        )
    }

}

export default class BoiledWater extends React.Component{
    state={
        scaleName: 'c',
        temperature: ''
    }
    onTempChange=(type,temperature)=>{
        this.setState({
            scaleName: type,
            temperature

        })
        console.log( type,temperature );
        
    }
    render(){
        const {scaleName, temperature}=this.state
        const tempC = scaleName==='c' ? temperature : invaild( temperature, toCelsius  )
        const tempF = scaleName==='f' ? temperature : invaild( temperature, toFahren )
        
        return(
            <div>
                {/* onTempChange 自动接收子组件onTempChange传来的值 temp */}
                <TempInput  scaleName='c' temperature={tempC} onTempChange={(temp)=>this.onTempChange('c',temp)}/>
                
                <TempInput  scaleName='f' temperature={tempF} onTempChange={(temp)=>this.onTempChange('f',temp)}/>
                <div className={styles.boder} >hahaha</div>
            </div>
        )
    }

}

