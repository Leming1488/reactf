import React, {Component} from 'react';
import {Link} from 'react-router';

class ProductCategoryRow extends React.Component {
  render() {
    return (<td>{this.props.category}</td>);
  }
}

export class TableTdRow extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    let data = this.props.data;
    const cellTitle = ['user_name', 'email', 'state', 'full_name', 'date']
    const makeContent = () => {
      let content =[];
      cellTitle.forEach(el => content.push(<ProductCategoryRow category={data[el]} key={data[el]} />));
      return content;
    };
    return(
      <tr>
        {makeContent()}
        <td><Link to={`/edit/${this.props.data.state}/${this.props.data.id}`} className="link">Нажать</Link></td>
      </tr>
    )
  }
}
