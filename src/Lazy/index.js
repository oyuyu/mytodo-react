import React ,{Component,Suspense, lazy} from 'react';

// 组件渲染时会自动导入 TodoItem 组件的包    下面代码等价
// const  TodoItem=React.Lazy(()=>import('../TodoList/TodoItem'))
const  TodoItem=lazy(()=>import('../TodoList/TodoItem'))


// 如果在 MyComponent 渲染完成后，包含 OtherComponent 的模块还没有被加载完成，可以使用加载指示器为组件做优雅降级。这里我们使用 Suspense 组件来解决
function MyComponent(){
    return(
        <div>
            {/* fallback 属性接受任何在组件加载过程中你想展示的 React 元素。可以将 Suspense 组件置于懒加载组件之上的任何位置。可以用一个 Suspense 组件包裹多个懒加载组件。 */}
            <Suspense fallback={<div>Loading...</div>}>
                <TodoItem />

            </Suspense>
            
        </div>
    )
}