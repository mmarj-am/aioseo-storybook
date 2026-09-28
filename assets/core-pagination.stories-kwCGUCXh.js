import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{S as n,x as r}from"./iframe-D8aQDl12.js";var i=t({Default:()=>o,FirstPage:()=>s,LastPage:()=>c,SinglePage:()=>l,__namedExportsOrder:()=>u,default:()=>a}),a,o,s,c,l,u,d=e((()=>{n(),a={title:`Components/Core/Pagination`,component:r,parameters:{layout:`centered`,docs:{description:{component:`WordPress-styled pagination control. Used in admin tables (sitemaps, redirects, link assistant).`}}},decorators:[e=>({components:{story:e},template:`<div style="padding:24px 32px; background:#f0f0f1; min-width:480px;"><story /></div>`})],render:()=>({components:{CorePagination:r},setup(){return{totals:{total:1247,pages:25}}},template:`<core-pagination :totals="totals" :initial-page-number="3" />`})},o={},s={render:()=>({setup(){return{totals:{total:60,pages:5}}},template:`<core-pagination :totals="totals" :initial-page-number="1" />`})},c={render:()=>({setup(){return{totals:{total:60,pages:5}}},template:`<core-pagination :totals="totals" :initial-page-number="5" />`})},l={render:()=>({setup(){return{totals:{total:8,pages:1}}},template:`<core-pagination :totals="totals" :initial-page-number="1" />`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      return {
        totals: {
          total: 60,
          pages: 5
        }
      };
    },
    template: \`<core-pagination :totals="totals" :initial-page-number="1" />\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      return {
        totals: {
          total: 60,
          pages: 5
        }
      };
    },
    template: \`<core-pagination :totals="totals" :initial-page-number="5" />\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      return {
        totals: {
          total: 8,
          pages: 1
        }
      };
    },
    template: \`<core-pagination :totals="totals" :initial-page-number="1" />\`
  })
}`,...l.parameters?.docs?.source}}},u=[`Default`,`FirstPage`,`LastPage`,`SinglePage`]}));d();export{o as Default,s as FirstPage,c as LastPage,l as SinglePage,u as __namedExportsOrder,a as default,d as n,i as t};