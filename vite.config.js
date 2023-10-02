// export default {
// //     jsx: 'react',
// //     plugins: [],
// //     root: './src',
// //     optimizeDeps: {
// //         include: ['react', 'react-dom']
// //     },
// //     build: {
// //     rollupOptions: {
// //         input: 'main.js', 
// //     },
// //   },esbuild: {
// //     jsxFactory: 'React.createElement',
// //     jsxInject: `import React from 'react'`,
// //   },

import { defineConfig } from "vite";

    
// }

export default defineConfig({

    build: {
        rollupOptions: {
            input: 'main.js',
        },
    
    },
});