import { Phonebook } from './Phonebook';
import { Contacts } from './Contacts';
import { Section } from './Section';
import { Filter } from './Filter';

export const App = () => {
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
