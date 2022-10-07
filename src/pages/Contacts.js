import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactsList/ContactItem';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Phonebook />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactItem />
    </>
  );
}
