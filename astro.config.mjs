import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://oihey.cn',
  output: 'static',
  trailingSlash: 'always',
  // The explicit /en/ and /zh/ routes are pre-rendered (not client-only translations).
});
