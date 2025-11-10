// postcssはcssをjavaScriptを使って変換するためのツールのこと
// 最新のCSS構文を古いブラウザでも動くように変換してくれたりする
const config = {
  // TailwindをPostCSSで使えるようにするための公式プラグインの設定
  // @themaや@applyなどの構文を自動で理解してくれるようになる
  plugins: ["@tailwindcss/postcss"],
};

export default config;
