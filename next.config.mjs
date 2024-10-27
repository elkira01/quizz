/** @type {import('next').NextConfig} */
import {nextui} from "@nextui-org/react";

const nextConfig = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()]
};

export default nextConfig;
