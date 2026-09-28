import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Fn as n,dt as r,en as i,ut as a}from"./iframe-D8aQDl12.js";var o=t({Default:()=>l,Disabled:()=>d,Multiple:()=>u,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f,p=e((()=>{i(),r(),s=[{label:`Apples`,value:`apples`},{label:`Bananas`,value:`bananas`},{label:`Cherries`,value:`cherries`},{label:`Durian`,value:`durian`}],c={title:`Components/Base/Select`,component:a,argTypes:{multiple:{control:`boolean`},taggable:{control:`boolean`},searchable:{control:`boolean`},disabled:{control:`boolean`},placeholder:{control:`text`},size:{control:`select`,options:[``,`small`,`medium`,`large`]}},args:{placeholder:`Pick a fruit`,searchable:!0},render:e=>({components:{BaseSelect:a},setup(){return{args:e,v:n(null),options:s}},template:`<div style="max-width:320px; min-height:260px;"><base-select v-bind="args" :options="options" v-model="v" /></div>`})},l={},u={render:()=>({components:{BaseSelect:a},setup(){return{v:n([]),options:s}},template:`<div style="max-width:320px; min-height:260px;"><base-select :multiple="true" :options="options" v-model="v" placeholder="Pick fruits" /></div>`})},d={args:{disabled:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BaseSelect
    },
    setup() {
      return {
        v: ref([]),
        options: fruitOptions
      };
    },
    template: \`<div style="max-width:320px; min-height:260px;"><base-select :multiple="true" :options="options" v-model="v" placeholder="Pick fruits" /></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Multiple`,`Disabled`]}));p();export{l as Default,d as Disabled,u as Multiple,f as __namedExportsOrder,c as default,p as n,o as t};