export const Filter = ({ onFilter }) => {
  return (
    <>
      <p>Find contact by name</p>
      <input
        type="text"
        name="filter"
        placeholder="Enter name"
        onChange={onFilter}
      />
    </>
  );
};
