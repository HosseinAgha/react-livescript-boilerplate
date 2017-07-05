import React from 'react';
import css from './SubmitForm.styl';

// const Component = React.Component;
const { Component } = React;

export default class SubmitForm extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      inputValue: '',
    }
  }

  onUserInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  onSubmitName = () => {
    this.props.onSubmit(this.state.inputValue);
  }

  render(){
    return (
      <div className={css.container}>
        <input className={ css.myInput } onChange={ this.onUserInput } value={ this.state.inputValue } />
        <div className={ css.myBtn } onClick={ this.onSubmitName }>Enter Voting Machine!</div>
      </div>
    );
  }

}