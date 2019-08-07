import React from 'react'


// 处理错误边界组件
class ErrorBoundary extends React.Component{
    constructor (props){
        super(props)
        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError(error){
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return {hasError :true}
    }
    componentDidCatch(error,info){
        // 将错误日志上报给服务器
        logErrorToMyService(error,info)
    }
    render(){
        const {hasError} = this.state
        if (hasError) {
            return <h3>  渲染出错 </h3>
            
        }
        return this.props.children
    }
}



// 将它作为一个常规组件去使用，工作方式类似于 JavaScript 的 catch {}
{/* 
    <ErrorBoundary>
        <MyWidget />
    </ErrorBoundary> 
*/}
