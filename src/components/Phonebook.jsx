import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList ';
import Filter from './Filter';
import { PhonebookTitle, ContactsTitle } from './Phonebook.styled';

export default class Phonebook extends Component {
    state = {
        contacts: [],
        filter: '',
    };

componentDidMount(){
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if(contacts?.length){
   this.setState({
    contacts,
})
    }
 }
   
    componentDidUpdate(prevProps, prevState){
        const { contacts} = this.state;
        if(prevState.contacts !== contacts){
              localStorage.setItem("contacts", JSON.stringify(contacts))
        }
    }

    addPhoneContact = contact => {
        if (this.isDuplicate(contact)) {
            return alert(`${contact.name} is already in contacts`);
        }
        this.setState(prev => {
            const newContact = {
                id: nanoid(),
                ...contact,
            };
            return {
                contacts: [...prev.contacts, newContact],
            };
        });
    };

    removeContact = id => {
        this.setState(prev => {
            const newContacts = prev.contacts.filter(
                contact => contact.id !== id
            );
            return {
                contacts: newContacts,
            };
        });
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    isDuplicate({ name }) {
        const { contacts } = this.state;
        const result = contacts.find(
            contact =>
                contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
        );
        return result;
    }

    getFilteredContacts() {
        const { contacts, filter } = this.state;
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
    }

    render() {
        const { addPhoneContact, removeContact, handleChange } = this;
        const { filter } = this.state;
        const contacts = this.getFilteredContacts();
        return (
            <div>
                <PhonebookTitle>Phonebook</PhonebookTitle>
                <ContactForm onSubmit={addPhoneContact} />
                <ContactsTitle>Contacts</ContactsTitle>
                <Filter filter={filter} handleChange={handleChange} />
                <ContactList
                    contacts={contacts}
                    removeContact={removeContact}
                />
            </div>
        );
    }
}
