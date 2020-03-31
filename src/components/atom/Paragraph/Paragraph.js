import styled from 'styled-components';

const Paragraph = styled.p`
  padding: 0 10px 10px;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.gray300};
`;

export default Paragraph;
