export const ContactItem = ({ contact, onClick }) => {
  const { id, name, number } = contact;

  return (
    <>
      {name}: {number}
      <button onClick={onClick} id={id}>
        Delete
      </button>
    </>
  );
};
