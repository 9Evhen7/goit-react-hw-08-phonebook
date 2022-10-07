import { Form, Field } from 'formik';
import styled from 'styled-components';

const AddUserForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
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

export { AddUserForm, Button, Label, Input };
