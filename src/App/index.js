import React from 'react';
// 加载TodoList文件
// import TodoList from './TodoList/TodoList';
import  { AutoGetStaff} from '../TodoList/TodoList';

export default class APP extends React.Component {
    render(){
        return(
            <div>
                <AutoGetStaff />
            </div>
        )
    }
}

