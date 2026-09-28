import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Fn as n,ct as r,en as i,lt as a}from"./iframe-D8aQDl12.js";var o=t({Checked:()=>l,Default:()=>c,Disabled:()=>d,Round:()=>u,__namedExportsOrder:()=>f,default:()=>s}),s,c,l,u,d,f,p=e((()=>{i(),a(),s={title:`Components/Base/Checkbox`,component:r,argTypes:{modelValue:{control:`boolean`},disabled:{control:`boolean`},round:{control:`boolean`},size:{control:`select`,options:[``,`small`,`medium`,`large`]},type:{control:`select`,options:[`blue`,`green`,`red`,`gray`]},default:{control:`text`,description:`Label slot`}},args:{modelValue:!1,type:`blue`,default:`I agree to the terms`},render:e=>({components:{BaseCheckbox:r},setup(){return{args:e,v:n(e.modelValue)}},template:`<base-checkbox v-bind="args" v-model="v">{{ args.default }}</base-checkbox>`})},c={},l={args:{modelValue:!0}},u={args:{round:!0,modelValue:!0,default:`Rounded variant`}},d={args:{disabled:!0,default:`Disabled`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    round: true,
    modelValue: true,
    default: 'Rounded variant'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    default: 'Disabled'
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Checked`,`Round`,`Disabled`]}));p();export{l as Checked,c as Default,d as Disabled,u as Round,f as __namedExportsOrder,s as default,p as n,o as t};