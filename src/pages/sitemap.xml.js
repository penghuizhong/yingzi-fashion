import products from '../data/products.json';
import { SITE } from '../lib/i18n.js';
export const prerender=true;
const escapeXml=(str)=>String(str).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export function GET(){
  const paths=['',...products.map(p=>`products/${p.slug}`)];
  const nodes=paths.flatMap(path=>['en','zh'].map(lang=>{
    const url=`${SITE}/${lang}/${path?`${path}/`:''}`;
    const alternates=`<xhtml:link rel="alternate" hreflang="en" href="${SITE}/en/${path?`${path}/`:''}"/><xhtml:link rel="alternate" hreflang="zh-CN" href="${SITE}/zh/${path?`${path}/`:''}"/><xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/en/${path?`${path}/`:''}"/>`;
    return `<url><loc>${escapeXml(url)}</loc>${alternates}</url>`;
  }));
  const xml=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${nodes.join('\n')}\n</urlset>`;
  return new Response(xml,{headers:{'Content-Type':'application/xml; charset=utf-8','Cache-Control':'public, max-age=3600'}});
}
