import { ImBin } from 'react-icons/im';
import { DeleteButton } from 'styles/contactItemStyles';
import { Item } from '../styles/contactsStyles';
import { useSelector } from 'react-redux';
import { removeContact } from 'redux/actions';
import { useDispatch } from 'react-redux';

export const ContactItem = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleRemoveContact = e => {
    dispatch(removeContact(e.currentTarget.id));
  };

  return (
    <>
      {contacts.map(({ id, name, number }) => {
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
