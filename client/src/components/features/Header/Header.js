import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <h1>BOB CODING CHALLENGE</h1>
          <Link to="/users/new">
            <Button variant="contained" >New</Button>
          </Link>
      </div>
    );
  }

}

export default Header;
