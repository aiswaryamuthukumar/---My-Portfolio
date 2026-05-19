export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#E8B4AA',
        accent: '#D89A8F',
        surface: '#09111A',
        section: '#04070D',
        background: '#04070D',
        muted: '#AFAFAF',
      },
      boxShadow: {
        glow: '0 0 80px rgba(216, 154, 143, 0.12)',
        soft: '0 18px 80px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at right, rgba(216, 154, 143, 0.12), transparent 34%)',
      },
    },
  },
  plugins: [],
};
