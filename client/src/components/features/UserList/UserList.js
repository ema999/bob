import React, { Component } from 'react';
import './UserList.css';
import User from '../User/User';

class UserList extends Component {

  componentDidMount() {
    this.props.onLoad()
  }

  render() {

    let users = this.props.data;

    return (
      <div className="UserList">
        {
          users.map(u => {
            return (<User key={u._id} name={u.name} bags={u.bags}></User>)
          })
        }
      </div>
    );
  }

}

export default UserList;
