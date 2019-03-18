import React from 'react';
import ReactDOM from 'react-dom';  //项目运行的核心
import TodoList from './TodoList/TodoList';
import store from './store/main'
import {Provider} from 'react-redux'
 

const App=(
    // Provider作用    provider连接了store provider里面的所有组件 都能获取到store里的内容
    <Provider store={store}>
        <TodoList/>
    </Provider>
)


ReactDOM.render(App, document.getElementById('root'));

