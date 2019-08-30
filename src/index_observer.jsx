import { observable, action } from 'mobx';
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import PropTypes from 'prop-types';
// 提供对可观察数据类型的校验   避免重名，起个别名
import { observer, PropTypes as ObservablePropTypes } from 'mobx-react'
// observer 不是修饰类成员的，而是修饰类本身的
// 声明普通的类  存储数据
class Store{
    @observable cache = {
        queue:[],
        count: 0
    }
    // 建议把对可观察数据的修改都封装在action中
    @action.bound refresh(){
        const count=this.cache.count
        this.cache.count=count + 1
        this.cache.queue.push(1)

    }
}


const store = new Store()
//组件    Mobx能精确知道autorun依赖哪些可观察数据  然后按需触发
@observer
 class Bar extends Component{
     // 编写组件的时候声明属性的类型  开发环境下会对不符类型的输入属性进行报错
     static protoTypes={
        //  queue: PropTypes.array    //可观察数组并不是真正的js数组
         queue: ObservablePropTypes.observableArray,
        //  count: ObservablePropTypes.observableNumber
         
     }
    //  mobx-react可以将react的render方法包装成autorun   action会自动触发组件的重渲染
     render(){
         const queue=this.props.queue
         const count=this.props.count
         return(
             <span>{count}</span>
         )
     }
 }
@observer
 class Foo extends Component{
     static protoTypes={
         cache: ObservablePropTypes.observableObject
     }
     shouldComponentUpdate(){}

     render (){
         const cache = this.props.cache
         return(
             <div>
                 <Button type='primary' onClick={this.props.refresh}>点击</Button>
                 <Bar queue = {cache.queue} count={cache.count}></Bar>
             </div>
         )
     }
 }

//  将组件挂载到页面  1.要挂载的组件    2.挂载点
ReactDOM.render(<Foo cache={store.cache} refresh={store.refresh}></Foo>,document.querySelector("#root"))




