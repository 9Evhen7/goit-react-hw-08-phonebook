import { useDispatch } from 'react-redux';
import { setFilterQuery } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = query => {
    dispatch(setFilterQuery(query));
  };

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
