import styled from 'styled-components';

const Button = styled.button`
  display: block;
  margin: 0em;
  width: 65px;
  height: 65px;
  border: none;
  border-radius: 20px;
  background-color: ${({ theme, color }) => theme[color]};
  background-image: url(${({ icon }) => icon});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.6s;

  &.active {
    background-color: #ffff;
  }
`;

export default Button;
