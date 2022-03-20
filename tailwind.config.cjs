module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'spacing-left': 'margin-left, padding-left',
      },
      animation: {
        // 'gradient-x': 'gradient-x 15s ease infinite',
        // 'gradient-y': 'gradient-y 15s ease infinite',
        // 'gradient-xy': 'gradient-xy 15s ease infinite',
        blob: "blob 20s infinite",
        background: "blob 20s infinite",
      },
      keyframes: {
        // 'gradient-y': {
        //   '0%, 100%': {
        //     'background-size': '400% 400%',
        //     'background-position': 'center top'
        //   },
        //   '50%': {
        //     'background-size': '200% 200%',
        //     'background-position': 'center center'
        //   }
        // },
        // 'gradient-x': {
        //   '0%, 100%': {
        //     'background-size': '200% 200%',
        //     'background-position': 'left center'
        //   },
        //   '50%': {
        //     'background-size': '200% 200%',
        //     'background-position': 'right center'
        //   }
        // },
        // 'gradient-xy': {
        //   '0%, 100%': {
        //     'background-size': '400% 400%',
        //     'background-position': 'left center'
        //   },
        //   '50%': {
        //     'background-size': '200% 200%',
        //     'background-position': 'right center'
        //   }
        // },
        'bg-gradient-to-br': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          }
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.3)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
