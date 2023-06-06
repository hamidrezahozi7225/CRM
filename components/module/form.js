import React from 'react';
import InputGroup from './inputGroup';

const Form = ({ form, setForm }) => {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div>
      <InputGroup
        type='text'
        label='First Name'
        value={form.firstName}
        changeHandler={changeHandler}
        name='firstName'
      />
      <InputGroup
        type='text'
        label='Last Name'
        value={form.lastName}
        changeHandler={changeHandler}
        name='lastName'
      />
      <InputGroup
        type='email'
        label='Email'
        value={form.email}
        changeHandler={changeHandler}
        name='email'
      />
      <InputGroup
        type='text'
        label='Phone Number'
        value={form.phone}
        changeHandler={changeHandler}
        name='phone'
      />
      <InputGroup
        type='text'
        label='Postal Code'
        value={form.postal}
        changeHandler={changeHandler}
        name='postal'
      />
      <InputGroup
        type='text'
        label='Address'
        value={form.address}
        changeHandler={changeHandler}
        name='address'
      />
    </div>
  );
};

export default Form;
