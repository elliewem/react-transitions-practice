import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Styles from './resources/todolist.css'

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      text: ""
    };
  };

  handleChange = (event) => {
    let currentSearch = event.target.value;
    this.setState({
      text: currentSearch
    });
  };

  handleClick = () => {
    this.setState({
      items: [...this.state.items, this.state.text]
    });
  }

  render() {

    const items = this.state.items.map((item, key) => (
      <div key={key}>
        {item}
      </div>
    ))

    return (
      <div className="todolist">
        <input type="text" onChange={ this.handleChange } />
        <input type="submit" onClick={ this.handleClick } />
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          { items }
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default ToDoList;
