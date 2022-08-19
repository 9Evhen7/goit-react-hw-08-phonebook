import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook';
import { Contacts } from './Contacts';
import { Section } from './Section';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddNewContact = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    if (
      this.state.contacts
        .map(contact => {
          return contact.name;
        })
        .includes(newContact.name)
    ) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, newContact] };
      });
      actions.resetForm();
    }
  };

  onFilter = value => {
    this.setState({ filter: value });
  };

  onDeleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => {
        return contact.id !== id;
      }),
    });
  };
  render() {
    const { state, onAddNewContact, onFilter, onDeleteContact } = this;
    const { contacts, filter } = state;
    const contactsToRender = filter
      ? contacts.filter(contact => {
          return contact.name.toLowerCase().includes(filter.toLowerCase());
        })
      : contacts;
    return (
      <>
        <Section title={'Phonebook'}>
          <Phonebook values={state} onSubmit={onAddNewContact} />
        </Section>
        <Section title={'Contacts'}>
          <Filter onFilter={onFilter} />
          <Contacts contacts={contactsToRender} onClick={onDeleteContact} />
        </Section>
      </>
    );
  }
}
