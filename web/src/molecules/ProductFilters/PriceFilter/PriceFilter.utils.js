/* eslint-disable import/prefer-default-export */

export const toGROQ = (key, min = 0, max = 0) => `@.${key} >= ${min.toFixed(2)} && @.${key} <= ${max.toFixed(2)}`;
