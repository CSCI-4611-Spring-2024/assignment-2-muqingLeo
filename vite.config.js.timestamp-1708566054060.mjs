// vite.config.js
import viteglgl from "file:///Users/muqingliu/Desktop/CSCI4611/assignments/assignment-2-muqingLeo/node_modules/vite-plugin-glsl/src/index.js";
import esbuildglsl from "file:///Users/muqingliu/Desktop/CSCI4611/assignments/assignment-2-muqingLeo/node_modules/esbuild-plugin-glsl/dist/index.js";
import { defineConfig } from "file:///Users/muqingliu/Desktop/CSCI4611/assignments/assignment-2-muqingLeo/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  base: "./",
  server: {
    open: true,
    port: 8080
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildglsl()]
    }
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]"
      }
    }
  },
  plugins: [
    viteglgl()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbXVxaW5nbGl1L0Rlc2t0b3AvQ1NDSTQ2MTEvYXNzaWdubWVudHMvYXNzaWdubWVudC0yLW11cWluZ0xlb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL211cWluZ2xpdS9EZXNrdG9wL0NTQ0k0NjExL2Fzc2lnbm1lbnRzL2Fzc2lnbm1lbnQtMi1tdXFpbmdMZW8vdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL211cWluZ2xpdS9EZXNrdG9wL0NTQ0k0NjExL2Fzc2lnbm1lbnRzL2Fzc2lnbm1lbnQtMi1tdXFpbmdMZW8vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgdml0ZWdsZ2wgZnJvbSAndml0ZS1wbHVnaW4tZ2xzbCc7XG5pbXBvcnQgZXNidWlsZGdsc2wgZnJvbSAnZXNidWlsZC1wbHVnaW4tZ2xzbCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiAnLi8nLFxuICBzZXJ2ZXI6IHtcbiAgICBvcGVuOiB0cnVlLFxuICAgIHBvcnQ6IDgwODBcbiAgfSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgZXNidWlsZE9wdGlvbnM6IHtcbiAgICAgIHBsdWdpbnM6IFtlc2J1aWxkZ2xzbCgpXVxuICAgIH1cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uanMnLFxuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ1tuYW1lXS5qcycsXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAnW25hbWVdLltleHRdJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZpdGVnbGdsKClcbiAgXVxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQThYLE9BQU8sY0FBYztBQUNuWixPQUFPLGlCQUFpQjtBQUN4QixTQUFTLG9CQUFvQjtBQUU3QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osZ0JBQWdCO0FBQUEsTUFDZCxTQUFTLENBQUMsWUFBWSxDQUFDO0FBQUEsSUFDekI7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxTQUFTO0FBQUEsRUFDWDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
