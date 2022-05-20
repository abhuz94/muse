import PropTypes from 'prop-types';
import React from 'react';

function Label({ id, children, className }) {
  return (
    <label htmlFor={id} className={className}>{children}</label>
  );
}

Label.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Label.defaultProps = {
  className: '',
};

export default Label;
