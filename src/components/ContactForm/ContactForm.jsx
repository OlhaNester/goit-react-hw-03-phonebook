import React, { Component } from 'react';
import { Field, Formik, ErrorMessage } from 'formik';

import * as yup from 'yup';


import { Form, Label, Button, ErrorText } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`,).required('Please enter your name, it is required'),
  number: yup.string().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`,).required('Please enter your phone number, it is required'),
})

const FormError = ({ name }) => {
  return (
    <ErrorMessage name={name} render={message => <ErrorText>{message}</ErrorText>} />
  );
};
const initialValues = {
  name: '', number: ''
};

export class CotactForm extends Component {
  state = {
    name: '',
    number: '',
  };
 

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    
    this.props.onSubmit(this.state);
    
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <Formik initialValues={initialValues}
      validationSchema={schema}
        onSubmit={this.handleSubmit}>
        <Form autocomplete='off'>
        <form >
            <div>
              <Label htmlFor="">
              Name
              <Field
              id={this.nameInputId}
              value={this.state.name}
              onChange={this.handleChange}
             
              />
              </Label>
            <FormError name="name" />
          </div>
            <div>
              <Label>
              Number
             
            <Field
              id={this.numberInputId}
              value={this.state.number}
              onChange={this.handleChange}
              
              />
              
            </Label>
            <FormError name="name" />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      </Formik>
    );
  }
}


export default CotactForm;
