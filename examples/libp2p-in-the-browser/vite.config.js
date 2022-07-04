export default {
  build: {
    target: 'es2020'
  },
  define: {
    'process.env.SOME_ENV': `"${process.env.SOME_ENV}"`,
    "global":{}
  }
}