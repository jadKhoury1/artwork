import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: 'localhost',  // Use '0.0.0.0' if you want it accessible on other devices
        port: 5173,         // Default port for Vite
        strictPort: true,   // Ensure it uses the specified port
    }
});
