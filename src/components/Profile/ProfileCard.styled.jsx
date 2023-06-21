import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 0 auto;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfileAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
`;

export const Tag = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 5px;
`;

export const Location = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  color: #666;
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;

export const StatLabel = styled.span`
  font-weight: bold;
  color: #555;
  font-size: 14px;
`;

export const StatQuantity = styled.span`
  color: #333;
  font-weight: bold;
  font-size: 18px;
`;
