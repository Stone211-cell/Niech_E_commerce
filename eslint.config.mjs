import next from "eslint-config-next";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  ...next(),

  {
    rules: {
      "next/core-web-vitals": "warn",
    },
  },

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "lib/generated/prisma/**",
  ]),
]);
