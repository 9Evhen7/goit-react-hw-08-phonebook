import { ImBin } from 'react-icons/im';
import { DeleteButton } from 'styles/contactItemStyles';

export const ContactItem = ({ contact, onClick }) => {
  const { id, name, number } = contact;

  return (
    <>
      {name}: {number}{' '}
      <DeleteButton onClick={() => onClick(id)} id={id}>
        <ImBin />
      </DeleteButton>
    </>
  );
};
