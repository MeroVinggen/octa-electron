import { defineConfig, externalizeDepsPlugin } from 'electron-vite';

const build = {
  watch: {
    buildDelay: 2000
  },
}

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    build,
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    build,
  },
  renderer: {
    build,
  },
});
