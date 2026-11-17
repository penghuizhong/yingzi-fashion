# OIHEY · Astro V2.2 | Deep Noir Bilingual SEO Prototype

Astro **static** website with real `/en/` and `/zh/` pages, estimated prices on cards and details, sitemap, robots and an LLM-readable introduction. The original dark layout and the owner-provided hero image are preserved.

## Start

Requires Node.js 20+.

```bash
npm install
npm run dev
npm run build
```

Deploy the contents of `dist/` to Cloudflare Pages or a static host. The root `/` redirects visitors to `/en/` using an HTML meta refresh; prefer a server-side **301 or 302 redirect** to `/en/` on production hosting if possible.

## Pages

- `/en/` — English index, page content, navigation and product cards pre-rendered in English
- `/zh/` — Chinese index, page content, navigation and product cards pre-rendered in Chinese
- `/en/products/{slug}/` and `/zh/products/{slug}/` — each of the 12 demo products is statically generated in both languages
- `/sitemap.xml` — build-time generated XML with 26 URLs and reciprocal `hreflang` alternate references
- `/robots.txt` — allows crawling and links the sitemap
- `/llms.txt` — build-time generated Markdown overview of OIHEY and demo styles
- `/` — language gateway redirected to English; noindex

Every localized page has a language-specific title, meta description, HTML `lang`, canonical, reciprocal hreflang (`en`, `zh-CN`, `x-default`), Open Graph tags and JSON-LD. Google/AI crawlers can read the appropriate text without executing JS. No runtime API/database needed for the catalogue.

## Price configuration

`src/data/products.json` contains `estimatedFromUsd: 129` on the 12 sample styles, **purely as the user's approved visual demo**. This is **not a validated commercial price**. Modify each item's number before publishing live. The price appears on the card, detail page and quick-view. It is purposely **not added as Product/Offer structured data**, because it has not been confirmed as a real offer.

## Language and content maintenance

- `src/data/products.json`: English and Chinese product descriptions, keywords, reference prices and image links.
- `src/lib/i18n.js`: all English and Chinese interface labels, SEO titles and general copy.
- `src/components/HomePage.astro`, `ProductCard.astro`, `ProductDetail.astro`: page layout and components.
- `src/layouts/SiteLayout.astro`: SEO meta, header/footer and language-switch links.
- `src/pages/sitemap.xml.js` / `llms.txt.js`: product-based auto-generated discovery files.
- `public/site.js`: filters, sorting, quick view and enquiry-copy interaction; language is server-rendered per route.
- `public/site.css`: dark theme + prices.

New products added to `products.json` automatically get two pages and are included in sitemap and llms.txt. Use a unique `slug`, `id`, English/Chinese content and actual photography.

## IMPORTANT BEFORE PUBLISHING

1. **Replace all demo Pexels product photos** with rights-cleared OIHEY photography and verify catalog specifications. The hero image is from the website owner, stored locally in `public/images/`.
2. **Verify all estimated prices** and currency before publishing. Every demo item currently says USD 129, not a verified OIHEY quote. Keep quote disclaimer for variable fabric/quantity pricing.
3. The inquiry widget **copies text** but does not send an inquiry. Connect a business email address or form backend before production.
4. `robots.txt` currently allows indexing; publishing demo images or prices without updates could cause unwanted search indexing. Consider temporarily setting `noindex` on the staging domain, not the final production pages.
5. For Cloudflare Pages: deploy `dist/`; optionally configure a proper HTTP redirect `/ -> /en/`. If hosted on a VPS/Caddy, configure redirects in Caddy instead of the Cloudflare `_redirects` file.
6. The `llms.txt` format is a voluntary proposal, not an established search ranking method. Proper structured HTML and crawler access are still essential.

## Quick verification after deployment

- `https://oihey.cn/en/` and `/zh/` each return HTTP 200 and have the matching `<html lang>`.
- `https://oihey.cn/sitemap.xml` contains both localized homepage and product URLs.
- `https://oihey.cn/robots.txt` points at the sitemap.
- `https://oihey.cn/llms.txt` is UTF-8 plain text.
- Language switch on product detail preserves the same `slug`.
- Search for `棕色`, `Brown`, `OB-010` in either language filters to the matching style.
