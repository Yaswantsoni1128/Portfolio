import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        background: {
          DEFAULT: "hsl(var(--background))",
          secondary: "hsl(var(--background-secondary))",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          secondary: "hsl(var(--foreground-secondary))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          secondary: "hsl(var(--accent-secondary))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border: "hsl(var(--border))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "slide-left": "slideLeft 0.6s ease-out",
        "slide-right": "slideRight 0.6s ease-out",
        "scale-up": "scaleUp 0.3s ease-out",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "bounce-slow": "bounce 3s infinite",
        "gradient": "gradient 3s ease infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { 
            opacity: "0",
            transform: "translateY(50px)",
          },
          to: { 
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideDown: {
          from: { 
            opacity: "0",
            transform: "translateY(-30px)",
          },
          to: { 
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideLeft: {
          from: { 
            opacity: "0",
            transform: "translateX(50px)",
          },
          to: { 
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideRight: {
          from: { 
            opacity: "0",
            transform: "translateX(-50px)",
          },
          to: { 
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        scaleUp: {
          from: { 
            opacity: "0",
            transform: "scale(0.9)",
          },
          to: { 
            opacity: "1",
            transform: "scale(1)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: {
            boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
          },
          to: {
            boxShadow: "0 0 30px rgba(147, 51, 234, 0.8), 0 0 40px rgba(147, 51, 234, 0.3)",
          },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 5px rgba(147, 51, 234, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(147, 51, 234, 0.8), 0 0 30px rgba(147, 51, 234, 0.4)",
          },
        },
        gradient: {
          "0%, 100%": {
            backgroundPosition: "0% 50%"
          },
          "50%": {
            backgroundPosition: "100% 50%"
          }
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
