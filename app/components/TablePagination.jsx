import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import {classNames} from 'classnames';

class TablePaginationLink extends Component {
  render() {
    return (
      <li>
        <Link activeClassName="current" to={'/view/page/' + this.props.index} >{this.props.index}</Link>
      </li>
    )
  }
}

export class TablePagination extends Component {
  constructor() {
    super(...arguments);
  }
  render() {
    const make = (length) => {
      let newArr = [];
      for (let i = 0; i < length; i++) {
        newArr.push(<TablePaginationLink index={i} key={i}/>);
      }
      return newArr;
    };
    const content = make(this.props.length);
    const linkState = this.props.length - 1 !== this.props.curentPage;
    return (
      <ul className="pagination" role="navigation">
        <li className={'pagination-previous'+ ' ' + ( 0 !== this.props.curentPage ? '' : 'disabled') }>
          { 0 !== this.props.curentPage
            ? <Link to={'/view/page/' + (parseFloat(this.props.curentPage) - 1)}>
                Previous
                <span className="show-for-sr">page</span>
              </Link>
            : <span>Previous<span className="show-for-sr">page</span></span>
          }
          </li>
        {content}
        <li className="ellipsis" aria-hidden="true"></li>
        <li className={'pagination-next'+ ' ' + ( this.props.length - 1 !== this.props.curentPage ? '' : 'disabled') }>
          { this.props.length - 1 !== this.props.curentPage
            ? <Link to={'/view/page/' + (parseFloat(this.props.curentPage) + 1)}>
                Next
                <span className="show-for-sr">page</span>
              </Link>
            : <span>Next<span className="show-for-sr">page</span></span>
          }
          </li>
      </ul>
    );
  }
}
