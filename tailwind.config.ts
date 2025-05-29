import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
],
theme: {
  extend: {
    colors: {
      'qubix-pink': '#ff3bac',
      'qubix-blue': '#90e2ea',
      'qubix-soft-pink': '#e9b6c1',
      'qubix-midnight': '#0a0a23',
    },
    backgroundImage: {
      'qubix-hero': 'radial-gradient(circle at top left, #ff3bac, #0a0a23 70%)',
      'qubix-gradient': 'linear-gradient(135deg, #a5bde6, #c8b4d8)',
    },
  },
},


  plugins: [],
} satisfies Config;
