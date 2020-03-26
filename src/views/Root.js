import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import Button from '../components/atom/Button/Button';
import GlobalStyle from '../theme/GlobalStyle';
import Heading from '../components/atom/Heading/Heading';

function Root() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Button primary>hello button</Button>
          <Heading>hello</Heading>
        </>
      </ThemeProvider>
    </div>
  );
}

export default Root;
