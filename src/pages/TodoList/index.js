import React, { Fragment } from 'react';
              // 解构   
import {Form, Input, Button, Card, List, Typography} from 'antd' 
import { CSSTransition } from 'react-transition-group'
import Clock from '../Clock'
import AutoSave from '../Autosave'
import BoiledWater from '../BoiledWater'
import WelcomeDialog from '../Inherit'
import './todolist.less';   // 引入less文件

class TodoList extends React.Component{
    state={
        item:['自由','自律']
    }
    renderForm=()=>{
        const { getFieldDecorator }=this.props.form
        return(
            <Fragment>
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
            <Clock />
            </Fragment>

        )
    }
    renderTodoItem=()=>{
        const { item }=this.state
        // const r = Math.round(Math.random()*255);
        // const g = Math.round(Math.random()*255);
        // const b = Math.round(Math.random()*255);
        // const a = ( (Math.random()*5 + 5) / 10 ).toFixed(2)
        // const color = `rgba(${r},${g},${b},${a})`
        
        return(
                <List
                    bordered
                    dataSource={item}
                    renderItem={(item, index) => (
                        <CSSTransition
                            in={true}
                            // 第一次展示时也有动画效果
                            appear={true}
                            // 动画要执行多久
                            timeout={300}
                            classNames='fade'
                            //in=false时  该DOM节点被移除
                            // unmountOnExit
                            // 钩子函数
                            onEntered={(e)=>{
                                switch(index % 3){
                                    case 0:
                                        e.style.color='#1DA57A'
                                        break;
                                    case 1:
                                        e.style.color='rgb(230, 139, 22)'
                                        break;
                                    case 2:
                                        e.style.color='#d80919'
                                        break;

                                }
                            }}
                        >
                            <List.Item>
                                <Typography.Text mark>[今日待办]</Typography.Text> {item}
                            </List.Item>
                         </CSSTransition>
                    )}
                />
           
        )
    }

    render(){
        return(
            <Card
                title={this.renderForm()}
            >
                {this.renderTodoItem()}
                {/* <AutoSave /> */}
                <BoiledWater />
                <WelcomeDialog />

            </Card>
            
            

        )
    }

}

const TodoListI= Form.create()(TodoList)

export default TodoListI