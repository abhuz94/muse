module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        rotate: 'rotate 500ms linear infinite',
      },
    },
  },
  plugins: [],
};
