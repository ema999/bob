import React, { Component } from 'react';
import MainContent from './../features/MainContent/MainContent';
import UsersContent from './../features/UsersContent/UsersContent';
import Header from './../features/Header/Header';

class Users extends Component {
  render() {
    return (
      <div className="Users">
        <Header></Header>
        <MainContent>
          <UsersContent />
        </MainContent>
      </div>
    );
  }
}

export default Users
