export const customTheme = (theme) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    neutral20: 'rgb(31 41 55 / 1);',
    neutral30: 'rgb(31 41 55 / 1);',
    primary: 'black',
  },
});

export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    cursor: state.isDisabled ? 'not-allowed' : 'pointer',
    pointerEvents: 'auto',
    transition: 'all 250ms linear',
    '&:hover': {
      borderColor: state.isDisabled ? 'transparent' : 'auto',
    },
    '.dropdown-indicator': {
      opacity: state.isDisabled ? '0.6' : '1',
    },
  }),
};
