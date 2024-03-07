import path from 'path';

export default {
  root: './',
  base: '',
  publicDir: path.resolve(__dirname, '../assets'),
  build: {
    outDir: path.resolve(__dirname, '../www'),
    assetsInlineLimit: 0,
    emptyOutDir: true,
  },
};
