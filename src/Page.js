import React from 'react';
import io from 'socket.io-client';
import css from './Page.styl';
import SubmitForm from './SubmitForm.js';

// const Component = React.Component;
const { Component } = React;

export default class Page extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isOn: false,
      inputValue: '',
      users: {
        done: [],
        unDone:[] 
      } 
    }
  }

  componentDidMount() {
    this.socket = io('http://localhost:3001');
    this.socket.on('userStatus', (userInfos) => {
      let { yourUser, users } = userInfos;
      console.log(yourUser, users);
      if (yourUser != null) {
          this.setState({
            myUser: yourUser
          })
      }
      this.setState({ users: users });
    })
  }

  clickHandler = (event) => {
    this.setState({ isOn: !this.state.isOn });
  }

  submitName = (name) => {
    if(name !== '') {
      this.setState({ enteredName: true });
      this.socket.emit("userjoin", name);
    }
  }

  toggleDone = () => {
    this.socket.emit("toggleuser", this.state.myUser);
  }

  getColor() {
    let color = "red";
    if (this.state.isOn)
      color = "blue";
    return color;
  }

  render(){
    return this.getFromOrCircle();
  }

  getFromOrCircle(){
    if(this.state.enteredName){
      return(
        <div className={css.container}>
          <div
            className={css.circle + " " + css.column}
            style={{ backgroundColor: this.getColor() }}
            onClick={ this.clickHandler }></div>
          <div className={css.column + " " + css.info}>
            <div onClick={ this.toggleDone } className={css.done}>Toggle Done</div>
            <div className={css.voteCount}>Done: {this.state.users.done.length}</div>
            <div className={css.totalVoters}>Total: {this.state.users.unDone.length + this.state.users.done.length}</div>
          </div>
        </div>
      )
    } else {
      return (<SubmitForm onSubmit={ this.submitName }/>);
    }
  }

}