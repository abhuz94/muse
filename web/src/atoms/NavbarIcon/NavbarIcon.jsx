import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

function NavbarIcon({
  className, children, isActive, isDisabled,
}) {
  return (
    <motion.div
      whileHover={isDisabled ? {} : { scale: 1.2 }}
      whileTap={isDisabled ? {} : {
        scale: 0.8,
        borderRadius: '100%',
      }}
      className={cx(
        'navbar-icon',
        {
          'rounded-xl': isActive,
          'opacity-60 cursor-not-allowed': isDisabled,
        },
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

NavbarIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

NavbarIcon.defaultProps = {
  className: '',
  isActive: false,
  isDisabled: false,
};

export default NavbarIcon;
