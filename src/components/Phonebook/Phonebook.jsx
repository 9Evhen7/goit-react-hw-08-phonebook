import { Formik } from 'formik';
import { AddUserForm, Button, Label, Input } from './phonebookStyles';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

export const Phonebook = () => {
  const dispatch = useDispatch();

  const existingNames = useSelector(state => state.contacts.items).map(
    contact => contact.name,
  );

  const handleSubmit = (values, actions) => {
    if (existingNames.includes(values.name)) {
      alert('Contact whith the same name already exist!');
    } else {
      dispatch(addContact(values));
    }
    actions.resetForm();
  };

  const initialValues = {
    name: '',
    number: '',
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <AddUserForm autoComplete="off">
          <Label htmlFor="name">
            <>Name</>
            <Input
              type="text"
              name="name"
              placeholder="Evhen Melnicuk"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>

          <Label htmlFor="number">
            <>Number</>
            <Input
              type="tel"
              name="number"
              placeholder="777-21-09"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>

          <Button type="submit">Add contact</Button>
        </AddUserForm>
      </Formik>
    </>
  );
};
