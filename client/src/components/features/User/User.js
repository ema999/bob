import React, { Component } from 'react';
import './User.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class User extends Component {

  render() {

    return (
      <div className="User">
        <Card>
          <CardContent>
            {this.props.name}<br></br>
            Bags: {this.props.bags || 0}
          </CardContent>
        </Card>
      </div>
    );
  }

}

export default User;
