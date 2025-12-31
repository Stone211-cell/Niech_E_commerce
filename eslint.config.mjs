<<<<<<< HEAD
import { defineConfig, globalIgnores } from 'eslint/config'

=======
import { defineConfig, globalIgnores } from "eslint/config";
>>>>>>> 12697e9ef6c88069bc3a6685cd881d6c342ceac1

export default defineConfig([
  {
    extends: ["next/core-web-vitals"], // <-- แก้ตรงนี้
    rules: {
      "next/core-web-vitals": "warn",
    },
  },
  globalIgnores([
<<<<<<< HEAD
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
=======
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "lib/generated/prisma/**",
>>>>>>> 12697e9ef6c88069bc3a6685cd881d6c342ceac1
  ]),
]);
