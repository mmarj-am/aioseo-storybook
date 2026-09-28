import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Ct as n,wt as r}from"./iframe-D8aQDl12.js";var i=t({AllSizes:()=>u,Blue:()=>o,Closable:()=>d,Green:()=>s,Red:()=>c,Yellow:()=>l,__namedExportsOrder:()=>f,default:()=>a}),a,o,s,c,l,u,d,f,p=e((()=>{r(),a={title:`Components/Core/Alert`,component:n,argTypes:{type:{control:`select`,options:[`blue`,`green`,`red`,`yellow`]},size:{control:`select`,options:[``,`smaller`,`small`,`medium`]},showClose:{control:`boolean`},default:{control:`text`,description:`Slot content`}},args:{type:`blue`,size:`medium`,default:`Heads up — this is an informational alert.`},render:e=>({components:{CoreAlert:n},setup(){return{args:e}},template:`<core-alert v-bind="args">{{ args.default }}</core-alert>`})},o={args:{type:`blue`,default:`Informational message.`}},s={args:{type:`green`,default:`Saved successfully.`}},c={args:{type:`red`,default:`Something went wrong — please retry.`}},l={args:{type:`yellow`,default:`Heads up — this needs your attention.`}},u={render:()=>({template:`
            <div style="display:flex; flex-direction:column; gap:12px;">
                <core-alert type="blue" size="smaller">Smaller</core-alert>
                <core-alert type="blue" size="small">Small</core-alert>
                <core-alert type="blue" size="medium">Medium (default)</core-alert>
            </div>
        `})},d={args:{type:`red`,showClose:!0,default:`Click the X to dismiss.`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'blue',
    default: 'Informational message.'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'green',
    default: 'Saved successfully.'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'red',
    default: 'Something went wrong — please retry.'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'yellow',
    default: 'Heads up — this needs your attention.'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
            <div style="display:flex; flex-direction:column; gap:12px;">
                <core-alert type="blue" size="smaller">Smaller</core-alert>
                <core-alert type="blue" size="small">Small</core-alert>
                <core-alert type="blue" size="medium">Medium (default)</core-alert>
            </div>
        \`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'red',
    showClose: true,
    default: 'Click the X to dismiss.'
  }
}`,...d.parameters?.docs?.source}}},f=[`Blue`,`Green`,`Red`,`Yellow`,`AllSizes`,`Closable`]}));p();export{u as AllSizes,o as Blue,d as Closable,s as Green,c as Red,l as Yellow,f as __namedExportsOrder,a as default,p as n,i as t};