import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess'

export default [
    {
        input: 'src/comic.ts',
        output: { 
            file: 'dist/comic.js',
            format: 'iife',
            name: 'comic',
         },
        plugins: [
            nodeResolve({
                browser: true,
                exportConditions: ['svelte'],
                extensions: ['.svelte']
            }),
            svelte({
                preprocess: sveltePreprocess({ typescript: { transpileOnly: true } }),
            }), 
            typescript(), terser()
        ],
    },
    {
        input: 'src/main.ts',
        output: { 
            file: 'dist/main.js', 
            format: 'iife',
            name: 'app',
        },
        plugins: [
            nodeResolve({
                browser: true,
                exportConditions: ['svelte'],
                extensions: ['.svelte']
            }),
            svelte({
                preprocess: sveltePreprocess({ typescript: { transpileOnly: true } }),
            }), 
            typescript(), terser()
        ],
    },
];