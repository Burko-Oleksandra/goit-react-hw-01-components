import styled from '@emotion/styled';

export const Wrapper = styled.table`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #e6e6fa;
  width: 770px;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 20px;
  border-radius: 16px;
  list-style-type: none;
  text-align: left;
`;

export const TableHead = styled.tr`
  display: flex;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 10px;
  border: 5px solid #483d88;
`;

export const TableHeadName = styled.th`
  display: flex;
  justify-content: center;
  width: 33%;
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border: 5px solid #483d88;
  border-top: none;
`;

export const TableColumn = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-of-type(odd) {
    background: #6a5acd; /* Цвет фона */
  }
`;

export const TableElem = styled.td`
  display: flex;
  width: 33%;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
