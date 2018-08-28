import React, { Component } from 'react';
import MainContent from './../features/MainContent/MainContent';
import UserFormContainer from './../containers/UserFormContainer';
import { Link } from 'react-router-dom'
import IconBack from 'material-ui/svg-icons/navigation/arrow-back';

class UsersAdd extends Component {
  render() {
    return (
      <div className="UsersAdd">
        <Link to="/users">
            <IconBack></IconBack>
        </Link>
        <MainContent>
          <UserFormContainer />
        </MainContent>
      </div>
    );
  }
}

export default UsersAdd
