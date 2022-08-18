import styled from 'styled-components';
import { ContactItem } from './ContactItem';

const Item = styled.li`
  margin-bottom: 8px;
`;

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
                <Item key={contact.id}>
                  <ContactItem contact={contact} onClick={onClick} />
                </Item>
              );
            })
        : contacts.map(contact => {
            return (
              <Item key={contact.id}>
                <ContactItem contact={contact} onClick={onClick} />
              </Item>
            );
          })}
    </ul>
  );
};
