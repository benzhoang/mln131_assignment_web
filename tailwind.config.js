/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fef2f2',
                    100: '#fee2e2',
                    500: '#dc2626',
                    600: '#dc2626',
                    700: '#b91c1c',
                },
                secondary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                }
            },
            fontFamily: {
                'vietnamese': ['Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
