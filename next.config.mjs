// /** @type {import('next').NextConfig} */
// const nextConfig = {};




/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      // Add GLB file handling
      config.module.rules.push({
        test: /\.(glb|gltf)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/files',
            outputPath: 'static/files',
            name: '[name].[hash].[ext]',
          },
        },
      });
      return config;
    },
  };
  
  export default nextConfig;
