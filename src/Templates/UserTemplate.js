import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atom/Input/Input';
import Paragraph from 'components/atom/Paragraph/Paragraph';
import Heading from 'components/atom/Heading/Heading';
import SideBar from '../components/orgamisms/Sidebar/Sidebar';

const StyledWrapper = styled.div`
  padding: 0 0 0 100px;
  display: flex;
`;
const StyledPageInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;
const UserTamplate = ({ children, cardType }) => (
  <StyledWrapper>
    <SideBar cardType={cardType} />
    <StyledPageInfo>
      <Input placeholder="search" search />
      <Heading>Stores</Heading>
      <Paragraph>4 items</Paragraph>
      <StyledInnerWrapper>{children}</StyledInnerWrapper>
    </StyledPageInfo>
  </StyledWrapper>
);

UserTamplate.propTypes = {
  children: PropTypes.element.isRequired,
  cardType: PropTypes.string.isRequired,
};

export default UserTamplate;
