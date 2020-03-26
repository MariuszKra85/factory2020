import styled from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.primary};
`;

export default Button;
