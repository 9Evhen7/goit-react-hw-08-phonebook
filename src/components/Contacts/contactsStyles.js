import styled from 'styled-components';

const Item = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 4px;
  &:hover {
    color: #000000;
    background-color: rgb(239, 239, 239);
    border-radius: 5px;

    & button {
      color: #e84a5f;
    }
  }
`;

const List = styled.ul`
  text-align: center;
  padding: 0;
  max-width: 100%;
`;

export { List, Item };
