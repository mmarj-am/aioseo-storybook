import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-pjoPW_VL.js";import{a as n}from"./chunk-RD3KTAHR-BqomIf-d.js";import{l as r,o as i}from"./blocks-n35kXg-I.js";import{t as a}from"./mdx-react-shim-DzZRHTHx.js";import{n as o,t as s}from"./tokens-Bo2e33mC.js";function c(e){let n={code:`code`,em:`em`,h1:`h1`,h2:`h2`,hr:`hr`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`Foundations/Typography`}),`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,(0,u.jsx)(n.h1,{id:`typography`,children:`Typography`}),`
`,(0,u.jsx)(n.p,{children:`System font stack, three tokenized sizes, one tokenized weight. The rest is ad-hoc.`}),`
`,(0,u.jsxs)(n.p,{children:[`This page reports both the `,(0,u.jsx)(n.strong,{children:`tokens`}),` (what code `,(0,u.jsx)(n.em,{children:`should`}),` use) and the `,(0,u.jsx)(n.strong,{children:`actual usage`}),` (what the codebase `,(0,u.jsx)(n.em,{children:`does`}),` use). Numbers come from a real grep of `,(0,u.jsx)(n.code,{children:`~/dev/aioseo`}),`.`]}),`
`,(0,u.jsx)(n.h2,{id:`font-family`,children:`Font family`}),`
`,(0,u.jsxs)(`div`,{style:{padding:`32px 28px`,borderRadius:8,border:`1px solid #E8E8EB`,background:`#F9F9FA`,margin:`12px 0 32px`},children:[(0,u.jsx)(`div`,{style:{fontFamily:f,fontSize:80,lineHeight:1,color:m,marginBottom:16,letterSpacing:-1},children:`Aa`}),(0,u.jsx)(`div`,{style:{...S,fontSize:13,marginBottom:4},children:`$font-family`}),(0,u.jsx)(`div`,{style:S,children:f})]}),`
`,(0,u.jsx)(n.p,{children:`The system font stack — fast, native, and matches the WordPress admin shell AIOSEO renders inside.`}),`
`,(0,u.jsx)(n.hr,{}),`
`,(0,u.jsx)(n.h2,{id:`tokenized-scale`,children:`Tokenized scale`}),`
`,(0,u.jsx)(n.p,{children:`Three sizes have proper SCSS tokens. New code should always reach for these first.`}),`
`,v.map(E),`
`,(0,u.jsx)(n.hr,{}),`
`,(0,u.jsx)(n.h2,{id:`display-sizes-no-tokens`,children:`Display sizes (no tokens)`}),`
`,(0,u.jsxs)(n.p,{children:[`Used for marketing splashes, wizard heroes, and section headings. None are tokenized — every usage is an inline `,(0,u.jsx)(n.code,{children:`font-size: Npx`}),`.`]}),`
`,g.map(E),`
`,(0,u.jsx)(n.hr,{}),`
`,(0,u.jsx)(n.h2,{id:`heading-sizes-no-tokens`,children:`Heading sizes (no tokens)`}),`
`,(0,u.jsxs)(n.p,{children:[`Card and modal titles. `,(0,u.jsx)(n.strong,{children:`20px and 18px together account for 58 usages`}),` — strong candidates for tokenization.`]}),`
`,_.map(E),`
`,(0,u.jsx)(`div`,{style:D,children:(0,u.jsxs)(n.p,{children:[(0,u.jsx)(`strong`,{children:`Recommendation`}),` — Promote 18px and 20px to tokens upstream. 58 inline usages across the codebase is enough drift to justify a token.`]})}),`
`,(0,u.jsx)(n.hr,{}),`
`,(0,u.jsx)(n.h2,{id:`smaller-sizes-no-tokens`,children:`Smaller sizes (no tokens)`}),`
`,(0,u.jsx)(n.p,{children:`Below the tokenized 12px floor.`}),`
`,y.map(E),`
`,(0,u.jsx)(`div`,{style:D,children:(0,u.jsxs)(n.p,{children:[(0,u.jsx)(`strong`,{children:`Strongest tokenization candidate`}),` — 13px is used 56 times, more than half as much as $font-sm (12px, 87 uses). Either tokenize it (e.g. `,(0,u.jsx)(`code`,{children:`$font-xs: 13px`}),`) or migrate the 56 callers to 12px. Right now the choice between 12 and 13 is being made site-wide ad-hoc.`]})}),`
`,(0,u.jsx)(`div`,{style:D,children:(0,u.jsxs)(n.p,{children:[(0,u.jsx)(`strong`,{children:`Accessibility`}),` — 9px and 10px sizes appear 11 times total. WCAG and most platform UIs treat sub-11px as borderline unreadable. Audit candidates.`]})}),`
`,(0,u.jsx)(n.hr,{}),`
`,(0,u.jsx)(n.h2,{id:`weights`,children:`Weights`}),`
`,(0,u.jsxs)(n.p,{children:[`The only tokenized weight is `,(0,u.jsx)(n.code,{children:`$font-bold: 600`}),`. But the codebase reaches for `,(0,u.jsx)(n.code,{children:`font-weight: 700`}),` more often than 600 — the system has unintentional weight drift.`]}),`
`,b.map(E),`
`,(0,u.jsx)(`div`,{style:D,children:(0,u.jsxs)(n.p,{children:[(0,u.jsx)(`strong`,{children:`Inconsistency`}),` — `,(0,u.jsx)(`code`,{children:`font-weight: 700`}),` (159 usages) outnumbers `,(0,u.jsx)(`code`,{children:`$font-bold`}),` (119 usages) — but only $font-bold exists as a token. Either reset 700 callers to use $font-bold (and accept the visual change), or add a heavier `,(0,u.jsx)(`code`,{children:`$font-bolder: 700`}),` token to legitimize the existing usage.`]})}),`
`,(0,u.jsx)(n.hr,{}),`
`,(0,u.jsx)(n.h2,{id:`body-color`,children:`Body color`}),`
`,(0,u.jsxs)(`div`,{style:{padding:`24px 0`,borderBottom:`1px solid #E8E8EB`},children:[(0,u.jsx)(`p`,{style:{fontFamily:f,fontSize:14,color:m,margin:0,lineHeight:1.5},children:h}),(0,u.jsxs)(`div`,{style:{marginTop:12},children:[(0,u.jsx)(`div`,{style:C,children:`$font-color`}),(0,u.jsxs)(`div`,{style:S,children:[m,` · default text color across all settings UI`]})]})]}),`
`,(0,u.jsx)(n.hr,{}),`
`,(0,u.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,u.jsx)(n.p,{children:`Always reach for SCSS variables first:`}),`
`,(0,u.jsx)(n.pre,{children:(0,u.jsx)(n.code,{className:`language-scss`,children:`.my-heading {
	font-family: $font-family;
	font-size:   $font-lg;     // 16px
	font-weight: $font-bold;   // 600
	color:       $font-color;
}
`})}),`
`,(0,u.jsxs)(n.p,{children:[`If you need a size or weight not in the token table, add it to `,(0,u.jsx)(n.code,{children:`variables.scss`}),` first instead of inlining a one-off — every inline value is future drift.`]})]})}function l(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,u.jsx)(n,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{u=n(),a(),r(),s(),d=o.tokens.find(e=>e.name===`font-family`),f=d?d.value:`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,p=o.tokens.find(e=>e.name===`font-color`),m=p?p.value:`#3c434a`,h=`The quick brown fox jumps over the lazy dog`,g=[{size:`50px`,uses:3,label:`50px`,spec:`ad-hoc`,role:`Marketing splash / wizard hero`,status:`ad`},{size:`40px`,uses:2,label:`40px`,spec:`ad-hoc`,role:`Page-level display heading`,status:`ad`},{size:`32px`,uses:9,label:`32px`,spec:`ad-hoc`,role:`Section heading (large)`,status:`ad`},{size:`28px`,uses:6,label:`28px`,spec:`ad-hoc`,role:`Section heading`,status:`ad`},{size:`24px`,uses:25,label:`24px`,spec:`ad-hoc`,role:`Subsection heading, modal title`,status:`ad`}],_=[{size:`20px`,uses:30,label:`20px`,spec:`ad-hoc · candidate`,role:`Card title (large)`,status:`warn`},{size:`18px`,uses:28,label:`18px`,spec:`ad-hoc · candidate`,role:`Card title`,status:`warn`},{size:`17px`,uses:2,label:`17px`,spec:`ad-hoc`,role:`Edge case — likely a typo`,status:`warn`}],v=[{size:`16px`,uses:156,label:`$font-lg`,spec:`16px · the prominent size token`,role:`Headings, primary buttons, prominent labels`,status:`token`},{size:`14px`,uses:341,label:`$font-md`,spec:`14px · default body`,role:`Body, form fields, settings descriptions`,status:`token`},{size:`12px`,uses:87,label:`$font-sm`,spec:`12px · smallest tokenized`,role:`Captions, badges, helper text`,status:`token`}],y=[{size:`15px`,uses:17,label:`15px`,spec:`ad-hoc`,role:`Slight drift from $font-md`,status:`warn`},{size:`13px`,uses:56,label:`13px`,spec:`ad-hoc · candidate`,role:`Dense table cells — strongest tokenization candidate`,status:`warn`},{size:`11px`,uses:5,label:`11px`,spec:`ad-hoc`,role:`Smallest readable label`,status:`ad`},{size:`10px`,uses:8,label:`10px`,spec:`ad-hoc`,role:`Micro label, badge counter`,status:`ad`},{size:`9px`,uses:3,label:`9px`,spec:`ad-hoc`,role:`Edge case — accessibility risk`,status:`warn`}],b=[{size:`14px`,weight:400,uses:83,label:`Regular`,spec:`400 · default`,role:`Default body copy`,status:`ad`},{size:`14px`,weight:500,uses:14,label:`Medium`,spec:`500 · light emphasis`,role:`Light emphasis (rare in this codebase)`,status:`ad`},{size:`14px`,weight:600,uses:119,label:`$font-bold`,spec:`600 · the only tokenized weight`,role:`Headings, labels, emphasis`,status:`token`},{size:`14px`,weight:700,uses:159,label:`Bold (no token)`,spec:`700 · ad-hoc`,role:`More used than $font-bold — system inconsistency`,status:`warn`}],x={display:`grid`,gridTemplateColumns:`minmax(0, 1fr) 320px`,gap:32,alignItems:`center`,padding:`24px 0`,borderBottom:`1px solid #E8E8EB`},S={fontFamily:`ui-monospace, SFMono-Regular, Menlo, monospace`,fontSize:12,color:`#555D66`,lineHeight:1.6},C={fontSize:13,color:`#141B38`,fontWeight:600},w={token:{background:`#D1FAE5`,color:`#15955F`},warn:{background:`#FCFAE8`,color:`#9A7B0F`},ad:{background:`#F3F5F6`,color:`#555D66`}},T={display:`inline-block`,fontSize:11,fontFamily:`ui-monospace, SFMono-Regular, Menlo, monospace`,padding:`2px 8px`,borderRadius:999,fontWeight:600},E=e=>(0,u.jsxs)(`div`,{style:x,children:[(0,u.jsx)(`p`,{style:{fontFamily:f,fontSize:e.size,fontWeight:e.weight||400,color:m,lineHeight:1.3,margin:0,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:h}),(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,marginBottom:4},children:[(0,u.jsx)(`div`,{style:C,children:e.label}),(0,u.jsxs)(`span`,{style:Object.assign({},T,w[e.status]||w.ad),children:[e.uses,` uses`]})]}),(0,u.jsx)(`div`,{style:S,children:e.spec}),(0,u.jsx)(`div`,{style:{marginTop:6,fontFamily:f,fontSize:13,color:`#3c434a`},children:e.role})]})]},e.label+e.size+(e.weight||``)),D={marginTop:16,padding:`14px 16px`,borderRadius:6,background:`#F0F6FF`,border:`1px solid #005AE0`,fontFamily:`-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,fontSize:14,color:`#141B38`,lineHeight:1.5}}))();export{D as calloutStyle,l as default,f as family,d as familyToken,m as fontColor,p as fontColorToken,_ as headingRows,C as labelStyle,y as microRows,T as pillBaseStyle,w as pillByStatus,E as renderRow,x as rowStyle,g as rows,h as sampleText,S as specStyle,v as tokenRows,b as weightRows};