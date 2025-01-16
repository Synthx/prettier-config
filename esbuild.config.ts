import { build, type BuildOptions } from 'esbuild';

const commonOption: BuildOptions = {
    entryPoints: ['index.ts'],
    minify: true,
    platform: 'node',
};

await Promise.all([
    build({
        ...commonOption,
        format: 'esm',
        outfile: 'dist/index.mjs',
    }),
]);
