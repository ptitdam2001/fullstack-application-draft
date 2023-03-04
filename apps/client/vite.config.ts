import { defineConfig, splitVendorChunkPlugin, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      tsconfigPaths({
        root: '.',
      }),
      splitVendorChunkPlugin(),
      // eslint({ fix: true }),
      react({
        exclude: /\.stories\.(t|j)sx?$/,
      }),
    ],
    test: {
      ssr: false,
      globals: true,
      environment: 'jsdom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      threads: false,
      reporters: ['default', 'junit'],
      outputFile: './test-results.xml',
      // setupFiles: ['./src/setupTests.ts'],
    },
    assetsInclude: ['/**/*.{png,jpg,gif,ico,svg}', '/css/*'],
    esbuild: {
      include: /\.(tsx?|jsx?)$/,
      exclude: [],
      loader: 'tsx',
    },
  } as Partial<UserConfig>
)
