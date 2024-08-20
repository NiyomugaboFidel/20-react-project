import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem, FaHeart } from 'react-icons/fa';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem icon={<FaGem />}>
              Dashboard
              <Link to="/" />
            </MenuItem>
            <SubMenu title="Components" icon={<FaHeart />}>
              <MenuItem>
                Component 1
                <Link to="/component1" />
              </MenuItem>
              <MenuItem>
                Component 2
                <Link to="/component2" />
              </MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>
        <main style={{ padding: '20px', width: '100%' }}>
          <Switch>
            <Route exact path="/">
              <h1>Dashboard</h1>
              <p>This is the dashboard page.</p>
            </Route>
            <Route path="/component1">
              <h1>Component 1</h1>
              <p>This is component 1 page.</p>
            </Route>
            <Route path="/component2">
              <h1>Component 2</h1>
              <p>This is component 2 page.</p>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
