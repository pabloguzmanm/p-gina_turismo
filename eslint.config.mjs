import globals from 'globals';
import pluginJs from '@eslint/js';
import html from '@html-eslint/eslint-plugin';
import htmlParser from '@html-eslint/parser';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    ...html.configs['flat/recommended'], // configuraciones recomendadas por librería
    files: ['**/*.html'], // analizamos archivos html
    plugins: {
      '@html-eslint': html // plugin para analizar HTML
    },
    languageOptions: {
      parser: htmlParser // analizar de código HTML
    },
    rules: {
      '@html-eslint/indent': ['error', 2], // indentación con 2 espacios
      '@html-eslint/no-duplicate-id': 'error', // no duplicación de id
      '@html-eslint/no-duplicate-attrs': 'error', // no duplicación de atributos
      '@html-eslint/require-doctype': 'error', // se requiere etiqueta doctype
      '@html-eslint/require-li-container': 'error', // li deben estar dentro de menu, ul, ol
      '@html-eslint/require-meta-charset': 'error', // charset (conjunto de caracteres)
      '@html-eslint/no-script-style-type': 'error', // no agregar estilos en línea
      '@html-eslint/require-closing-tags': ['error', { selfClosing: 'always' }] // requiere cierre de etiquetas, o barra diagonal en autocierre
    }
  }
];
