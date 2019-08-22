import React from 'react';
import {Affix} from 'antd'
import moment from 'moment'

class Clock extends React.Component{
    state={
        date:new Date().toLocaleString()
    }
    componentDidMount(){
        this.startTick=setInterval(this.tick,1000)
    }
    componentWillUnmount(){
        clearInterval(this.startTick)
    }

    tick=()=>{
        this.setState({
            date: moment().format('MMMM Do YYYY, h:mm:ss a')
        })
    }
    
    render (){
        const {date}=this.state
        return(
            <Affix offsetTop={this.state.top}>
                <span>{date}</span>
            </Affix>
        )
    }
}
export default Clock