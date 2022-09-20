// import { useState, useEffect } from 'react';
import { Phonebook } from './Phonebook';
import { Contacts } from './Contacts';
import { Section } from './Section';
import { Filter } from './Filter';

export const App = () => {
  // const [contacts, setContacts] = useState([]);

  // useEffect(() => {
  //   const getLocalContacts = async () => {
  //     const data = await JSON.parse(localStorage.getItem('contacts'));
  //     return data;
  //   };
  //   getLocalContacts().then(contacts => {
  //     if (contacts && contacts.length > 0) {
  //       setContacts([...contacts]);
  //     }
  //   });
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

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
