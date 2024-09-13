import React from 'react';
import { Form } from 'react-bootstrap';

const FormControl = ({ type, placeholder, name, value, options, onChange, rows }) => {
  if (type === 'select') {
    return (
      <Form.Control
        as="select"
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Control>
    );
  }

  return (
    <Form.Control
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      as={type === 'textarea' ? 'textarea' : 'input'}
      rows={rows}
    />
  );
};

export default FormControl;
