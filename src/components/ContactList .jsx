import React from 'react';
import PropTypes from 'prop-types';
import {
    ContactsList,
    ContactsItem,
    RemoveContactButton,
} from './Phonebook.styled';

export default function ContactList({ contacts, removeContact }) {
    const elements = contacts.map(({ name, number, id }) => {
        return (
            <ContactsItem key={id}>
                {name}: {number}
                <RemoveContactButton onClick={() => removeContact(id)}>
                    Delete
                </RemoveContactButton>
            </ContactsItem>
        );
    });
    return <ContactsList>{elements}</ContactsList>;
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    ),
    removeContact: PropTypes.func.isRequired,
};
