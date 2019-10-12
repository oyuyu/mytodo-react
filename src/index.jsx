import { observable, action, computed } from 'mobx';
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Card, Input, Button, List, Row, Col, Icon } from 'antd';
import PropTypes from 'prop-types';
import { observer, PropTypes as ObservablePropTypes } from 'mobx-react'
import './index.css'


//定义一个描述todoList的类
class Todo {
    id = Math.random()//作为主键 应为只读属性，不用observable装饰
    @observable title = ''
    @observable isFinished = false

    constructor(title){
        this.title= title        
    }

    @action.bound toggleFinished(){
        this.isFinished = !this.isFinished
    }
}

class Store{
    @observable todo=[new Todo('自律'), new Todo('自由')]

    // @observable list={
    //     todo:['自律', '自由'],
    //     // hasDone:[]
    // }
    @action.bound add(todoItem){
        console.log(todoItem);
        // this.list.todo.unshift(todoItem)
        this.todo.unshift(new Todo(todoItem))
    }
    @action.bound delete(todoItem){
        console.log(this.todo);
        
        this.todo.remove(todoItem)

    }
    


    @computed get todoCount(){
        return this.todo.filter(item => !item.isFinished).length
    }

}
const store = new Store()

@observer
class TodoList extends Component{
    static protoTypes = {
        store: PropTypes.shape({
            todo: ObservablePropTypes.observableArrayOf(ObservablePropTypes.observableObject).isRequired,
            add: PropTypes.function,
            delete: PropTypes.function,
            todoCount: PropTypes.function
        }).isRequired
    } 
    state={
        todoItem: ''
    }

    handleChange = (e) => {
        const value = e.target.value
        this.setState({
            todoItem: value
        })
    }

    handleClick = () => {
        const { todoItem } =this.state
        if (!todoItem) return
        this.props.store.add(todoItem)
        this.setState({
            todoItem: ''
        })
    }

    handleEdit = () => {}

    handleDelet = () => {

    }
    
    checkedState = (item) => {
        item.toggleFinished()
    }

    renderForm = ()=>{
        return(
            <div>
                {/* 注意点击清空输入框内容   将数据同步到输入框 */}
                <Input style={{width:200}} onChange={this.handleChange} value={this.state.todoItem}/>
                <Button type='primary' onClick={this.handleClick}>添加代办</Button>
            </div>
        )
    }

    renderList =() =>{
        const todoList = this.props.store.todo
        console.log(todoList);
        
        return(
            <List
                bordered
                header = '代办事项'
                size = 'small'
                dataSource = { todoList }
                renderItem = { item => (
                    <List.Item
                    actions={[<Icon type="edit" theme="twoTone" onClick={this.handleEdit}/>, <Icon type="delete" theme="twoTone" onClick={()=>this.props.store.delete(item)} />]}
                    className={item.isFinished&&"finished"}
                    >
                        <input type = 'checkbox' checked = {item.isFinished} onClick = {()=>this.checkedState(item)}/>
                        {item.title}
                    </List.Item>
                )}
            />
        )
    }

    render(){
        return(
            <Card
              className = 'wrap'
              title={this.renderForm()}
            >
                {this.renderList()}
                <footer className='footer'>{this.props.store.todoCount}条待办事项</footer>

            </Card>
        )
    }
}


class App extends Component{
    render(){
        return(
            <Fragment>
                <TodoList store = {store} />
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"))