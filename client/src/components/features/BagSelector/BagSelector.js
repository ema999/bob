import React, { Component } from 'react';
import './BagSelector.css';
import IconAdd from 'material-ui/svg-icons/content/add';
import IconRemove from 'material-ui/svg-icons/content/remove';
import Button from '@material-ui/core/Button';

class BagSelector extends Component {

  constructor(props) {
    super(props)

    this.handleSum = this.handleSum.bind(this);
    this.handleSub = this.handleSub.bind(this);
  }

  handleSum(event){
    if(this.props.bag === 5) return;
    let result = this.props.bag + 1
    this.props.change(result)
  }

  handleSub(event){
    if(this.props.bag === 0) return;
    let result = this.props.bag - 1
    this.props.change(result)
  }

  render() {

    const { change, bag } = this.props;

    return (
      <div className="BagSelector">
        <Button onClick={this.handleSub}><IconRemove></IconRemove></Button>
        {bag}
        <Button onClick={this.handleSum}><IconAdd></IconAdd></Button>
      </div>
    );
  }

}

export default BagSelector;
