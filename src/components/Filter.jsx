import React from 'react';
import PropTypes from 'prop-types';
import { FilterTitle, FilterInput } from './Phonebook.styled';

export default function Filter({ filter, handleChange }) {
    return (
        <div>
            <FilterTitle>Find contacts by name</FilterTitle>
            <FilterInput
                type="text"
                name="filter"
                value={filter}
                onChange={handleChange}
            ></FilterInput>
        </div>
    );
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};
