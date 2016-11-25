import React, { Component } from 'react';
import {TableThRow} from 'TableThRow';
import {TableTdRow} from 'TableTdRow';

export class Table extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    let data = this.props.data;
    const makeContent = () => {
      let content =[];
      content = data.map((el, i) => <TableTdRow data={el} key={i}/>)
      return content;
    };
    return (
      <table>
        <thead>
          <TableThRow title={this.props.title} />
        </thead>
        <tbody>
          {makeContent()}
        </tbody>
      </table>
    )
  }
}
