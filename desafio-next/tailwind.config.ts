import { Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColums: {
        'posts': "repeat(auto-fit, minmax(250px, 1ft))",
      },
      fontSize: {
        xsm: ['14px', '20px'],
        sm: ['16px', '19.5px'],
        base: ['20px', '32px'],
        lg: ['24px', '29.26px'],
        xl: ['40px', '55px'],
      },
      colors: {
        primary: '#FA8400',
        secondary: '#DFDFE4',
        terciary: "#DFDFE4",
        quaternaty: "#DFDFE4",
        background: '#023047',
      },
      fontFamily: {
        PressStart: ['PressStart', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
      }, gap: {
        '1': '15px',
        '11': '115px',
      }, spacing: {
        'b': '300px',
        'xb': '400px',
        "xl": "1240px",
      },
    },
  },
  plugins: [],
};
export default config;
