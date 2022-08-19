import { ContactItem } from './ContactItem';
import { Item } from '../styles/contactsStyles';
import PropTypes from 'prop-types';

export const Contacts = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <Item key={contact.id}>
            <ContactItem contact={contact} onClick={onClick} />
          </Item>
        );
      })}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};
