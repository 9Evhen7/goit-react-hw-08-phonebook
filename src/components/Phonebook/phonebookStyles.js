import { Form, Field } from 'formik';
import styled from 'styled-components';

const AddUserForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  width: fit-content;
  border-radius: 4px;
  padding: 4px;
  border: none;
  &:hover {
    background-color: #e84a5f;
  }
`;
const Label = styled.label`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
const Input = styled(Field)`
  margin-bottom: 10px;
`;

export { AddUserForm, Button, Label, Input };
