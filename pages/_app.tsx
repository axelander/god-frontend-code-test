import { StyleProvider, ThemePicker } from 'vcc-ui';
import '../public/css/styles.css';
import React, { useState } from 'react';
import { AppProps } from 'next/app';

function HomePage({ Component, pageProps }: AppProps) {
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>('light');
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant={selectedTheme}>
          <Component {...pageProps} />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
