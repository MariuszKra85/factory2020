import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atom/Input/Input';
import Paragraph from 'components/atom/Paragraph/Paragraph';
import Heading from 'components/atom/Heading/Heading';
import ButtonIcon from 'components/atom/ButtonIcon/ButtonIcon';
import plus from 'assets/icons/plus.svg';
import SideBar from '../components/orgamisms/Sidebar/Sidebar';
import NewItemBar from '../components/orgamisms/NewItemBar/NewItemBar';

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
const StyledButtonIcon = styled(ButtonIcon)`
  z-index: 9999;
  position: fixed;
  bottom: 30px;
  right: 30px;
  border-radius: 50%;
`;
class UserTamplate extends Component {
  state = {
    isNewItemBarVisible: false,
  };

  handleNewItemBarToggle = () => {
    this.setState((prevState) => ({ isNewItemBarVisible: !prevState.isNewItemBarVisible }));
  };

  render() {
    const { children, cardType } = this.props;
    const isVisible = this.state.isNewItemBarVisible;

    return (
      <StyledWrapper>
        <SideBar cardType={cardType} />
        <StyledPageInfo>
          <Input placeholder="search" search />
          <Heading>{cardType}</Heading>
          <Paragraph>4 items</Paragraph>
          <StyledInnerWrapper>{children}</StyledInnerWrapper>
          <NewItemBar cardType={cardType} isVisible={isVisible} />
          <StyledButtonIcon icon={plus} color={cardType} onClick={this.handleNewItemBarToggle} />
        </StyledPageInfo>
      </StyledWrapper>
    );
  }
}

UserTamplate.propTypes = {
  children: PropTypes.oneOfType(PropTypes.object, PropTypes.node, PropTypes.array),
  cardType: PropTypes.string.isRequired,
};
UserTamplate.defaultProps = {
  children: null,
};

export default UserTamplate;
