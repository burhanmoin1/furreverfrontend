module.exports = {
    theme: {
      extend: {
        animation: {
          'fast-bounce': 'bounceUpDown 0.3s infinite ease-in-out',
        },
        keyframes: {
          bounceUpDown: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
        },
      },
    },
    plugins: [],
  };
  