import { StyleProvider, ThemePicker } from 'vcc-ui';
import '../public/css/styles.css';
import React from 'react';
import { AppProps } from 'next/app';

function HomePage({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant={'light'}>
          <Component {...pageProps} />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
