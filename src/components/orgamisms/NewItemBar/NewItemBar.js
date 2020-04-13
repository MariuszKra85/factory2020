import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atom/Heading/Heading';
import Button from 'components/atom/Button/Button';
import Input from 'components/atom/Input/Input';

const StyledWrapper = styled.div`
  width: 300px;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  border-left: 10px solid ${({ theme, color }) => theme[color]};
  background-color: white;
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.6s ease-in-out;
`;

const NewItemBar = ({ cardType, isVisible }) => (
  <StyledWrapper color={cardType} isVisible={isVisible}>
    <Heading>Add new Item to Store</Heading>
    <Input placeholder="text" />
    <Input placeholder="text" />
    <Input placeholder="text" />
    <Input placeholder="text" />
    <Input placeholder="text" />

    <Button cardType={cardType}>Add</Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  cardType: PropTypes.string.isRequired,
  isVisible: PropTypes.string.isRequired,
};
export default NewItemBar;
