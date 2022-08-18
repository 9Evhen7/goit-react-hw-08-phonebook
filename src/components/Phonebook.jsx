import { Formik, Field, Form } from 'formik';
import styled from 'styled-components';

const AddUserForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: solid black 1px;
  padding: 8px;
  padding-right: 150px;
`;
const Button = styled.button`
  width: fit-content;
  border-radius: 4px;
  padding: 4px;
  border: none;
  &:hover {
    background-color: #8787e8;
  }
`;
const Label = styled.label`
  margin-bottom: 8px;
`;
const Input = styled(Field)`
  margin-bottom: 20px;
`;

export const PhonebookForm = ({ onSubmit }) => {
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
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Label htmlFor="number">Number</Label>
          <Input
            type="tel"
            name="number"
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
