import { ContactItem } from '../ContactsList/ContactItem';
import { Filter } from 'components/Filter/Filter';
import { List } from './contactsStyles';
import PropTypes from 'prop-types';

export const Contacts = () => {
  return (
    <List>
      <Filter />
      <ContactItem />
    </List>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};
