import styled from '@emotion/styled';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #e6e6fa;
  width: 770px;
  margin-top: 50px;
  padding: 20px;
  border-radius: 16px;
  gap: 20px;
  list-style-type: none;
  text-align: left;
`;

export const Item = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
  border: 5px solid #483d88;
  border-radius: 16px;
`;

export const UserImg = styled.img`
  border-radius: 50%;
  border: 5px solid #483d88;
  display: block;
`;

export const UserStatusOn = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 5px solid #483d88;
  display: block;
  background-color: #00ff00;
`;

export const UserStatusOff = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 5px solid #483d88;
  display: block;
  background-color: #ff0000;
`;
