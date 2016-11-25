import React, { Component } from 'react';
import {ReactDOM} from 'react-dom';
import {FormInput} from 'FormInput';
import {FormSelect} from 'FormSelect';
import update from 'react-addons-update';

export class RequestsAccessFilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {formData: this.props.formShema };
  }

  formReset() {
    this.state.formData.forEach((el, i) => {
      this.refs[`${el.id}`].reset();
    });
    this.setState({formData: this.props.formShema});
  }
  handleOnChange(id, value) {
    const objIndex = this.state.formData.findIndex((el) => el.id === id );
    const newObj = update(this.state.formData,{
                                                [objIndex]: {
                                                  atr: {
                                                    value: {$set: value}
                                                  }
                                                }
                                              });
    this.setState({formData: newObj});
  }
  formSubmit(e) {
    e.preventDefault();
    let formSend = {};
    this.state.formData.forEach((el, i) => {
      formSend[el.id] = el.atr.value;
    });
    console.log(formSend);
  }
  render() {
    const formData = this.state.formData;
    const formRow = [];
    const renderForm  = (component, id, atr, i) =>{
      const components = {
        'input': FormInput,
        'select': FormSelect
      }
      const FormComponent = components[component];
      return <FormComponent  atr={atr} id={id} onChangeInput={this.handleOnChange.bind(this)} key={id} ref={id} />;
    }
    formData.forEach((el, i) => {
      formRow.push(renderForm(el.component, el.id, el.atr, i));
    })
    return (
      <form className='access-filter-form row' ref='accessForm' onSubmit={this.formSubmit.bind(this)}>
        <div className='medium-8 columns'>
          <div className='row'>
            {formRow}
          </div>
        </div>
        <div className='medium-4 columns text-center'>
          <div className='row medium-12'>
            <input type='submit' id='exampleFileUpload' className='button' value='Применить'/>
          </div>
          <div className='row medium-12'>
            <button type='button' onClick={this.formReset.bind(this)} id='exampleFileUpload' className='button'>
              Отчистить
            </button>
          </div>
        </div>
    </form>
    );
  }
}
