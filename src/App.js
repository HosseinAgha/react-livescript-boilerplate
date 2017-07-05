import React from 'react';
import Page from './Page';

const Component = React.Component;

export default class App extends Component {

  constructor(prop) {
    super(prop);
  }

  render(){
    return (
      <Page/>
    );
  }

}