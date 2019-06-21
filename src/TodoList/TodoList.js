import React, { Component,Fragment} from 'react';
              // 解构   
import {Form, Input, Button, Card} from 'antd' 
import ToggleUser from "../User/ToggleUser";
import TodoItem from "./TodoItem";
// import axios from 'axios';
import './todolist.css';   // 引入CSS文件

class TodoList extends React.Component{
    state={
        item:['自由']

    }
    renderForm=()=>{
        const { getFieldDecorator }=this.props.form

        return(
            <Form layout='inline'>
                <Form.Item>
                    {getFieldDecorator('todoItem')(
                        <Input 
                            placeholder='请输入代办事项'
                        />
                    )

                }
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" >
                        添加代办
                    </Button>

                </Form.Item>
                <Form.Item></Form.Item>
                
            </Form>

        )
    }

    render(){
        const { item }=this.state
        return(
            <Card>
                {this.renderForm()}
                <TodoItem item={item}/>
            </Card>
            

        )
    }

}

const TodoListI= Form.create()(TodoList)

export default TodoListI