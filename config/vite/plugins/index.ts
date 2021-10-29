/**
 * vite plugin
 */

import { Plugin } from 'vite'

import legacy from '@vitejs/plugin-legacy'
import viteCompression from 'vite-plugin-compression'
import eslint from '@rollup/plugin-eslint'
import typescript from '@rollup/plugin-typescript' 
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { VITE_APP_ANALYZE, VITE_APP_COMPRESS_GZIP } from '../../constant'
import configMockPlugin from './mock'
import configVisualizerPlugin from './visualizer'
// import configStyleImportPlugin from './styleImport'

export function createVitePlugins(viteEnv: string, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    {
      ...eslint({
        include: 'src/**/*.+(js|jsx|ts|tsx|vue)'
      }),
      enforce: 'pre'
    },
    typescript(),
    legacy(),
    vue(),
    vueJsx()
    // configStyleImportPlugin()
  ]

  // mock下开启
  viteEnv === 'mock' && vitePlugins.push(configMockPlugin(isBuild))

  // 包分析
  VITE_APP_ANALYZE && vitePlugins.push(configVisualizerPlugin())

  // 发布，打包
  if (VITE_APP_COMPRESS_GZIP && isBuild) {
    vitePlugins.push(
      viteCompression({ deleteOriginFile: true })
    )
  }

  return vitePlugins
}
