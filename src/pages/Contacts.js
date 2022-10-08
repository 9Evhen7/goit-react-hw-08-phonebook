import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Contacts } from 'components/Contacts/Contacts';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import { Thumb } from 'styles/contactsPageStyles';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Thumb>
      <Phonebook />
      <div>{isLoading && 'Request in progress...'}</div>
      <Contacts />
    </Thumb>
  );
}
