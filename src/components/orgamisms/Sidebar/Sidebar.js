import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonIcon from 'components/atom/ButtonIcon/ButtonIcon';

import LogoIcon from 'assets/icons/Logo.svg';
import StoreIcon from 'assets/icons/store.svg';
import ProcessIcon from 'assets/icons/process.svg';
import ScaleIcon from 'assets/icons/scale.svg';
import ChillIcon from 'assets/icons/chill.svg';
import LogoutIcon from 'assets/icons/logout.svg';

const StyledWrapper = styled.nav`
  width: 100px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme, cardType }) => theme[cardType]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const StyledInnerWrapper = styled.div`
  position: relative;
  margin-bottom: 2vh;
  background-color: transparent;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  width: 75px;
  height: 75px;
  margin-top: auto;
`;

const SideBar = ({ cardType }) => (
  <StyledWrapper cardType={cardType}>
    <ButtonIcon as={Link} to="/" icon={LogoIcon} />
    <StyledInnerWrapper>
      <ButtonIcon as={NavLink} to="/store" icon={StoreIcon} activeclass="active" />
      <ButtonIcon as={NavLink} to="/process" icon={ProcessIcon} activeclass="active" />
      <ButtonIcon as={NavLink} to="/scale" icon={ScaleIcon} activeclass="active" />
      <ButtonIcon as={NavLink} to="/chill" icon={ChillIcon} activeclass="active" />
    </StyledInnerWrapper>
    <StyledLogoutButton icon={LogoutIcon} color={cardType} />
  </StyledWrapper>
);
SideBar.propTypes = {
  cardType: PropTypes.oneOf(['store', 'process', 'scale', 'chill']).isRequired,
};
export default SideBar;
