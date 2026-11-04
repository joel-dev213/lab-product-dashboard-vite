import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { transformSync } from 'rolldown/utils'

// Vite 8 parses JSX only in .jsx/.tsx files by default. This project uses
// index.js and App.js, so compile JSX in .js files before Vite handles them.
function jsxInJs() {
  return {
    name: 'jsx-in-js',
    enforce: 'pre',
    transform(code, id) {
      const [filepath] = id.split('?')
      if (!filepath.endsWith('.js') || filepath.includes('/node_modules/')) return

      const result = transformSync(filepath, code, {
        lang: 'jsx',
        jsx: { runtime: 'automatic' },
        sourcemap: true,
      })

      if (result.errors.length > 0) {
        throw new Error(result.errors.map((error) => error.message ?? String(error)).join('\n'))
      }

      return { code: result.code, map: result.map }
    },
  }
}

export default defineConfig({
  plugins: [jsxInJs(), react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/__tests__/setup.js',
  },
})
