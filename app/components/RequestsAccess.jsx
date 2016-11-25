import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'whatwg-fetch';

class RequestsAccess extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [] };
  }
  componentWillMount() {
    this.setState({
      data: this.props.state.data
    })
    // const DATAURL = '';
    // fetch(DATAURL)
    // .then((response) => response.json())
    // .then((responseData) => {
    // this.setState({data:responseData});
    // });
  }
  render() {
    const TABLETITLE = ['Логин', 'E-mail', 'Статус заявки', 'ФИО', 'Дата подачи заявки', 'Действия'];
    let child = this.props.children && React.cloneElement(this.props.children,
      { data: this.state.data }
    );

    return (
      <div className='requests-access row'>
        {child}
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log(state.requestsAccess);
  return {
    state: state.requestsAccess
  }
};


export default connect(mapStateToProps)(RequestsAccess);
