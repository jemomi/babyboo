import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import {FileSystemIconLoader} from 'unplugin-icons/loaders';
import Components from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      Icons({
        compiler: "vue3",
        customCollections: {
          "ui": FileSystemIconLoader("./public/icons/ui"),
          "logos": FileSystemIconLoader("./public/icons/logos")
        }
      }),
      Components({
          dirs: ["./public/icons"],
          resolvers: [
              IconsResolver({
                  prefix: "icon",
                  customCollections: ["ui", "logos"]
              })
          ]
      })
  ],
})
