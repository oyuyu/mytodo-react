//创建store   相当于中心管理员    
// 1.唯一的
// 2.只有store能改变自己的内容   reducer把生成的newstate返回给store  store对自己的数据进行更新
import {applyMiddleware,createStore,compose} from 'redux'

// 引入redux-thunk中间件
import thunk from 'redux-thunk'

//把reducer(笔记本)引入到store
import reducer from './reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer=composeEnhancers(applyMiddleware(thunk))

// 创建store/创建数据的公共存储仓库  并把reducer作为第一个参数传给store   
// 创建管理员时把小本子给他
// 使用REDUX_DEVTOOLS（redux开发者模式）中间件的代码
const store= createStore(
  // 创建store时使用reducer构建初始数据
  reducer, 
  enhancer
);
export default store;
