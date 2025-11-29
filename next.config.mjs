/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // 开启静态导出模式
  images: {
    unoptimized: true, // GitHub Pages 不支持 Next.js 默认的图片优化，必须关掉
  },
};

export default nextConfig;