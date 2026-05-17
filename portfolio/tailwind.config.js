export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#FF004F',
        accent: '#C3073F',
        surface: '#111114',
        section: '#0B0B0F',
        background: '#050505',
        muted: '#B8B8B8',
      },
      boxShadow: {
        glow: '0 0 80px rgba(255,0,79,0.16)',
        soft: '0 18px 80px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at right, rgba(255,0,79,0.16), transparent 34%)',
      },
    },
  },
  plugins: [],
};
