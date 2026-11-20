(()=>{
'use strict';
const doc=document, qs=s=>doc.querySelector(s),qsa=s=>[...doc.querySelectorAll(s)];
const locale=doc.body.dataset.locale==='zh'?'zh':'en';
const dataNode=qs('#product-data');
const all=dataNode?JSON.parse(dataNode.textContent||'[]'):[];
const uiNode=qs('#ui-copy');
const ui=uiNode?JSON.parse(uiNode.textContent||'{}'):{};
let currentFilter='all', term='', product=null;
const overlay=qs('#productOverlay');
const normalize=s=>String(s||'').normalize('NFKC').toLocaleLowerCase().trim();
const v=(p,name)=>locale==='zh'?(p[`${name}Zh`]||p[name]):p[name];
const showToast=(str)=>{const e=qs('#toast');if(!e)return;e.textContent=str;e.classList.add('show');clearTimeout(window._toastTimer);window._toastTimer=setTimeout(()=>e.classList.remove('show'),2600)};
function setCategory(category){
 currentFilter=category;
 qsa('.tab').forEach(b=>{const active=b.dataset.filter===category;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
}
function filterCards(){
 const tokens=normalize(term).split(/\s+/).filter(Boolean);
 let count=0;
 qsa('.product-card').forEach(c=>{
   const matched=(currentFilter==='all'||c.dataset.category===currentFilter)&&tokens.every(t=>normalize(c.dataset.search).includes(t));
   c.hidden=!matched;if(matched)count++;
 });
 const countEl=qs('#resultsCount');if(countEl)countEl.textContent=locale==='zh'?`${count} 款式`:`${count} STYLES`;
 const empty=qs('#noResults');if(empty)empty.style.display=count?'none':'block';
}
qsa('.tab').forEach(b=>b.addEventListener('click',()=>{setCategory(b.dataset.filter);filterCards()}));
qs('#styleSearch')?.addEventListener('input',e=>{
 term=e.target.value;if(term.trim()&&currentFilter!=='all')setCategory('all');filterCards();
});
qs('#clearSearch')?.addEventListener('click',()=>{
 const field=qs('#styleSearch');if(field)field.value='';term='';setCategory('all');filterCards();field?.focus();
});
function openProduct(id){
 product=all.find(p=>p.id===id);if(!product||!overlay)return;
 qs('#drawerTitle').textContent=v(product,'name');
 qs('#drawerCode').textContent=product.id+'  /  '+v(product,'category');
 qs('#drawerDesc').textContent=v(product,'description');
 qs('#drawerPhoto').src=product.img;
 qs('#drawerPhoto').alt=v(product,'name');
 qs('#drawerColor').textContent=v(product,'color');
 qs('#drawerType').textContent=v(product,'subtitle');
 qs('#drawerPrice').textContent='USD '+product.estimatedFromUsd+(ui.priceUnit||'');
 qs('#quoteText').textContent=locale==='zh'
  ? `OIHEY 你好，\n我对 ${product.id} — ${product.nameZh} 感兴趣。\n网站展示参考起价：USD ${product.estimatedFromUsd}（非最终报价）。\n请告知可选面料、定制工艺、起订量、打样费及交期，并提供正式报价。谢谢！`
  : `Hello OIHEY team,\nI am interested in ${product.id} — ${product.name}.\nWebsite reference estimate: from USD ${product.estimatedFromUsd} (not a final quote).\nPlease advise on fabrics, custom construction, MOQ, sample cost, lead time and a confirmed quotation. Thank you.`;
 const quoteBody=qs('#quoteText').textContent;
 const quoteSubject=locale==='zh'?`询价 ${product.id} — ${product.nameZh}`:`Inquiry ${product.id} — ${product.name}`;
 const emailBtn=qs('#emailQuote');if(emailBtn)emailBtn.href=`mailto:info@oihey.cn?subject=${encodeURIComponent(quoteSubject)}&body=${encodeURIComponent(quoteBody)}`;
 const whatsBtn=qs('#whatsQuote');if(whatsBtn)whatsBtn.href=`https://wa.me/8618679708831?text=${encodeURIComponent(quoteBody)}`;
 overlay.classList.add('open');overlay.setAttribute('aria-hidden','false');doc.body.classList.add('lock');qs('#closeDrawer')?.focus();
}
function closeDrawer(){if(!overlay)return;overlay.classList.remove('open');overlay.setAttribute('aria-hidden','true');doc.body.classList.remove('lock')}
qsa('[data-quick]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();openProduct(b.dataset.quick)}));
qsa('[data-quote]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();openProduct(b.dataset.quote||all[0]?.id)}));
qs('#closeDrawer')?.addEventListener('click',closeDrawer);
qs('#drawerCloseSecondary')?.addEventListener('click',closeDrawer);
overlay?.addEventListener('click',e=>{if(e.target===overlay)closeDrawer()});
doc.addEventListener('keydown',e=>{if(e.key==='Escape')closeDrawer()});
qs('#copyQuote')?.addEventListener('click',async()=>{
 const t=qs('#quoteText')?.textContent||'';
 try{await navigator.clipboard.writeText(t);showToast(ui.copied||'Copied')}
 catch(e){showToast(ui.selectCopy||'Select text to copy')}
});
qs('#mobileNavButton')?.addEventListener('click',()=>{
 const nav=qs('#siteNav');if(nav){const isOpen=nav.classList.toggle('open');qs('#mobileNavButton').setAttribute('aria-expanded',String(isOpen))}
});
qsa('.nav a').forEach(a=>a.addEventListener('click',()=>{qs('#siteNav')?.classList.remove('open');qs('#mobileNavButton')?.setAttribute('aria-expanded','false')}));
qs('#sortSelect')?.addEventListener('change',e=>{
 const grid=qs('.product-grid');if(!grid)return;
 const cards=qsa('.product-card');
 cards.sort((a,b)=>{
  if(e.target.value==='name')return (a.querySelector('.product-title')?.textContent||'').localeCompare(b.querySelector('.product-title')?.textContent||'');
  if(e.target.value==='reverse')return b.dataset.code.localeCompare(a.dataset.code);
  return a.dataset.code.localeCompare(b.dataset.code);
 }).forEach(c=>grid.appendChild(c));
});
filterCards();
})();

/* Vertical process timeline: scroll-linked gold line, reveal, expandable details */
(function(){var wrap=document.querySelector('[data-vsteps]');if(!wrap)return;var steps=[].slice.call(wrap.querySelectorAll('[data-vstep]'));var fill=wrap.querySelector('.vsteps-fill');var reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
steps.forEach(function(st){var btn=st.querySelector('.vstep-toggle');if(!btn)return;btn.addEventListener('click',function(){var wasOpen=st.classList.contains('open');steps.forEach(function(s){s.classList.remove('open');var b=s.querySelector('.vstep-toggle');if(b)b.setAttribute('aria-expanded','false')});if(!wasOpen){st.classList.add('open');btn.setAttribute('aria-expanded','true')}})});
if(reduced||!('IntersectionObserver' in window)){steps.forEach(function(s){s.classList.add('on')});if(fill)fill.style.transform='scaleY(1)';return}
document.documentElement.classList.add('vanim');
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}})},{threshold:.25});steps.forEach(function(s){io.observe(s)});
var ticking=false;function upd(){ticking=false;var r=wrap.getBoundingClientRect();var p=(window.innerHeight*.55-r.top)/r.height;p=Math.max(0,Math.min(1,p));if(fill)fill.style.transform='scaleY('+p+')'}
function req(){if(!ticking){ticking=true;requestAnimationFrame(upd)}}
window.addEventListener('scroll',req,{passive:true});window.addEventListener('resize',req);upd()})();
