import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{E as n,T as r,dn as i,en as a,pn as o}from"./iframe-D8aQDl12.js";var s=t({CustomSeparator:()=>p,Default:()=>f,__namedExportsOrder:()=>m,default:()=>d}),c,l,u,d,f,p,m,h=e((()=>{a(),n(),c=i({render:()=>o(`div`,{style:`padding:8px 0;`},`General settings — site title, description, and verification meta tags.`)}),l=i({render:()=>o(`div`,{style:`padding:8px 0;`},`Social profiles — Open Graph defaults, Facebook app ID, Twitter handle.`)}),u=i({render:()=>o(`div`,{style:`padding:8px 0;`},`Advanced — XML sitemap, robots.txt, redirects, schema overrides.`)}),d={title:`Components/Core/Tabs`,component:r,parameters:{docs:{description:{component:`Light flexbox tab strip. The tabs prop is an array of { title, component } — title renders in the header, component renders in the active panel.`}}},render:()=>({components:{CoreTabs:r},setup(){return{tabs:[{title:`General`,component:c},{title:`Social`,component:l},{title:`Advanced`,component:u}]}},template:`<core-tabs :tabs="tabs" />`})},f={},p={render:()=>({components:{CoreTabs:r},setup(){return{tabs:[{title:`Lite`,component:c},{title:`Pro`,component:l}]}},template:`<core-tabs :tabs="tabs" separator="·" />`})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CoreTabs
    },
    setup() {
      return {
        tabs: [{
          title: 'Lite',
          component: General
        }, {
          title: 'Pro',
          component: Social
        }]
      };
    },
    template: \`<core-tabs :tabs="tabs" separator="·" />\`
  })
}`,...p.parameters?.docs?.source}}},m=[`Default`,`CustomSeparator`]}));h();export{p as CustomSeparator,f as Default,m as __namedExportsOrder,d as default,h as n,s as t};