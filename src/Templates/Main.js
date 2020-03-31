import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import PropTypes from 'prop-types';

const Main = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  </>
);
Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
