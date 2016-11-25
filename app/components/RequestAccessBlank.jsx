import React, { Component } from 'react';

export class RequestAccessBlank extends Component {
  constructor() {
    super(...arguments);
  }
  handleOnClick() {
    this.props.history.goBack();
  }
  render() {
    const {user_name, email, state, date, full_name} =  this.props.data[parseFloat(this.props.params.id) - 1];
    return (
      <div className="row">
        <dl className="medium-12 colums text-center">
          <dd>Логин</dd>
          <dt>{user_name}</dt>
          <dd>E-mail</dd>
          <dt>{email}</dt>
          <dd>Статус заявки</dd>
          <dt>{state}</dt>
          <dd>Дата подачи заявки</dd>
          <dt>{date}</dt>
          <dd>ФИО</dd>
          <dt>{full_name}</dt>
        </dl>
        <div className="medium-12 colums text-center">
          <div className="button-group text-center">
            <button type="button" onClick={this.handleOnClick.bind(this)} id="exampleFileUpload" className="button">
              Назад
            </button>
          </div>
        </div>
      </div>
    )
  }
}
