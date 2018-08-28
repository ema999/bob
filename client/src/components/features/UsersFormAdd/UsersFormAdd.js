import React, { Component } from 'react';
import './UsersFormAdd.css';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import SaveIcon from 'material-ui/svg-icons/content/save';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import FormHelperText from '@material-ui/core/FormHelperText';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import Input from '@material-ui/core/Input';
import BagSelector from '../../features/BagSelector/BagSelector'

class UsersFormAdd extends Component {

  constructor(props){
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.props.data);
  }

  render() {
    const { data, handleInputChange, handleBagChange } = this.props;

    return (
      <div className="UsersFormAdd">
        <form onSubmit={this.handleFormSubmit}>
          <FormControl error={false}>
                <InputLabel
                  htmlFor="name"
                >
                  Name
                </InputLabel>
                <Input
                  id="name"
                  value={data && data.name || ''}
                  name="name"
                  onChange={handleInputChange}
                  required
                />
            </FormControl>
            <BagSelector change={handleBagChange} bag={data.bags || 0}></BagSelector>
            <Button variant="contained" type="submit" >Save</Button>
        </form>
      </div>
    );
  }
}

export default UsersFormAdd;
