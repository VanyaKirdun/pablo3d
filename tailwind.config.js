/** @type {import('tailwindcss').Config} */
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
		fontFamily: {
			sans: ["Inter Variable", "Helvetica", "sans-serif"],
			mono: ["Ubuntu Sans Mono Variable"],
		},
		container: {
			center: "true",
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
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			backgroundImage: {
				checkered:
					"url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='gray' viewBox='0 0 16 16'><path d='M8 0h8v8H8zM0 8h8v8H0z'/></svg>\")",
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
			},
			dropShadow: {
				"md-reverse":
					"0 -4px 3px rgb(0 0 0 / 0.07), 0 -2px 2px rgb(0 0 0 / 0.06)",
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			textShadow: {
				sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
				md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
				lg: "3px 3px 6px rgba(0, 0, 0, 0.5)",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		({ addUtilities }) => {
			const newUtilities = {
				".text-shadow-sm": {
					textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
				},
				".text-shadow-md": {
					textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
				},
				".text-shadow-lg": {
					textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
				},
				".text-shadow-none": {
					textShadow: "none",
				},
				".transform-left":{
					transform: "translate(100%, 0)"
				},
				".transform-bottom":{
					transform: "translate(0, 100%)"
				},
				".transform-zero":{
					transform: "translate(0, 0)"
				},
				
			};

			addUtilities(newUtilities, ["responsive", "hover"]);
		},
	],
};
