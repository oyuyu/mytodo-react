import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { Suspense, lazy } from 'react';

const Home=lazy( ()=>import('./router/Home') )
const TodoList=lazy( ()=>import('./router/TodoList') )

const App=()=>{
    return(
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/todoList' component={TodoList} />
                </Switch>
            </Suspense>
        </Router>

    )
    
}