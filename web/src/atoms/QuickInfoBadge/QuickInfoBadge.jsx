import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import { QUICK_INFO_BADGE_STYLES, QUICK_INFO_BADGE_TYPES } from './QuickInfoBadge.constants';
import _get from '../../utils/_get';

function QuickInfoBadge({ children, className, type }) {
  return (
    <div
      className={
        cx(
          _get(QUICK_INFO_BADGE_STYLES, type, QUICK_INFO_BADGE_STYLES.NEUTRAL),
          'px-2 py-1 text-xs flex items-center gap-1',
          className,
        )
      }
    >
      {children}
    </div>
  );
}

QuickInfoBadge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

QuickInfoBadge.defaultProps = {
  className: '',
  type: QUICK_INFO_BADGE_TYPES.NEUTRAL,
};

export default QuickInfoBadge;
