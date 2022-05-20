import { MdOutlineBrokenImage } from 'react-icons/md';
import PropTypes from 'prop-types';
import NextImage from 'next/image';
import React, { useState } from 'react';

import { shimmer, toBase64 } from './Image.utils';
import PropertyControlledComponent from '../PropertyControlledComponent';

function BrokenImage() {
  return (
    <div className="w-full h-full bg-gray-800 text-stone-50 flex items-center justify-center">
      <MdOutlineBrokenImage />
    </div>
  );
}

function Image({
  alt, src, width, height, objectFit, unoptimized, layout,
}) {
  const [error, setError] = useState(null);

  try {
    return (
      <div style={{ width, height }} className="relative">
        <PropertyControlledComponent shouldRender={error}>
          <BrokenImage />
        </PropertyControlledComponent>
        <PropertyControlledComponent shouldRender={!error}>
          <NextImage
            alt={alt}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
            className="transition-300"
            layout={layout}
            placeholder="blur"
            src={src}
            width={layout === 'fill' ? null : width}
            height={layout === 'fill' ? null : height}
            objectFit={objectFit}
            unoptimized={unoptimized}
            onError={(e) => setError(e)}
          />
        </PropertyControlledComponent>
      </div>
    );
  } catch (err) {
    return <BrokenImage />;
  }
}

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  objectFit: PropTypes.string,
  unoptimized: PropTypes.bool,
  layout: PropTypes.string,
};

Image.defaultProps = {
  alt: '',
  src: '/',
  width: '100%',
  height: '100%',
  objectFit: 'none',
  unoptimized: false,
  layout: 'fill',
};

export default Image;
