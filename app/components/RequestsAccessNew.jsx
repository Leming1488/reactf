import React, { Component } from 'react';
import {RequestsAccessFilterForm} from 'RequestsAccessFilterForm';
import {RequestsAccessTable} from 'RequestsAccessTable';

export class RequestsAccessNew extends Component {
  constructor() {
    super(...arguments);
  }
  hadlerActionUser() {
  }
  render() {
    const FORMSHEMA =  [
      {component: 'input',
        id: 'request-date-from',
        atr: {type: 'text',  value: '', name: 'request-date-from', placeholder: 'Дата подачи заявки с...'}
      },
      {component: 'input',
        id: 'request-date-by',
        atr: {type: 'text',  value: '', name: 'request-date-by', placeholder: 'Дата подачи заявки по...'}
      },
      {component: 'select',
        id: 'request-state',
        atr: { value: '', name: 'request-state',
          optionsData: [
            {value: '',  disabled: true , placeholder:'Статус заявки...'},
            {value: 'new', placeholder:'Новая'},
            {value: 'complete', placeholder:'Исполненая'},
            {value: 'rejected', placeholder:'Отклоненая'}
          ]
        }
      },
      {component: 'input',
        id: 'request-user-login',
        atr: {type: 'text',  value: '', name: 'request-user-login', placeholder: 'Логин пользователя'}
      },
      {component: 'input',
        id: 'request-email',
        atr: {type: 'email',  value: '', name: 'request-email', placeholder: 'E-mail адрес...'}
      },
      {component: 'input',
        id: 'request-user-fio',
        atr: {type: 'text',  value: '', name: 'request-user-fio', placeholder: 'ФИО...'}
      }
    ];
    const TABLETITLE = ['Логин', 'E-mail', 'Статус заявки', 'ФИО', 'Дата подачи заявки', 'Действия'];
    let child = this.props.children && React.cloneElement(this.props.children,
      { data: this.props.data,
        title: TABLETITLE}
    );
    return (
      <div className='requests-access row'>
        <h2 className='medium-12 colums text-center'>Запрос на доступ к подсистемам АИС</h2>
        <RequestsAccessFilterForm formShema={FORMSHEMA}/>
        {child}
        {/* <RequestsAccessTable title={TABLETITLE} data={this.props.data}/> */}
      </div>
    )
  }
}
