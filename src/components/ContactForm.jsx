import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
    InputWrapper,
    Input,
    Label,
    AddContactButton,
} from './Phonebook.styled';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    nameId = nanoid();
    numberId = nanoid();

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
        console.log('change');
    };

    handleSubmit = e => {
        e.preventDefault();
        const { name, number } = this.state;
        this.props.onSubmit({ name, number });
        this.setState({
            name: '',
            number: '',
        });
        console.log('submit');
    };

    render() {
        const { nameId, numberId, handleSubmit, handleChange } = this;

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
                        value={this.state.name}
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
                        value={this.state.number}
                        onChange={handleChange}
                    />
                </InputWrapper>
                <AddContactButton type="submit">Add contact</AddContactButton>
            </form>
        );
    }
}
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
