import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Users from './Users';
import UsersAdd from './UsersAdd';

class Index extends Component {

  render() {
    return (
      <div className="Dashboard">
        <Switch>
          <Route exact path='/' render={(props) => (<Users/>)}/>
          <Route exact path='/users' render={(props) => (<Users/>)}/>
          <Route exact path='/users/new' render={(props) => (<UsersAdd/>)}/>
        </Switch>
      </div>
    );
  }
}

export default Index;
