import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Formik, Field } from 'formik';
import { RegForm, RegisterLabel } from './registerFormStyles';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    const form = values;
    dispatch(
      register({
        name: form.name,
        email: form.email,
        password: form.password,
      }),
    );
    actions.resetForm();
  };

  const initialValues = {
    email: '',
    name: '',
    password: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <RegForm autoComplete="off">
        <RegisterLabel>
          Username
          <Field type="text" name="name" />
        </RegisterLabel>
        <RegisterLabel>
          Email
          <Field type="email" name="email" />
        </RegisterLabel>
        <RegisterLabel>
          Password
          <Field type="password" name="password" autoComplete="on" />
        </RegisterLabel>
        <button type="submit">Register</button>
      </RegForm>
    </Formik>
  );
};
