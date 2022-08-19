import { ContactItem } from './ContactItem';
import { List, Item } from '../styles/contactsStyles';
import PropTypes from 'prop-types';

export const Contacts = ({ contacts, onClick }) => {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <Item key={contact.id}>
            <ContactItem contact={contact} onClick={onClick} />
          </Item>
        );
      })}
    </List>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};
