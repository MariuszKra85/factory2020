import styled, { css } from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1.25em;
  border: none;
  border-radius: 30px;
  background-color: ${({ theme, cardType }) => theme[cardType]};
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      padding: 0.5em 1em;
      font-size: 0.6em;
      background-color: ${({ theme }) => theme.grey100};
    `};
`;

export default Button;
