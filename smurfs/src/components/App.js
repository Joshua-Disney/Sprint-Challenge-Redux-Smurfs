import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, addSmurf } from '../actions';
import SmurfForm from './SmurfForm';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    smurfs: []
  }

  componentDidMount() {
    console.log('didMount', this.props)
    this.props.getSmurfs()
  }

  toggleAdding = () => {
    this.setState({isAdding: !this.state.isAdding});
  }

  addNewSmurf = (event, state) => {
    event.preventDefault()
    this.props.addSmurf(state);
  };

  render() {
    return (
      <div className="App">
        <div className='container'>
          <div className='smurfVillage'>
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
            <button className='addButton' onClick={this.toggleAdding}>{this.state.isAdding ? 'Cancel' : 'Add Smurf'}</button>
          </div>
          {this.state.isAdding && (
            <SmurfForm
              addNewSmurf={this.addNewSmurf}
              isAdding={this.state.isAdding} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    isAdding: state.isAdding,
    isFetching: state.isFetching,
    smurfs: state.smurfs
  })
}

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App)
