// Node.jsの標準モジュールの読み込み
import { dirname } from "path";
import { fileURLToPath } from "url";
// ESLintの古い設定形式（.eslintrc）を新しい形式（フラットコンフィグ）で使うための互換ツール
import { FlatCompat } from "@eslint/eslintrc";

import eslintConfigPrettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import jsxA11y from "eslint-plugin-jsx-a11y";
import { error } from "console";

// ESM環境で、__dirnameを再現するお決まりのコード
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 古い形式の設定を読み込む準備
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// ESLintに適用する設定の「配列」
const eslintConfig = [
  // Next.jsのCore Web Virals関連の推奨ルール、Next.jsのTypeScriptプロジェクト用推奨ルールをそれぞれ読み込ませている
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  eslintConfigPrettier,
  // アクセシビリティの推奨設定
  {
    ...jsxA11y.flatConfigs.recommended,
    // ルールを適用するファイルを指定する
    files: ["src/**/*.{js, jsx, ts, tsx}"],
  },
  // import文の整列
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // import文の並び順をエラーとして検知
      "simple-import-sort/imports": "error",
      // export文の並び順をエラーとして検知
      "simple-import-sort/exports": "error",
    },
    // ルールを適用するファイル
    files: ["src/**/*.{js, jsx, ts, tsx}"],
  },
];

// 上記設定した設定配列をエクスポート
export default eslintConfig;
