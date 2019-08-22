import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Icon, Button } from 'antd';
import BoildWater from './pages/BoiledWater/'
import Todolist from './pages/TodoList/'

function AppRouter() {
  return (
    <Router>
      <div>
         
        <nav>
            <div>
                <Button type='danger'><Link to="/">温度</Link></Button>
                <Button type='danger'><Link to="/todo">待办</Link></Button>
            </div>
        </nav>

        <Route path="/" exact component={BoildWater} />
        <Route path="/todo" exact component={Todolist} />
      </div>
    </Router>
  );
}

export default AppRouter;