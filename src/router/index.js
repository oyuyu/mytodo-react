import React from 'react';
import { Router, Route, Link } from 'react-router'

import Todolist from '../pages/TodoList/'
import BoildWater from '../pages/BoiledWater/'

// React.render((
//     <Router>
//         <Route path="/" component={Todolist}>
//             <Route path='boildWater' component={BoildWater}></Route>
//         </Route>
//     </Router>

//     ), document.body
// )


const routers={
    path:'/',
    component: Todolist,
    childRouters:[
        {path:'boildWater', component: BoildWater}
    ]
}

React.render(<Router routers={routers} />, document.body)