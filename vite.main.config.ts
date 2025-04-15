import { defineConfig } from 'vite';

// https://vitejs.dev/config
/** @type {import('vite').UserConfig} */
export default defineConfig({
    resolve: {
        alias: {
            '@': '/src',
            '@types': '/src/types',
            '@components': '/src/components',
            '@assets': '/src/assets',
        },
    },
    publicDir: 'public',
});
