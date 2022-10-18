import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  InputWrapper,
  Input,
  Label,
  AddContactButton,
} from './Phonebook.styled';

const initialState = {
  name: '',
  number: '',
};

export default function ContactForm({ onSubmit }) {
  const [state, setState] = useState(initialState);

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = state;
    onSubmit({ name, number });
    setState(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWrapper>
        <Label htmlFor={nameId}>Name</Label>
        <Input
          id={nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={state.name}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor={numberId}>Number</Label>
        <Input
          id={numberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={state.number}
          onChange={handleChange}
        />
      </InputWrapper>
      <AddContactButton type="submit">Add contact</AddContactButton>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
