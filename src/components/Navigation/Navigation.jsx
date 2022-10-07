import { useAuth } from 'hooks';
import { NavLinkStyled } from './navigationStyles';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLinkStyled to="/" end>
        Home
      </NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
    </nav>
  );
};
