import Phonebook from './Phonebook';
import { PhonebookBox } from './Phonebook.styled';
import ErrorBoundary from './ErrorBoundary';

export const App = () => {
    return (
        <ErrorBoundary>
       <PhonebookBox>
            <Phonebook />
        </PhonebookBox>

       </ErrorBoundary>
 
    );
};
