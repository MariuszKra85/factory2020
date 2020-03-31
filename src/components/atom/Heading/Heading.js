import styled from 'styled-components';

const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 0;
  padding: 10px;
  border: none;
  background-color: ${({ theme, cardType }) => theme[cardType]};
`;

export default Heading;
