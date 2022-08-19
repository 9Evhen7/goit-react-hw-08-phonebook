import styled from 'styled-components';

const Wraper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

  padding: 16px;
  max-width: 300px;

  background-image: radial-gradient(
    circle,
    #343637,
    #4b4e4f,
    #646868,
    #7f8281,
    #9b9e9c
  );

  color: white;
`;

const Title = styled.h2`
  margin: 0;
`;

export { Wraper, Title };
