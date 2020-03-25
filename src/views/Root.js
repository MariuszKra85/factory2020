import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from '../componets/atom/Button';
import GlobalStyle from '../theme/GlobalStyle';

const theme = {
  primary: 'black',
};

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <p>hello</p>
          <Button>hello button</Button>
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
