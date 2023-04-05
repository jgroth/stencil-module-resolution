import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        sourcemap: true,
        lib: {
            name: 'my-lib',
            entry: {
                index: resolve(__dirname, 'src/index.ts'),
                foo: resolve(__dirname, 'src/foo/index.ts'),
            },
            formats: ['es', 'cjs'],
        },
    },
});
