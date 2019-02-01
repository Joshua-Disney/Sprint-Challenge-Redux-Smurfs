import React from 'react';
import { connect } from 'react-redux';

import { addSmurf } from  '../actions';

class SmurfForm extends React.Component {
  state = {
    name: '',
    age: '',
    height: ''
  }

  handleChanges = event => {
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    })
  }

  render() {
    console.log('props', this.props)
    console.log('state', this.state)
    return (
      <div className='formContainer'>
        <h2 className='formHeader'>{this.props.isAdding ? 'Add Smurf' : 'Update Smurf'}</h2>
        <form className='form'>
          <input
            className='formInput'
            type='text'
            name='name'
            placeholder='Smurf name...'
            value={this.state.name}
            onChange={this.handleChanges}
          />
          <input
            className='formInput'
            type='number'
            name='age'
            placeholder='Smurf age...'
            value={this.state.age}
            onChange={this.handleChanges}
          />
          <input
            className='formInput'
            type='text'
            name='height'
            placeholder='Smurf height...'
            value={this.state.height}
            onChange={this.handleChanges}
          />
          <button onClick={(event) => this.props.addNewSmurf(event, this.state)} className='formButton'>
            {this.props.isAdding ? 'Add Smurf' : 'Update Smurf'}
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps =  state => ({})

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm)