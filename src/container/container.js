import React, { Component } from 'react';
import { connect} from 'react-redux';
import {updateCount} from "../actions";
import Button from "../components/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.addCount = this.addCount.bind(this);
  }

  addCount(number) {
    this.props.updateCount(number, this.props.count);
  }
  render() {
    return (
        <div>
          <p>Test</p>
          <p>{this.props.count}</p>
          <Button onclick={() => console.log('hi')}/>
          {/* <Button click={() => this.props.updateCount(3)}/> */}
        </div>
    );
  }
}

const mapDispatchToProps =  {
    updateCount
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
