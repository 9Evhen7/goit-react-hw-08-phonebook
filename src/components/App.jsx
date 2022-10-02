import { Phonebook } from './Phonebook';
import { Contacts } from './Contacts';
import { Section } from './Section';
import { Filter } from './Filter';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Section title={'Phonebook'}>
        <Phonebook />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <Contacts />
      </Section>
    </>
  );
};