/* eslint-disable import/prefer-default-export */

import _get from 'lodash/get';
import _map from 'lodash/map';

export const toGROQ = (key, brands) => (brands.length ? `@.${key}->slug.current in [${_map(brands, (brand) => `"${_get(brand, 'value')}"`)}]` : '');
