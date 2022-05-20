export const BUTTON_TYPES = Object.freeze({
  PRIMARY: 'PRIMARY',
  SUCCESS: 'SUCCESS',
  WARN: 'WARN',
  DANGER: 'DANGER',
  INFO: 'INFO',
  TRANSPARENT: 'TRANSPARENT',
});

export const BUTTON_STYLES = Object.freeze({
  [BUTTON_TYPES.PRIMARY]: {
    className: 'bg-gray-800 text-white',
    disabled: 'opacity-60',
    '!disabled': 'hover:shadow-2xl hover:scale-105',
    '!allowed': 'cursor-not-allowed',
  },
  [BUTTON_TYPES.SUCCESS]: {
    className: 'bg-green-300 text-green-800',
    disabled: 'opacity-60',
    '!disabled': 'hover:shadow-2xl hover:scale-105',
    '!allowed': 'cursor-not-allowed',
  },
  [BUTTON_TYPES.WARN]: {
    className: 'bg-yellow-300 text-yellow-800',
    disabled: 'opacity-60',
    '!disabled': 'hover:shadow-2xl hover:scale-105',
    '!allowed': 'cursor-not-allowed',
  },
  [BUTTON_TYPES.DANGER]: {
    className: 'bg-red-200 text-red-800',
    disabled: 'opacity-60',
    '!disabled': 'hover:shadow-2xl hover:scale-105',
    '!allowed': 'cursor-not-allowed',
  },
  [BUTTON_TYPES.INFO]: {
    className: 'bg-blue-200 text-blue-800',
    disabled: 'opacity-60',
    '!disabled': 'hover:shadow-2xl hover:scale-105',
    '!allowed': 'cursor-not-allowed',
  },
  [BUTTON_TYPES.TRANSPARENT]: {
    disabled: 'opacity-60',
    '!disabled': 'hover:shadow-2xl hover:scale-105',
    '!allowed': 'cursor-not-allowed',
  },
});
