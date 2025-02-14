import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production'
  
  return {
    plugins: [react()],
    assetsInclude: ['**/*.csv'],
    
    base: '/', // Изменили на корневой путь
    
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
      sourcemap: !isProduction,
      minify: isProduction ? 'esbuild' : false,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        },
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            // Разделяем большие зависимости на отдельные чанки
            papaparse: ['papaparse']
          },
          // Убрали хеширование из имен файлов
          entryFileNames: 'js/[name].js',
          chunkFileNames: 'js/[name].js',
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.')
            const extType = info[info.length - 1]
            if (extType === 'csv') {
              return `data/[name][extname]`
            }
            if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
              return `media/[name][extname]`
            }
            else if (/\.(png|jpe?g|gif|svg|webp|ico)(\?.*)?$/i.test(assetInfo.name)) {
              return `images/[name][extname]`
            }
            else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
              return `fonts/[name][extname]`
            }
            else if (extType === 'css') {
              return `css/[name][extname]`
            }
            return `assets/[name][extname]`
          }
        }
      }
    },

    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@components': resolve(__dirname, './src/components'),
        '@assets': resolve(__dirname, './src/assets'),
        '@pages': resolve(__dirname, './src/pages'),
        '@constants': resolve(__dirname, './src/constants')
      }
    },

    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/variables.scss";`
        }
      }
    },

    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', 'papaparse']
    },

    esbuild: {
      jsxInject: `import React from 'react'`
    }
  }
})
