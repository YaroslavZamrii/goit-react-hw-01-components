import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background-color: rgb(52 172 215);
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableHeadCell = styled.th`
  padding: 12px;
  text-align: left;
`;

export const TableCell = styled.td`
  padding: 12px;
`;
