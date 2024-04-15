import { colors } from "./src/styles/colors";
import { fontFamily } from "./src/styles/font-family";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily,
      colors
    }
  },
  plugins: []
};

export default config;
