import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: '/fellipematos.github.io', // Adicionando a barra no início
  basePath: '/fellipematos.github.io',
  trailingSlash: true,
};

export default nextConfig;