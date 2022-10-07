import { AuthNavLink } from './authNavStyles';

export const AuthNav = () => {
  return (
    <div>
      <AuthNavLink to="/register">Register</AuthNavLink>
      <AuthNavLink to="/login">Log In</AuthNavLink>
    </div>
  );
};
