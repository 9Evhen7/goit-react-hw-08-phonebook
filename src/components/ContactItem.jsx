import { ImBin } from 'react-icons/im';
import { DeleteButton } from '../styles/contactItemStyles';
import { Item } from '../styles/contactsStyles';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactItem = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const contactsToRender =
    filter !== ''
      ? contacts.filter(contact => {
          return contact.name.toLowerCase().includes(filter.toLowerCase());
        })
      : contacts;

  const handleRemoveContact = e => {
    dispatch(deleteContact(e.currentTarget.id));
  };

  return (
    <>
      {contacts.length > 0 ? (
        contactsToRender.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              {name}: {number}{' '}
              <DeleteButton id={id} onClick={handleRemoveContact}>
                <ImBin />
              </DeleteButton>
            </Item>
          );
        })
      ) : (
        <p>No contacts</p>
      )}
    </>
  );
};
