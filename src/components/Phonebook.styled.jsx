import styled from 'styled-components';

export const PhonebookBox = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: #010101;
`;

export const PhonebookTitle = styled.h1`
    font-size: 40px;
    margin-bottom: 20px;
    text-align: center;
    color: #2f00cb;
`;
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;
export const Input = styled.input`
    text-indent: 10px;
    font-size: 24px;
    border: 1px solid;
    border-radius: 10px;
    background-color: #f7f9ff;
`;
export const Label = styled.label`
    font-size: 20px;
    margin-bottom: 10px;
`;

export const AddContactButton = styled.button`
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #2f00cb;
    border-radius: 10px;
    font-size: 20px;
    background-color: #fff;
    cursor: pointer;
`;

export const ContactsTitle = styled.h2`
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 700;
    margin-right: 40px;
    text-align: center;
`;
export const ContactsList = styled.ul`
    margin-left: 20px;
`;
export const ContactsItem = styled.li`
    font-size: 18px;
    font-weight: 600;

    margin-bottom: 10px;
`;
export const RemoveContactButton = styled.button`
    background-color: #ffcbcb;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
`;

export const FilterTitle = styled.p`
    font-size: 20px;
    margin-bottom: 10px;
`;
export const FilterInput = styled.input`
    margin-bottom: 10px;
    text-indent: 10px;
    font-size: 24px;
    border: 1px solid;
    border-radius: 10px;
    background-color: #f7f9ff;
`;
