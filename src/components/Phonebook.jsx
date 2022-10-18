import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList ';
import Filter from './Filter';
import { PhonebookTitle, ContactsTitle } from './Phonebook.styled';

export default function Phonebook() {
  const [contacts, setContacts] = useState(() => {
    const value = JSON.parse(localStorage.getItem('contacts'));
    return value ?? [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addPhoneContact = contact => {
    if (isDuplicate(contact)) {
      return alert(`${contact.name} is already in contacts`);
    }

    setContacts(prev => {
      const newContact = {
        id: nanoid(),
        ...contact,
      };
      return [...prev, newContact];
    });
  };

  const removeContact = id => {
    setContacts(prev => {
      const newContacts = prev.filter(contact => contact.id !== id);
      return newContacts;
    });
  };

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const isDuplicate = ({ name }) => {
    const result = contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    return result;
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const normalizedName = name.toLocaleLowerCase();
      const result = normalizedName.includes(normalizedFilter);
      return result;
    });
    return filteredContacts;
  };

  return (
    <div>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm onSubmit={addPhoneContact} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList
        contacts={getFilteredContacts()}
        removeContact={removeContact}
      />
    </div>
  );
}
