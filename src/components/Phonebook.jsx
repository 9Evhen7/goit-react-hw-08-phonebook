import { Formik } from 'formik';
import { AddUserForm, Button, Label, Input } from 'styles/phonebookStyles';
import PropTypes from 'prop-types';

export const Phonebook = ({ onSubmit }) => {
  const initialValues = {
    name: '',
    number: '',
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <AddUserForm autoComplete="off">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Evhen Melnicuk"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Label htmlFor="number">Number</Label>
          <Input
            type="tel"
            name="number"
            placeholder="777-21-09"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <Button type="submit">Add contact</Button>
        </AddUserForm>
      </Formik>
    </>
  );
};

Phonebook.propTypes = {
  onSubmit: PropTypes.func,
};
