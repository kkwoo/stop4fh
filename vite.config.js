export default {
  build: {
      sourcemap: false,
      minify: true
  },
  define: {
    BUILD_TIMESTAMP: new Date(),
 },  
}