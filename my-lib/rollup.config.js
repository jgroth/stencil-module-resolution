import dts from 'rollup-plugin-dts';

export default [
    // Bundle declaration files
    {
        input: {
            index: './tmp/src/index.d.ts',
            foo: './tmp/src/foo/index.d.ts',
        },
        output: { dir: 'dist' },
        plugins: [
            dts(),
        ],
    },
];
