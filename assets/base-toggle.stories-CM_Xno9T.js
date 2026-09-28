import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Fn as n,_t as r,en as i,gt as a}from"./iframe-D8aQDl12.js";var o=t({Default:()=>c,Disabled:()=>u,DisabledOn:()=>d,On:()=>l,__namedExportsOrder:()=>f,default:()=>s}),s,c,l,u,d,f,p=e((()=>{i(),r(),s={title:`Components/Base/Toggle`,component:a,argTypes:{modelValue:{control:`boolean`},disabled:{control:`boolean`},default:{control:`text`,description:`Slot content (label)`}},args:{modelValue:!1,default:`Enable feature`},render:e=>({components:{BaseToggle:a},setup(){return{args:e,v:n(e.modelValue)}},template:`<base-toggle v-bind="args" v-model="v">{{ args.default }}</base-toggle>`})},c={},l={args:{modelValue:!0,default:`Enabled`}},u={args:{disabled:!0,default:`Disabled (off)`}},d={args:{disabled:!0,modelValue:!0,default:`Disabled (on)`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    default: 'Enabled'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    default: 'Disabled (off)'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    modelValue: true,
    default: 'Disabled (on)'
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`On`,`Disabled`,`DisabledOn`]}));p();export{c as Default,u as Disabled,d as DisabledOn,l as On,f as __namedExportsOrder,s as default,p as n,o as t};