// 外部の画像をNext.jsの画像最適化機能（<Image>コンポーネント）で使えるように許可する設定
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // リモート画像のパターンを定義
    remotePatterns: [
      {
        // https://経由のみ許可
        protocol: "https",
        // このドメインのみ許可
        hostname: "via.placeholder.com",
        // port指定なし（デフォルトの80, 443）
        port: "",
        // このドメイン以下の全パスを許可する
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
