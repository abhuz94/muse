/* eslint-disable import/prefer-default-export */

export const toGROQ = (key, rating = null) => (rating === null ? '' : `@.${key} >= ${rating}`);
