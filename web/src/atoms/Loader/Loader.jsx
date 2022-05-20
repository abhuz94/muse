import { CgSpinner } from 'react-icons/cg';
import PropTypes from 'prop-types';
import React from 'react';
import cs from 'classnames';

import { LOADER_DIMENSIONS, LOADER_STYLES } from './Loader.constants';
import _get from '../../utils/_get';

function Loader({ dim }) {
  return <CgSpinner className={cs('animate-rotate', _get(LOADER_STYLES, dim))} />;
}

Loader.propTypes = {
  dim: PropTypes.oneOf(Object.values(LOADER_DIMENSIONS)),
};

Loader.defaultProps = {
  dim: LOADER_DIMENSIONS.MEDIUM,
};

export default Loader;
