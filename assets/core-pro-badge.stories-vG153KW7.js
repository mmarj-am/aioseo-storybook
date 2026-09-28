import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{M as n,j as r}from"./iframe-D8aQDl12.js";var i=t({Custom:()=>s,Default:()=>o,InContext:()=>c,__namedExportsOrder:()=>l,default:()=>a}),a,o,s,c,l,u=e((()=>{n(),a={title:`Components/Core/Pro Badge`,component:r,argTypes:{default:{control:`text`,description:`Badge text (defaults to "PRO")`}},args:{default:`PRO`},render:e=>({components:{CoreProBadge:r},setup(){return{args:e}},template:`<core-pro-badge>{{ args.default }}</core-pro-badge>`})},o={},s={args:{default:`ELITE`}},c={render:()=>({template:`
            <div style="display:flex; align-items:center; gap:8px; font-weight:600;">
                Search Statistics <core-pro-badge />
            </div>
        `})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    default: 'ELITE'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
            <div style="display:flex; align-items:center; gap:8px; font-weight:600;">
                Search Statistics <core-pro-badge />
            </div>
        \`
  })
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Custom`,`InContext`]}));u();export{s as Custom,o as Default,c as InContext,l as __namedExportsOrder,a as default,u as n,i as t};