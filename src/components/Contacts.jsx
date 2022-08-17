import { ContactItem } from './ContactItem';

export const Contacts = ({ contacts, filter, onClick }) => {
  return (
    <ul>
      {filter
        ? contacts
            .filter(contact => {
              return contact.name.toLowerCase().includes(filter.toLowerCase());
            })
            .map(contact => {
              return (
                <li key={contact.id}>
                  <ContactItem contact={contact} onClick={onClick} />
                </li>
              );
            })
        : contacts.map(contact => {
            return (
              <li key={contact.id}>
                <ContactItem contact={contact} onClick={onClick} />
              </li>
            );
          })}
    </ul>
  );
};
