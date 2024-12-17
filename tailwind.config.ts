import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'contact-banner': "url('/assets/img/contact-banner.png')",
        'faq-banner': "url('/assets/img/faq-banner.png')",
        'main-banner': "url('/assets/img/main-banner.png')",
        'pc-banner': "url('/assets/img/pc-banner.png')",
        'auth-banner': "url('/assets/img/auth-banner.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
