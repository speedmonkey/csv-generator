import styled from 'styled-components';
import { colors } from 'root/tailwind';

const Table = styled.div`
  ${tw`flex flex-col`}
  width: unset;
  border: 1px solid ${colors.spacerLight};
  border-left: 0px;
  border-collapse: collapse;
  input:nth-child(even),
  div:nth-child(even) {
    background: ${colors.body};
  }
`;

export default Table;
