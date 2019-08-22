import React from 'react'
import { Button } from 'antd';

// // 通过props 传  
// class ThemeButton extends React.Component{
//     render(){
//         return <Button theme={this.props.them} />
//     }
// }

// function Toolbar(props){
//     return(
//         <div>
//             <ThemeButton theme={props.theme} />

//         </div>
//     )
// }

// class App extends React.Component{
//     render(){
//         return <Toolbar theme='dark'/>
//     }
// }


const ThemeContext = React.createContext('light');

class ThemeButton extends React.Component{

    // 指定 contextType 读取当前的 ThemeContext。
    // React 会往上找到最近的 ThemeContext Provider，然后使用它的值。
    static contextType=ThemeContext

    render(){
        return <Button theme={this.context} />
    }
}

function Toolbar(props){
    return(
        <div>
            <ThemeButton />
        </div>
    )
}

class App extends React.Component{
    render(){
        return (
        <ThemeContext.Provider value='dark'>
            <Toolbar />
        </ThemeContext.Provider>
        )
    }
}



