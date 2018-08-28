import React, { Component } from 'react';
import './UsersContent.css';
import UserListContainer from '../../containers/UserListContainer';

class UsersContent extends Component {
  render() {
    return (
      <div className="UsersContent">
        <UserListContainer/>
      </div>
    );
  }
}

export default UsersContent;
