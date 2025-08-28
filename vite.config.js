import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/starwars-app/',
    server: {
        proxy: {
            "/api": {
                target: "https://sw-info-api.herokuapp.com",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api/, ""), // убираем /api из запроса
            },
        },
    },
})
