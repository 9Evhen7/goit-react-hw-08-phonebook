import styled from 'styled-components';

const DeleteButton = styled.button`
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: #8787e8;
  }
`;
export const ContactItem = ({ contact, onClick }) => {
  const { id, name, number } = contact;

  return (
    <>
      {name}: {number}{' '}
      <DeleteButton onClick={onClick} id={id}>
        Delete
      </DeleteButton>
    </>
  );
};
