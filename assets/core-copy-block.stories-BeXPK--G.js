import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{g as n,h as r}from"./iframe-D8aQDl12.js";var i=t({Default:()=>o,ShortValue:()=>s,SiteUrl:()=>c,__namedExportsOrder:()=>l,default:()=>a}),a,o,s,c,l,u=e((()=>{n(),a={title:`Components/Core/Copy Block`,component:r,parameters:{docs:{description:{component:`Inline copy-to-clipboard cell. Used for license keys, share URLs, and any value users need to grab cleanly. Click the icon to copy.`}}},argTypes:{message:{control:`text`,description:`The string the icon copies to clipboard.`}},args:{message:`AIOSEO-PRO-2024-LICENSE-KEY-XXXXX`},render:e=>({components:{CoreCopyBlock:r},setup(){return{args:e}},template:`<core-copy-block :message="args.message" />`})},o={},s={parameters:{docs:{description:{story:`Short payloads. The block expands to fit the message; the icon stays on the right.`}}},args:{message:`aioseo`}},c={parameters:{docs:{description:{story:`Common case — surfaced share URL or canonical link.`}}},args:{message:`https://example.com/blog/why-seo-matters/`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Short payloads. The block expands to fit the message; the icon stays on the right.'
      }
    }
  },
  args: {
    message: 'aioseo'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Common case — surfaced share URL or canonical link.'
      }
    }
  },
  args: {
    message: 'https://example.com/blog/why-seo-matters/'
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`ShortValue`,`SiteUrl`]}));u();export{o as Default,s as ShortValue,c as SiteUrl,l as __namedExportsOrder,a as default,u as n,i as t};