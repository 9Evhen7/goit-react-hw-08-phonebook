import PropTypes from 'prop-types';

export const Filter = ({ onFilter }) => {
  return (
    <>
      <p>Find contact by name</p>
      <input
        type="text"
        name="filter"
        placeholder="Enter name"
        onChange={e => onFilter(e.target.value)}
      />
    </>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func,
};
