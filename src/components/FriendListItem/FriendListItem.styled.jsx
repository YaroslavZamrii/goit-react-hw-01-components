import styled from 'styled-components';

export const FriendItems = styled.li`
  display: flex;
  flex-direction: row;
  height: 70px;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #ffffffbd;
`;
export const FriendIsOnline = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 15px;
  margin-left: 15px;
  background-color: ${({ isOnline }) => {
    if (isOnline) {
      return 'green';
    }
    return 'red';
  }};
`;
export const FriendText = styled.p`
  margin-left: 30px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.75;
`;
