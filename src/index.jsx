import { observable, action } from 'mobx';
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import PropTypes from 'prop-types';

// 声明普通的类  存储数据
class Store{
    cache = {queue:[]}
}


const store = new Store()
//组件
 class Bar extends Component{
     // 编写组件的时候声明属性的类型  开发环境下会对不符类型的输入属性进行报错
     static protoTypes={
         queue: PropTypes.array
     }
     render(){
         const queue=this.props.queue
         return(
             <Button type='primary' >{queue.length}</Button>
         )
     }
 }

 class Foo extends Component{
     static protoTypes={
         cache: PropTypes.object
     }
     render (){
         const cache = this.props.cache
         return(
             <div>
                 <Bar queue = {cache.queue}></Bar>
             </div>
         )
     }
 }

//  将组件挂载到页面  1.要挂载的组件    2.挂载点
ReactDOM.render(<Foo cache={store.cache}></Foo>,document.querySelector("#root"))




