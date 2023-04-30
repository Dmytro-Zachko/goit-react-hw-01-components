import styled from '@emotion/styled'

export const Table = styled.table`
margin: ${props => props.theme.spacing(3)} auto 0px;
width: 660px;
box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7);
`
export const TableHead = styled.th`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    width: 220px;
    padding: 12px 20px;
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
`
export const TableData = styled.td`
  text-align: center;
  width: 220px;
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};
  color: ${props => props.theme.colors.grey};
text-transform: ${props => props.firstColumn && 'capitalize'};
`;

export const TableRaw = styled.tr`
  color: ${props => props.theme.colors.white};
  :nth-of-type(2n) {
    background-color: ${props => props.theme.colors.backgroundColor};
  }
`;