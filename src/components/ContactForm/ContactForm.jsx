import React, { Component } from "react";

import { nanoid } from "nanoid";
// import * as yup from "yup";
// import { Field, Formik, ErrorMessage } from "formik";
import { Form, Label, Input, Button } from "./ContactForm.styled";

// const schema = yup.object().shape({
//   name: yup.string().min(1).max(20).required(),
//   number: yup.string().min(8).max(9).required(),
// })

// const FormError = ({ name }) => {
//   return (
//     <ErrorMessage name={name} render={message => <ErrorText>{message}</ErrorText>} />
//   );
// };
// const initialValues = {
//   name: '', number: ''
// };

// export class CotactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
//   nameInputId = nanoid();
//   numberInputId = nanoid();

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };
//   handleSubmit = event => {
//     event.preventDefault();

//     this.props.onSubmit(this.state);

//     this.setState({
//       name: '',
//       number: '',
//     });
//   };
//   render() {
//     return (
//       <Formik initialValues={initialValues}
//       validationSchema={schema}
//         onSubmit={this.handleSubmit}>
//         <Form autocomplete='off'>
//         <form >
//             <div>
//               <Label htmlFor="">
//               Name
//               <Field
//               id={this.nameInputId}
//               value={this.state.name}
//               onChange={this.handleChange}
//               type="text"
//                 name="name"

//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               />
//               </Label>
//             <FormError name="name" />
//           </div>
//             <div>
//               <Label>
//               Number

//             <Field
//               id={this.numberInputId}
//               value={this.state.number}
//               onChange={this.handleChange}
//               type="tel"
//                 name="number"

//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               />

//             </Label>
//             <FormError name="name" />
//           </div>
//           <Button type="submit">Submit</Button>
//         </form>
//       </Form>
//       </Formik>
//     );
//   }
// }

export class CotactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    console.log(event.currentTarget);
    console.log(event.currentTarget.elements);
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({
      name: "",
      number: "",
    });
  };
  render() {
    return (
      <Form>
        <form onSubmit={this.handleSubmit}>
          <Label htmlFor="">
            Name
            <Input
              id={this.nameInputId}
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            Number
            <Input
              id={this.numberInputId}
              value={this.state.number}
              onChange={this.handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
  }
}
