import { Html, Head, Main, NextScript } from 'next/document';
import { FavIcons } from '@volvo-cars/favicons/react';

function Document() {
  return (
    <Html lang="en">
      <Head title="Volvo - Global Online Digital">
        <FavIcons />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
