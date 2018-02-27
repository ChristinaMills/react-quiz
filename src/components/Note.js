import React, { Component } from 'react';

export default class Note extends Component {

  render() {
    const { date, text } = this.props.notes;
    console.log( date, text)
    
    return (
      <div>
        <li>
          <h3>{text}</h3>
          <p>{date}</p>
        </li>
      </div>
    );
  }
}
