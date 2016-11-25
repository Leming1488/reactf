import React, {Component} from 'react';

export class TableThRow extends Component {
  constructor() {
    super(...arguments);
  }
  render() {
    const title = this.props.title.map( el => {
    return  `<th>${el}</th>`;
    }).join('');
    return(
      <tr dangerouslySetInnerHTML={{__html: title}}>
      </tr>
    )
  }
}
