import { ImBin } from 'react-icons/im';
import { DeleteButton } from 'styles/contactItemStyles';
import { Item } from '../styles/contactsStyles';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

export const ContactItem = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.query);
  const dispatch = useDispatch();

  const contactsToRender =
    filter !== ''
      ? contacts.filter(contact => {
          return contact.name.toLowerCase().includes(filter.toLowerCase());
        })
      : contacts;

  const handleRemoveContact = e => {
    dispatch(removeContact(e.currentTarget.id));
  };

  return (
    <>
      {contactsToRender.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            {name}: {number}{' '}
            <DeleteButton id={id} onClick={handleRemoveContact}>
              <ImBin />
            </DeleteButton>
          </Item>
        );
      })}
    </>
  );
};
