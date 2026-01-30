import type { Config } from 'prettier';

export default {
    printWidth: 120,
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    plugins: [
        import.meta.resolve('prettier-plugin-css-order'),
        import.meta.resolve('prettier-plugin-organize-attributes'),
        import.meta.resolve('prettier-plugin-organize-imports'),
    ],
    attributeGroups: [
        '$DEFAULT',
        '^data-',
        '$ANGULAR_INPUT',
        '$ANGULAR_TWO_WAY_BINDING',
        '$ANGULAR_OUTPUT',
        '$ANGULAR_STRUCTURAL_DIRECTIVE',
    ],
    attributeSort: 'ASC',
} satisfies Config;
