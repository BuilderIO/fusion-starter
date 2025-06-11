import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors from the Figma design
        contoso: {
          brand: "#00095B",
          blue: "#0060CA",
          "light-blue": "#004E8C",
        },
        neutral: {
          "1": "#323130",
          "2": "#424242",
          "3": "#616161",
          "4": "#707070",
          stroke: "#D1D1D1",
          "stroke-accessible": "#616161",
          background: "#F5F5F5",
          "background-1": "#FFFFFF",
        },
        presence: {
          available: "#13A10E",
          busy: "#C50F1F",
          away: "#EAA300",
          offline: "#616161",
          oof: "#C239B3",
        },
        warning: {
          background: "#FEF7E7",
          border: "#F4BF53",
          foreground: "#BC4B09",
          icon: "#E7740B",
        },
        brand: {
          background: "#0060CA",
          foreground: "#FFFFFF",
          link: "#115E9B",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        segoe: [
          "Segoe UI",
          "-apple-system",
          "Roboto",
          "Helvetica",
          "sans-serif",
        ],
        raleway: [
          "Raleway",
          "-apple-system",
          "Roboto",
          "Helvetica",
          "sans-serif",
        ],
      },
      fontSize: {
        "2xs": ["10px", "14px"],
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        base: ["16px", "22px"],
        lg: ["18px", "24px"],
        xl: ["20px", "28px"],
        "2xl": ["24px", "32px"],
      },
      boxShadow: {
        card: "0px 0.3px 0.9px 0px rgba(0, 0, 0, 0.10), 0px 1.6px 3.6px 0px rgba(0, 0, 0, 0.13)",
        header:
          "0px 1px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 2px 0px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
