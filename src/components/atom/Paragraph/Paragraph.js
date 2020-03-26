import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 10px;
  color: ${({ theme }) => theme.gray300};
`;

export default Paragraph;
