import styled from 'styled-components';

const Paragraph = styled.p`
  padding: 0 10px 10px;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: uppercase;
  color: ${({ theme }) => theme.gray300};
`;

export default Paragraph;
