module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          0: '#06689D',
          light: {
            1: '#1077AF',
            2: '#1B89C2',
            3: '#1E96D0',
            4: '#35A4D6',
            5: '#50B4DC',
            6: '#7CC9E6',
            7: '#AEDEF0',
            8: '#DFF3F9',
          },
          dark: {
            1: '#022437',
            2: '#054A7A',
          },
        },
        neutral: {
          1: '#F5F6F7',
          2: '#EDF1F2',
          3: '#E1E6E8',
          4: '#D0D6D9',
          5: '#BBC1C4',
          6: '#A1A7AB',
          7: '#82898C',
          8: '#606669',
          9: '#3A3E40',
          10: '#101112',
        },
        accent: {
          dark: {
            0: '#0B0B22',
            1: '#18182E',
            2: '#232338',
          },
          light: '#FFFFFF',
          blue: '#25AEF7',
        },
        success: {
          1: '#355F01',
          2: '#9BC937',
          3: '#DFF697',
        },
        info: {
          1: '#014A76',
          2: '#3DD6E0',
          3: '#98F9F0',
        },
        warning: {
          1: '#7A2B01',
          2: '#E4993E',
          3: '#FAD899',
        },
        danger: {
          1: '#770724',
          2: '#E1594C',
          3: '#FAB8A1',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
