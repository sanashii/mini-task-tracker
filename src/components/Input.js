// the file that will accept a type and name for the parameters that will be passed on since ther are many different types
import React from 'react';
import { useFormikContext, ErrorMessage } from 'formik';

const Input = ({ type, name, label }) => {
  const { getFieldProps, touched, errors } = useFormikContext();

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...getFieldProps(name)}
        type={type}
        className={`form-control ${touched[name] && errors[name] ? 'is-invalid' : ''}`}
      />
      <ErrorMessage name={name} component="div" className="invalid-feedback" />
    </div>
  );
};

export default Input;
