import React from 'react';

const Component = React.Component;

export default class List extends Component {

  constructor(prop) {
    super(prop);
  }

  render(){
    return (
      <div>
        {
          this.props.list.map(function(name, index) {
            return(<div>{name}</div>);
          })
        }
      </div>
    );
  }

}