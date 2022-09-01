import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook';
import { Contacts } from './Contacts';
import { Section } from './Section';
import { Filter } from './Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));

    if (localContacts.length > 0) {
      setContacts([...localContacts]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onAddNewContact = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    if (
      contacts
        .map(contact => {
          return contact.name;
        })
        .includes(newContact.name)
    ) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      setContacts(contacts => [...contacts, newContact]);
      actions.resetForm();
    }
  };

  const onFilter = value => {
    setFilter(value);
  };

  const onDeleteContact = id => {
    setContacts(
      contacts.filter(contact => {
        return contact.id !== id;
      }),
    );
  };

  const contactsToRender = filter
    ? contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      })
    : contacts;

  return (
    <>
      <Section title={'Phonebook'}>
        <Phonebook onSubmit={onAddNewContact} />
      </Section>
      <Section title={'Contacts'}>
        <Filter onFilter={onFilter} />
        {contacts.length > 0 ? (
          <Contacts contacts={contactsToRender} onClick={onDeleteContact} />
        ) : (
          <p> No contacts in your phonebook </p>
        )}
      </Section>
    </>
  );
};
