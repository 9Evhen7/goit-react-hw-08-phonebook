import { ContactItem } from './ContactItem';
import { List } from '../styles/contactsStyles';
import PropTypes from 'prop-types';

export const Contacts = () => {
  return (
    <List>
      <ContactItem />
    </List>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};
