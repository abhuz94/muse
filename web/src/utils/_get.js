import _lodashGet from 'lodash/get';

// eslint-disable-next-line no-underscore-dangle
export default function _get(object, path, defaultValue) {
  const value = _lodashGet(object, path, defaultValue);

  return value === null ? defaultValue : value;
}
