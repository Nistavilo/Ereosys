import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: process.env.OPEN_ANALYZER !== 'false',
  analyzerMode: process.env.ANALYZE_MODE || 'server',   // 'static' dersen HTML dosyası üretir
  analyzerPort: process.env.ANALYZE_PORT
    ? Number(process.env.ANALYZE_PORT)
    : undefined,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify artık gerek yok / kaldırıldı
  // İsteğe bağlı experimental alanlar ekleyebilirsin:
  // experimental: {
  //   optimizePackageImports: ['lucide-react'],
  // },
  webpack(config) {
    // Burada gerekirse alias / plugin ekleyebilirsin
    return config;
  }
};

export default withBundleAnalyzer(nextConfig);