import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{L as n,R as r}from"./iframe-D8aQDl12.js";var i=t({Default:()=>o,Disabled:()=>c,WithoutHeader:()=>s,__namedExportsOrder:()=>l,default:()=>a}),a,o,s,c,l,u=e((()=>{r(),a={title:`Components/Core/Card`,component:n,argTypes:{slug:{control:`text`},headerText:{control:`text`},toggles:{control:`boolean`},hideHeader:{control:`boolean`},closes:{control:`boolean`},disabled:{control:`boolean`},noSlide:{control:`boolean`}},args:{slug:`demo-card`,headerText:`General Settings`,toggles:!1,noSlide:!0},render:e=>({components:{CoreCard:n},setup(){return{args:e}},template:`
            <core-card v-bind="args">
                <p>This is the card body. Use it to group related fields and settings.</p>
                <p style="margin:0;">Cards can be collapsible (<code>:toggles="true"</code>) or static (the default in this story).</p>
            </core-card>
        `})},o={},s={args:{hideHeader:!0,slug:`no-header`}},c={args:{slug:`disabled-card`,disabled:!0,headerText:`Premium feature`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    hideHeader: true,
    slug: 'no-header'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    slug: 'disabled-card',
    disabled: true,
    headerText: 'Premium feature'
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`WithoutHeader`,`Disabled`]}));u();export{o as Default,c as Disabled,s as WithoutHeader,l as __namedExportsOrder,a as default,u as n,i as t};