/* eslint-disable react/jsx-props-no-spreading */

import Link from 'next/link';
import React from 'react';

export default function withLink(WrappedComponent, href = '#') {
  return function hoc(props) {
    return (
      <Link href={href}>
        <a href={href}>
          <WrappedComponent {...props} />
        </a>
      </Link>
    );
  };
}
