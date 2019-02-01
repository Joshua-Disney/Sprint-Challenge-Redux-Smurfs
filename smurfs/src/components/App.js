import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    console.log('didMount', this.props)
    this.props.getSmurfs()
  }

  render() {
    console.log('inRender', this.props)
    return (
      <div className="App">
        <h1>SMURF VILLAGE</h1>
        {this.props.smurfs.map(smurf => (
          <div
            className='smurfCard'
            key={smurf.id}
          >
            <h4 className='smurfName'>{smurf.name}</h4>
            <p className='smurfAge'>{smurf.age}</p>
            <p className='smurfHeight'>{smurf.height}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    isFetching: state.isFetching,
    smurfs: state.smurfs
  })
}

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App)
