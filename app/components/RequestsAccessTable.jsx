import React, { Component } from 'react';
import {Table} from 'Table';
import {TablePagination} from 'TablePagination';


export class RequestsAccessTable extends Component {
  constructor() {
    super(...arguments)
  }
  groupData(data) {
    let arr = [];
    const size = 10;
    let i;
    for (i = 0; i < data.length; i += size) arr.push(data.slice(i,i + size));
    // data.reduce((acc, el, i) => {arr.push(data.slice(acc, acc + size))}, 0)
    console.log(this.props.params.id);
    return arr;
  }
  render() {
    let data = this.groupData(this.props.data);
    let curentPage =  parseFloat(this.props.params.id) || 0;
    return (
      <div className="row">
        <div className="row">
          {<TablePagination curentPage={curentPage} length={data.length}/>}
        </div>
        <div className="row">
          {<Table title={this.props.title} data={data[curentPage]}/>}
        </div>
      </div>
    )
  }
}
