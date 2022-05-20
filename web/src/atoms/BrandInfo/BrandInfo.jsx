import { MdVerified } from 'react-icons/md';
import PropTypes from 'prop-types';
import React from 'react';

import PropertyControlledComponent from '../PropertyControlledComponent';

function BrandInfo({ prefix, name, isVerified }) {
  return (
    <div className="flex items-center italic text-xs text-gray-400">
      <PropertyControlledComponent shouldRender={prefix}>
        <span>
          {prefix}
          &nbsp;
        </span>
      </PropertyControlledComponent>
      <span>{name}</span>
      <PropertyControlledComponent shouldRender={isVerified}>
        <MdVerified size={18} className="text-blue-800 ml-1" />
      </PropertyControlledComponent>
    </div>
  );
}

BrandInfo.propTypes = {
  name: PropTypes.string.isRequired,
  prefix: PropTypes.string,
  isVerified: PropTypes.bool,
};

BrandInfo.defaultProps = {
  prefix: 'by',
  isVerified: false,
};

export default BrandInfo;
