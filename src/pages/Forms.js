import React, { useState } from 'react';
import { Formik, Form } from 'formik'; 
import Input from '../components/Input';
import FormsLayout from '../layouts/FormsLayout';
import Button from '../components/Button';
import * as Yup from 'yup';
import '../Forms.css';

const formValidationSchema = Yup.object({
  email: Yup.string().email('*Invalid email address*').required('*Email is required*'),
  password: Yup.string().min(6, '*Password must be at least 6 characters*').required('*Password is required*'),
  text: Yup.string().required('*Text is required*'),
  number: Yup.number().required('*Number is required*'),
  checkbox: Yup.boolean().oneOf([true], '*Checkbox must be checked*'),
  color: Yup.string()
    .matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, '*Invalid color format*')
    .required('*Please select a valid color*'),
  time: Yup.string().matches(
    /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
    '*Invalid time format (HH:MM)*'
  ),
  date: Yup.string().matches(
    /^\d{4}-\d{2}-\d{2}$/,
    '*Invalid date format (YYYY-MM-DD)*'
  ),
});

const Forms = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionFailed, setSubmissionFailed] = useState(false); 

  const onSubmit = (values) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
  
      if (formSubmitted && formValidationSchema.isValidSync(values)) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setSubmissionFailed(false); 
        }, 5000);
      } else {
        setSubmissionFailed(true);
      }
    }, 5000); // 5 second 'submitting' delay
  
    formValidationSchema
      .validate(values, { abortEarly: false })
      .catch(() => {});
  
    setFormSubmitted(true); 
  };
  

  return (
    <FormsLayout>
        {isLoading && <div className="overlay active" />}
      <Formik
        initialValues={{
          email: '',
          password: '',
          text: '',
          number: 0,
          checkbox: false,
          color: '',
          time: '',
          date: '',
        }}
        onSubmit={onSubmit}
        validationSchema={formValidationSchema}
      >
        {() => (
          <Form>
            <div className="form-container">
            <Input type="email" name="email" label="Email" className="form-field" />
            <Input type="password" name="password" label="Password" className="form-field" />
            <Input type="text" name="text" label="Text" className="form-field" />
            <Input type="number" name="number" label="Number" className="form-field" />
            <Input type="checkbox" name="checkbox" label="Checkbox" className="form-field" />
            <Input type="color" name="color" label="Color" className="form-field" />
            <Input type="time" name="time" label="Time" className="form-field" />
            <Input type="date" name="date" label="Date" className="form-field" />

            <Button
              color="green"
              text={isLoading ? 'Submitting...' : isSuccess ? 'Success!' : 'Submit'}
              onClick={onSubmit}
              disabled={isLoading || isSuccess}
              className="submit-button"
            />
            </div>
            
            {isLoading && <div className="loading-message">Please wait...</div>}
            {isSuccess && <div className="success-message">Submission Successful!</div>}
            {submissionFailed && !isLoading && !isSuccess && (
              <div className="failure-message">Submission Failed! Please check your inputs.</div>
            )}
          </Form>
        )}
      </Formik>
    </FormsLayout>
  );
};

export default Forms;
