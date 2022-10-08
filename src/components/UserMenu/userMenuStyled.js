import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const UserName = styled.p`
  font-weight: 700;
`;
export const Button = styled.button`
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: #e84a5f;
  }
`;
