import styled from 'styled-components';

const Select = styled.select`
  ${tw`outline-none text-black p-1 bg-white`}
  width: 240px;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 2px 0 0 2px;
  font-size: 1.5rem;
  box-shadow: inset 0 1px 2px #eee;
`;

export default Select;
