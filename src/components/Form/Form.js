import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./style.css";

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required') ,
  choice: yup.string().required('Please select a class'),
  number: yup
    .number()
    .typeError('Please enter a valid phone number')
    .required('Phone number is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required')
});

function Form() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="form">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <input type="text" name="firstName" placeholder="First name" ref={register} />
        <p>{errors.firstName && errors.firstName.message}</p>
        <input type="text" name="lastName" placeholder="Last name" ref={register} />
        <p>{errors.lastName && errors.lastName.message}</p>
        <select name="choice" ref={register}>
          <option value="">Select...</option>
          <option value="1">Class 1</option>
          <option value="2">Class 2</option>
          <option value="3">Class 3</option>
          <option value="4">Class 4</option>
          <option value="5">Class 5</option>
        </select>
        <p>{errors.choice && errors.choice.message}</p>
        <input type="number" name="number" placeholder="Phone Number" ref={register} />
        <p>{errors.number && errors.number.message}</p>
        <input type="text" name="email" placeholder="Email" ref={register} />
        <p>{errors.email && errors.email.message}</p>
        <input type="text" name="message" placeholder="Message" ref={register} />
        <p>{errors.message && errors.message.message}</p>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;