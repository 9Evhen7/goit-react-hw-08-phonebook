import { Formik, Field, Form } from 'formik';
import styled from 'styled-components';

const AddUserForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Button = styled.button`
  display: inline-block;
  border-radius: 5px;
  padding: 2px;
`;
const Label = styled.label`
  display: flex;
  justify-content: space-between;
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
          <Label htmlFor="name">
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label htmlFor="number">
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>

          <Button type="submit">Add new user</Button>
        </AddUserForm>
      </Formik>
    </>
  );
};
