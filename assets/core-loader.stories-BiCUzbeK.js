import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Mt as n,jt as r}from"./iframe-D8aQDl12.js";var i=t({Dark:()=>s,Default:()=>o,InContext:()=>c,__namedExportsOrder:()=>l,default:()=>a}),a,o,s,c,l,u=e((()=>{n(),a={title:`Components/Core/Loader`,component:r,argTypes:{dark:{control:`boolean`}},args:{dark:!1},render:e=>({components:{CoreLoader:r},setup(){return{args:e}},template:`
            <div style="position:relative; width:80px; height:80px; ${e.dark?`background:#fff;`:`background:#005AE0;`} border-radius:8px; display:flex; align-items:center; justify-content:center;">
                <core-loader v-bind="args" />
            </div>
        `})},o={},s={args:{dark:!0}},c={render:()=>({template:`
            <div style="display:flex; gap:24px; align-items:center;">
                <div style="position:relative; width:80px; height:80px; background:#005AE0; border-radius:8px; display:flex; align-items:center; justify-content:center;">
                    <core-loader />
                </div>
                <div style="position:relative; width:80px; height:80px; background:#fff; border:1px solid #E8E8EB; border-radius:8px; display:flex; align-items:center; justify-content:center;">
                    <core-loader :dark="true" />
                </div>
                <div style="position:relative;">
                    <base-button type="blue" loading>Saving…</base-button>
                </div>
            </div>
        `})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    dark: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
            <div style="display:flex; gap:24px; align-items:center;">
                <div style="position:relative; width:80px; height:80px; background:#005AE0; border-radius:8px; display:flex; align-items:center; justify-content:center;">
                    <core-loader />
                </div>
                <div style="position:relative; width:80px; height:80px; background:#fff; border:1px solid #E8E8EB; border-radius:8px; display:flex; align-items:center; justify-content:center;">
                    <core-loader :dark="true" />
                </div>
                <div style="position:relative;">
                    <base-button type="blue" loading>Saving…</base-button>
                </div>
            </div>
        \`
  })
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Dark`,`InContext`]}));u();export{s as Dark,o as Default,c as InContext,l as __namedExportsOrder,a as default,u as n,i as t};