import   { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from '@emailjs/browser';
import "./style.css";
import { serviceEmail, templateID, publicKey } from './config';
// const serviceEmail = process.env.serviceEmail;
// const templateID = process.env.templateID;
// const publicKey = process.env.publicKey;

// console.log('API Key:', serviceEmail);

// console.log('template:', templateID);

// console.log('publickey:', publicKey);

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  choice: yup.string().required('Please select a class'),
  number: yup
    .number()
    .typeError('Please enter a valid phone number')
    .required('Phone number is required'),
  email: yup.string().email('Invalid email'),
  message: yup.string(),
});

 function Form() {
  const form = useRef();

  const { register, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceEmail, templateID, form.current, publicKey)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  };
  return (
    <div className="form">
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="firstName" placeholder="First name" {...register("firstName")} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
        <input type="text" name="lastName" placeholder="Last name" {...register("lastName")} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
        <select type="choice" name="choice" {...register("choice")}>
          <option value="">Select...</option>
          <option value="class1">Class 1</option>
          <option value="class1">Class 2</option>
          <option value="class1">Class 3</option>
          <option value="class1">Class 4</option>
          <option value="class1">Class 5</option>
        </select>
        {errors.choice && <p>{errors.choice.message}</p>}
        <input type="text" name="number" placeholder="Phone Number" {...register("number")} />
        {errors.number && <p>{errors.number.message}</p>}
        <input type="text" name="email" placeholder="Email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        <input type="text" name="message" placeholder="Message" {...register("message")} />
        {errors.message && <p>{errors.message.message}</p>}
        <input id="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;