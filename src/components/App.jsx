import { Component } from 'react';
import { nanoid } from 'nanoid';
import { PhonebookForm } from './Phonebook';
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

  onFilter = e => {
    this.setState({ filter: e.target.value });
  };

  onDeleteContact = e => {
    this.setState({
      contacts: this.state.contacts.filter(contact => {
        return contact.id !== e.target.id;
      }),
    });
  };
  render() {
    return (
      <>
        <Section title={'Phonebook'}>
          <PhonebookForm values={this.state} onSubmit={this.onAddNewContact} />
        </Section>
        <Section title={'Contacts'}>
          <Filter onFilter={this.onFilter} />
          <Contacts
            contacts={this.state.contacts}
            filter={this.state.filter}
            onClick={this.onDeleteContact}
          />
        </Section>
      </>
    );
  }
}
