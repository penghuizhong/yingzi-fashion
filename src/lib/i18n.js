export const SITE = 'https://oihey.cn';
export const CONTACT_EMAIL = 'info@oihey.cn';
export const CONTACT_WHATSAPP = '8618679708831';
export const CONTACT_PHONE_DISPLAY = '+86 186 7970 8831';
export const CONTACT_PHONE_TEL = '+8618679708831';
export const ADDRESS_ZH = '广州市海珠区官洲街道赤沙西北约社区赤沙环村路66号2层202房';
export const ADDRESS_EN = 'Room 202, 2F, No. 66 Chisha Huan Village Road, Guanzhou Subdistrict, Haizhu District, Guangzhou, Guangdong, China';
export const OPENING_HOURS = '09:00–20:00';
export const MAPS_URL = {
  zh: `https://uri.amap.com/search?keyword=${encodeURIComponent(ADDRESS_ZH)}`,
  en: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_EN)}`,
};

const messages = {
  en: {
    brand: 'TAILORING HOUSE', navCollections: 'Collections',navCraft:'Our Craft',navProcess:'How It Works',navContact:'Contact',navInquiry:'Start an inquiry',
    heroKicker: 'OIHEY / ATELIER COLLECTION 2026',heroTag:'CUSTOM TAILORING · MADE TO MEASURE',heroTitle1:'Tailored for',heroTitle2:'the exceptional.',
    heroLead:'Modern tailoring for those who dress with intention. From individual custom pieces to considered collections, crafted in Guangzhou.',
    heroExplore:'Explore the collection',heroCraft:'Discover our craft',heroStamp:'THE ART OF DRESSING EXCEPTIONALLY / OIHEY',heroScroll:'SCROLL TO EXPLORE',
    feature1:'MADE TO MEASURE',feature1Sub:'Personalized precision',feature2:'OEM / ODM',feature2Sub:'For emerging & established brands',feature3:'GUANGZHOU ATELIER',feature3Sub:'Design to production',feature4:'QUALITY DRIVEN',feature4Sub:'Details that matter',
    collectionsOver:'01 / Discover the collection', collectionsTitle1:'Curated for the', collectionsTitle2:'modern wardrobe.',collectionsLead:'Explore tailoring directions designed for individuality and commercial collections. Each piece starts a conversation about your ideal fit, fabric, and finish.',
    tabAll:'All styles',tabBusiness:'Business suits',tabBlazers:'Blazers',tabFormal:'Formalwear',search:'Search styles...', sort:'Sort:',sortFeature:'Featured',sortName:'Name A–Z',sortNew:'Newest first',styles:'STYLES',noResults:'No matching styles. Try another category or search.',clearSearch:'Clear search',ownDesign:'Discuss your own design',
    craftOver:'02 / Behind the seams',craftTitle1:'Made with purpose.',craftTitle2:'Built on craft.',craftLead:'OIHEY connects the art of traditional pattern making with a responsive production approach. We support custom measurements, sampling, fabric selection, and small-to-medium brand programs from Guangzhou.',craftQuote:'“Great tailoring begins long before the first stitch.”',craftCTA:'Explore our approach',
    processOver:'03 / Our approach',processTitle1:'From your idea',processTitle2:'to a finished piece.',processLead:'Five stages, four to six weeks — from first measurements to aftercare for the life of the garment.',
    step1:'Measurements & design',step1Time:'Day 1',step1Desc:'We discuss the garment’s purpose and your style, take 24+ measurements with posture and shoulder notes, and confirm the fabric and every detail.',step1Detail:'Remote option — book a video measuring session: we send a measuring guide first, then guide you through every measurement live, in about 30 minutes.',step2:'Pattern & making',step2Time:'Weeks 1–3',step2Desc:'An individual pattern is drafted from your measurements — never an adjusted stock block — then cut and sewn to the confirmed construction.',step2Detail:'A trial garment is made from your pattern first, so the fit is proven before your chosen fabric is cut.',step3:'Fitting & refinement',step3Time:'Weeks 3–4',step3Desc:'You try the trial garment while we check balance, ease and movement; every adjustment is marked and carried back to the pattern.',step3Detail:'Overseas clients fit by video call while we mark the adjustments on our side.',step4:'Final delivery',step4Time:'Weeks 4–6',step4Desc:'The finished garment is inspected item by item, pressed and delivered; your pattern and measurements stay on file.',step4Detail:'Before dispatch, measurements, construction and details are checked against your confirmed order.',step5:'Aftercare',step5Time:'For life',step5Desc:'Delivery is not the end: complimentary fit adjustments for the life of the garment, plus care guidance. Reorders run straight from your saved pattern — no re-measuring.',step5Detail:'Need an adjustment? Contact us any time — fit adjustments are always complimentary. Major re-cuts after significant body changes are quoted for your approval first.',processCta:'Not in Guangzhou? Book a video measuring session',stepMore:'Details',
    contactOver:'Start something exceptional',contactTitle:"Let's make your next piece.",contactLead:"From a single tailored garment to a complete capsule collection, tell us what you have in mind. We'll help define the next steps.",contactCTA:'Prepare an inquiry',
    footerIntro:'Thoughtful tailoring for brands, boutiques, and individuals. Guangzhou, China.',footerExplore:'Explore',footerAbout:'About OIHEY',footerProcess:'Our Process',footerServices:'Services',footerMTM:'Made-to-Measure',footerSampling:'Sampling & Production',footerHours:'Opening hours',footerCopyright:'© 2026 OIHEY. All rights reserved.',footerDemo:'Style photography is illustrative and does not represent confirmed inventory.',
    quick:'Quick view',custom:'Custom-made · Fabric options',price:'Estimated from',priceDetail:'Estimated price',priceUnit:'/ piece',priceNote:'Indicative starting price only. Final pricing depends on fabric, construction, quantity, shipping and taxes. Request a confirmed quotation.',
    home:'Home',color:'Color reference',direction:'Style direction',fabric:'Fabric',fabricValue:'Options on request',customize:'Customization',quantity:'Quantity',quantityValue:'Quoted per project',service:'Service',
    discuss:'Discuss this style',detailsNote:'Photographs are style references only. Final fabric, silhouette, price and availability require confirmation.',detailMade:'Explore a made-to-order variation tailored to your brand or personal fit requirements.',
    modalFabric:'Made to order · Options available',copy:'Copy inquiry',emailInquiry:'Send by email',whatsInquiry:'Send via WhatsApp',close:'Close',modalNote:'Copy the inquiry, or send it by email to info@oihey.cn or via WhatsApp.', copied:'Inquiry copied.',selectCopy:'Select the inquiry text to copy it.',
    homeTitle:'OIHEY | Custom Tailoring, Suits & Clothing Production in Guangzhou',homeDescription:'OIHEY Guangzhou tailoring atelier: made-to-measure clothing, custom suits, sample development and OEM/ODM production. Explore styles and request a quote.',
    productTitle:(p)=>`${p.name} | Custom ${p.category} | OIHEY`,productDescription:(p)=>`${p.name} (${p.id}): ${p.description} Custom-made style with fabric and sizing options. Ask OIHEY for a confirmed quote.`
  },
  zh: {
    brand:'高级定制',navCollections:'款式系列',navCraft:'匠心工艺',navProcess:'定制流程',navContact:'联系我们',navInquiry:'发起询价',
    heroKicker:'OIHEY / 2026 高级定制系列',heroTag:'服装定制 · 量身裁衣',heroTitle1:'为不凡',heroTitle2:'量身定制。',heroLead:'以考究剪裁诠释个人风格。源自广州的定制工坊，从专属定制作品到品牌系列，精心打造。',heroExplore:'探索款式系列',heroCraft:'了解我们的工艺',heroStamp:'非凡着装的艺术 / OIHEY',heroScroll:'向下探索',
    feature1:'量身定制',feature1Sub:'专属尺寸，精准合身',feature2:'OEM / ODM',feature2Sub:'服务新兴及成熟品牌',feature3:'广州定制工坊',feature3Sub:'从设计到生产',feature4:'品质为先',feature4Sub:'细节决定品质',
    collectionsOver:'01 / 探索款式系列',collectionsTitle1:'为现代衣橱',collectionsTitle2:'精心甄选。',collectionsLead:'探索适合个人定制与品牌系列的精致版型。每件作品都从合身度、面料与工艺的交流开始。',
    tabAll:'全部款式',tabBusiness:'商务西装',tabBlazers:'西装外套',tabFormal:'正式礼服',search:'搜索款式、颜色或编号…',sort:'排序：',sortFeature:'精选推荐',sortName:'名称排序',sortNew:'最新优先',styles:' 款式',noResults:'没有匹配的款式，请更换关键词或分类。',clearSearch:'清空搜索',ownDesign:'咨询专属定制',
    craftOver:'02 / 工艺背后',craftTitle1:'用心制作。',craftTitle2:'匠心传承。',craftLead:'OIHEY 将传统制版工艺与灵活的生产方式结合，在广州提供量身定制、样衣开发、面料选择及中小批量品牌生产服务。',craftQuote:'“好的剪裁，始于落下第一针之前。”',craftCTA:'了解我们的工艺',
    processOver:'03 / 定制方式',processTitle1:'从您的灵感',processTitle2:'到最终成衣。',processLead:'五步流程，约四到六周 — 从量体开始，到终身售后。',step1:'量体与设计',step1Time:'第 1 天',step1Desc:'沟通用途与风格偏好，量取 24+ 项尺寸并记录肩斜、站姿等体态信息，选定面料与全部细节。',step1Detail:'远程视频量体：预约后先发你量体指南，再视频连线逐项指导，全程约 30 分钟，数据同样建档。',step2:'定制制作',step2Time:'第 1–3 周',step2Desc:'按你的量体数据单独制版 — 不是改现成版型 — 再按确认的结构与工艺裁剪、缝制。',step2Detail:'先用试穿样衣验证版型，确认无误后才裁你的正式面料。',step3:'试穿调整',step3Time:'第 3–4 周',step3Desc:'试穿样衣，核对平衡、围度与活动量，需要修改的地方逐一标注、回版修正。',step3Detail:'海外客户通过视频连线试穿，我们同步标注修改点。',step4:'最终交付',step4Time:'第 4–6 周',step4Desc:'成衣逐项终检、整烫后交付；你的版型与量体数据同步存档。',step4Detail:'发出前逐项核对：尺寸、工艺、细节与确认单一致才交付。',step5:'售后支持',step5Time:'终身',step5Desc:'交付不是结束：终身免费合身调整，附保养指导；再次定制凭存档版型直接下单，免重新量体。',step5Detail:'需要调整随时联系我们，合身调整终身免费；体型大幅变化的改版会先评估报价，确认后再做。',processCta:'不在广州？预约视频量体',stepMore:'详情',
    contactOver:'开启非凡定制',contactTitle:'让下一件作品，由此诞生。',contactLead:'无论是一件量身定制服装，还是完整的品牌系列，都欢迎告诉我们您的想法。',contactCTA:'准备询价',
    footerIntro:'为品牌、精品店与个人客户提供精致定制服务。中国广州。',footerExplore:'探索',footerAbout:'关于 OIHEY',footerProcess:'定制流程',footerServices:'服务',footerMTM:'量身定制',footerSampling:'打样与生产',footerHours:'工作时间',footerCopyright:'© 2026 OIHEY. 保留所有权利。',footerDemo:'款式图片仅供视觉参考，不代表已确认的现货商品。',
    quick:'快速查看',custom:'支持定制 · 可选面料',price:'预估报价',priceDetail:'预估报价',priceUnit:'/ 件',priceNote:'仅供预算参考。实际价格随面料、工艺、数量、运输及税费而变化，最终以正式报价为准。',
    home:'首页',color:'参考颜色',direction:'款式风格',fabric:'面料',fabricValue:'可按需求选择',customize:'定制服务',quantity:'数量',quantityValue:'按项目报价',service:'服务',
    discuss:'咨询此款',detailsNote:'图片仅供款式参考；面料、版型、价格及供应情况以确认结果为准。',detailMade:'可按您的品牌要求或个人尺寸调整版型、面料和工艺。',
    modalFabric:'按需定制 · 多种面料可选',copy:'复制询价',emailInquiry:'用邮箱发送',whatsInquiry:'用 WhatsApp 发送',close:'关闭',modalNote:'可复制询价内容，或发邮件到 info@oihey.cn / 用 WhatsApp 发送。',copied:'询价内容已复制。',selectCopy:'请选择并复制询价内容。',
    homeTitle:'OIHEY 樱紫时尚｜广州高级定制西装与服装 OEM/ODM',homeDescription:'OIHEY 樱紫时尚广州服装定制工坊，提供男士西装、量身定制、样衣开发及品牌 OEM/ODM 生产服务。查看款式并咨询报价。',
    productTitle:(p)=>`${p.nameZh}（${p.id}）｜${p.categoryZh}定制｜OIHEY`,productDescription:(p)=>`${p.nameZh}（${p.id}）：${p.descriptionZh} 支持面料与尺寸定制，实际价格请咨询 OIHEY。`
  }
};
export const getText = (locale)=>messages[locale==='zh'?'zh':'en'];
export const productText=(p,locale)=>({
 name:locale==='zh'?p.nameZh:p.name,
 subtitle:locale==='zh'?p.subtitleZh:p.subtitle,
 color:locale==='zh'?p.colorZh:p.color,
 category:locale==='zh'?p.categoryZh:p.category,
 description:locale==='zh'?p.descriptionZh:p.description,
});
export const localUrl=(locale,slug='')=>`/${locale}/${slug?`${slug.replace(/^\/+|\/+$/g,'')}/`:''}`;
export const absoluteUrl=(path)=>new URL(path,SITE).toString();
