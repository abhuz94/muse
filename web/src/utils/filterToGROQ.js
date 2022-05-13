export const brand = (filter) => {
  if (filter.value === null) { return ''; }

  return `${filter.key} in [${filter.value}]`;
};

export const price = (filter) => {
  if (filter.value === null) { return ''; }

  return `${filter.key} >= ${filter.value.min.toFixed(2)} && ${filter.key} <= ${filter.value.max.toFixed(2)}`;
};

export const rating = (filter) => {
  if (filter.value === null) { return ''; }

  return `${filter.key} >= ${filter.value}`;
};

export default function toFilterString() {}
