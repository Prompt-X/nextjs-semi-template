import semi from '@douyinfe/semi-next';

const semiConfig = semi.default({});

const nextConfig = semiConfig({
  reactStrictMode: false,
  transpilePackages: ['@douyinfe/semi-ui', '@douyinfe/semi-icons'],
});

export default nextConfig;
