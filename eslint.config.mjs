import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Ignore build artifacts and vendor dirs
  {
    ignores: [
      "**/.next/**",
      "**/node_modules/**",
      ".vercel/**",
      "out/**",
      "coverage/**",
      "public/**",
      "**/*.d.ts",
    ],
  },
  // Base Next.js + TS rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Relax rules for config and type declaration files
  {
    files: [
      "tailwind.config.ts",
      "postcss.config.mjs",
      "next.config.ts",
      "eslint.config.mjs",
    ],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-var-requires": "off",
    },
  },
  {
    files: ["types/**/*.ts"],
    rules: {
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

export default eslintConfig;
