import { ContactItem } from '../ContactsList/ContactItem';
import { List } from './contactsStyles';
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
