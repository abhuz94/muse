import {
  Html, Head, Main, NextScript,
} from 'next/document';
import React from 'react';

function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="text-gray-800 bg-stone-50 p-2 h-screen">
        <div className="overflow-auto h-[calc(100%-4rem)] md:h-full">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}

export default Document;
