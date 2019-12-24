import styled from 'styled-components';
import { colors } from 'root/tailwind';

const Input = styled.input`
  ${tw`outline-none text-black p-1`}
  width: 250px;
  height: 15px;
  border: 2px solid ${colors.gray};
  border-radius: 5px;
  font-size: 1.5rem;
  box-shadow: inset 0 1px 2px #eee;
  &:focus {
    border: 2px solid ${colors.blueLight};
  }
  @media (max-width: 768px) {
    width: 200px;
  }
`;

export default Input;
