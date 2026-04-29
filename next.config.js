/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  // Dynamic app — payments/cart require server runtime, no static export
  images: { unoptimized: true },
  trailingSlash: true,
  productionBrowserSourceMaps: false,
  webpack: (config, { isServer, dev }) => {
    ['@react-native-async-storage/async-storage', 'viem', 'viem/chains', 'thirdweb', 'thirdweb/chains', 'thirdweb/react', 'thirdweb/deploys', 'thirdweb/storage', 'thirdweb/wallets', 'thirdweb/wallets/in-app', 'thirdweb/extensions/erc20', 'wagmi', '@solana/kit', '@solana/sysvars', '@solana-program/token-2022', 'x402', '@coinbase/wallet-sdk', '@walletconnect/ethereum-provider'].forEach(pkg => { config.resolve.alias[pkg] = false; });
    if (!dev && !isServer) config.devtool = false;
    return config;
  },
};

module.exports = nextConfig;
