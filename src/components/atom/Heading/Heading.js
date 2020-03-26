import styled from 'styled-components';

const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 10px;
  border: none;
  background-color: ${({ theme }) => theme.primary};
`;

export default Heading;
