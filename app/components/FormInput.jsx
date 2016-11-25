import React, { Component, PropTypes } from 'react';
export class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: this.props.atr.value || ''
    };
  }
  handleUserInput(event){
    const value = event.target.value;
    this.setState({inputText:value});
    this.props.onChangeInput(this.props.id, this.state.inputText);
  }
  reset() {
    this.setState({inputText: ''});
  }
  render() {
    const {type, name, placeholder} = this.props.atr;
    return (
      <div className='medium-4 columns'>
        <input type={type} value={this.state.inputText} id={this.props.id} onChange={this.handleUserInput.bind(this)} placeholder={placeholder} name={name}/>
      </div>
    );
  }
}
FormInput.propTypes = {
  atr: PropTypes.objectOf(PropTypes.string),
  id: PropTypes.string
};
