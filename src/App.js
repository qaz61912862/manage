import React from 'react';
import Home from './page/Home';
import Layout from './component/layout';
import { BrowserRouter, Redirect, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/product" exact component={Home}/>
            <Route path="/product-category" exact component={Home}/>
          </Switch>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
