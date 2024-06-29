import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
    {
        input: 'src/comic.ts',
        output: { file: 'dist/comic.js' },
        plugins: [nodeResolve({ browser: true }), typescript(), terser()],
    },
    {
        input: 'src/main.ts',
        output: { file: 'dist/main.js' },
        plugins: [typescript(), terser()],
    },
];