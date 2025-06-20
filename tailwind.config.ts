import type { Config } from "tailwindcss";

export default {
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
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
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
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, 60px, 0)'
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)'
          }
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, -60px, 0)'
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)'
          }
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.8)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(-60px, 0, 0)'
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)'
          }
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(60px, 0, 0)'
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)'
          }
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)' 
          },
          '33%': { 
            transform: 'translateY(-15px) rotate(1deg)' 
          },
          '66%': { 
            transform: 'translateY(8px) rotate(-1deg)' 
          }
        },
        ticker: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 60px rgba(99, 102, 241, 0.6)' 
          }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.4, 0.0, 0.2, 1) forwards",
        "fade-in-down": "fadeInDown 0.8s cubic-bezier(0.4, 0.0, 0.2, 1) forwards",
        "scale-in": "scaleIn 0.6s cubic-bezier(0.4, 0.0, 0.2, 1) forwards",
        "slide-in-left": "slideInLeft 0.8s cubic-bezier(0.4, 0.0, 0.2, 1) forwards",
        "slide-in-right": "slideInRight 0.8s cubic-bezier(0.4, 0.0, 0.2, 1) forwards",
        "float": "float 8s ease-in-out infinite",
        "ticker": "ticker 80s linear infinite",
        "glow": "glow 3s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite"
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 40px rgba(0, 0, 0, 0.12)',
        'hard': '0 16px 60px rgba(0, 0, 0, 0.16)',
        'elegant': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 40px rgba(99, 102, 241, 0.15)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        'gradient-accent': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        'gradient-success': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        'grid-pattern': 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Cpath d="M0 40L40 0H20L0 20M40 40V20L20 40"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;