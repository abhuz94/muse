import PropTypes from 'prop-types';
import React, { useState } from 'react';
import cx from 'classnames';
import _map from 'lodash/map';

import Image from '../../atoms/Image';
import ImageViewerThumb from '../../molecules/ImageViewerThumb';

function ImageViewer({ className, imageURLs }) {
  const [imageURL, setImageURL] = useState(imageURLs[0]);

  return (
    <div>
      <div className={cx('w-full min-h-[50vmin] h-72 border p-4', className)}>
        <Image src={imageURL} objectFit="contain" />
      </div>
      <div className="mt-8 flex gap-5">
        {_map(imageURLs, (url) => <ImageViewerThumb key={url} src={url} onClick={setImageURL} />)}
      </div>
    </div>
  );
}

ImageViewer.propTypes = {
  className: PropTypes.string,
  imageURLs: PropTypes.arrayOf(PropTypes.string),
};

ImageViewer.defaultProps = {
  className: '',
  imageURLs: [],
};

export default ImageViewer;
