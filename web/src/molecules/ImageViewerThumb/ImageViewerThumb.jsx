import PropTypes from 'prop-types';
import React from 'react';
import _noop from 'lodash/noop';

import Button, { BUTTON_TYPES } from '../../atoms/Button';
import Image from '../../atoms/Image';

function ImageViewerThumb({ src, onClick }) {
  return (
    <Button className="px-1 py-1 gap-0 border" type={BUTTON_TYPES.TRANSPARENT} onClick={() => onClick(src)}>
      <Image src={src} width={48} height={48} layout="intrinsic" objectFit="cover" />
    </Button>
  );
}

ImageViewerThumb.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ImageViewerThumb.defaultProps = {
  onClick: _noop,
};

export default ImageViewerThumb;
