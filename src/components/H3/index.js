import styled from 'styled-components';
import { colors } from 'root/tailwind';

const H3 = styled.h3`
  ${tw`m-0 p-2 text-h3 font-medium
    text-center`};
  border-bottom: 2px solid ${colors.spacer};
`;

export default H3;
