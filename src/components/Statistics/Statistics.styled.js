import styled from '@emotion/styled';

export const Wrapper = styled.section`
  text-align: center;
  background-color: #e6e6fa;
  width: 800px;
  margin-top: 50px;
  padding-top: 20px;
  border-radius: 16px;
`;

export const Stats = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  margin: 15px;
  gap: 15px;
  list-style-type: none;
`;

export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  width: 110px;
  height: 120px;
  padding: 5px;
  gap: 5px;
  border-radius: 16px;
  border: 5px solid #483d88;
`;

export const Label = styled.span`
  padding-bottom: 10px;
  border-bottom: 5px solid #483d88;
`;
