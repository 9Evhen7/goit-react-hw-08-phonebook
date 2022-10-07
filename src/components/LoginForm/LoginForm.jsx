import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Formik, Field } from 'formik';
import { LogForm, LoginLabel } from './loginFormStyles';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const form = values;
    dispatch(
      logIn({
        email: form.email,
        password: form.password,
      }),
    );
    actions.resetForm();
  };

  const initialValues = {
    email: '',
    name: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <LogForm autoComplete="off">
        <LoginLabel>
          Email
          <Field type="email" name="email" />
        </LoginLabel>
        <LoginLabel>
          Password
          <Field type="password" name="password" autoComplete="on" />
        </LoginLabel>
        <button type="submit">Log In</button>
      </LogForm>
    </Formik>
  );
};
