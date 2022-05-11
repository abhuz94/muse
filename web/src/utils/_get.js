import _get from 'lodash/get';

export default function get(object, path, defaultValue) {
  const value = _get(object, path, defaultValue);

  return value === null ? defaultValue : value;
}
