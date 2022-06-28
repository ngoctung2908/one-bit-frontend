module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#DFF3F9',
          100: '#AEDEF0',
          200: '#7CC9E6',
          300: '#50B4DC',
          400: '#35A4D6',
          500: '#1E96D0',
          600: '#1B89C2',
          700: '#1077AF',
          800: '#06689D',
          900: '#054A7A',
          dark: '#022437',
        },
        neutral: {
          100: '#F5F6F7',
          200: '#EDF1F2',
          300: '#E1E6E8',
          400: '#D0D6D9',
          500: '#BBC1C4',
          600: '#A1A7AB',
          700: '#82898C',
          800: '#606669',
          900: '#3A3E40',
          dark: '#101112',
        },
        accent: {
          blue: '#25AEF7',
          light: '#FFFFFF',
          dark: '#0B0B22',
          100: '#232338',
          200: '#18182E',
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
  plugins: [],
}
