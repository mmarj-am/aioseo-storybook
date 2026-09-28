import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Fn as n,N as r,P as i,en as a}from"./iframe-D8aQDl12.js";var o=t({Default:()=>c,RequiredField:()=>l,Stacked:()=>u,__namedExportsOrder:()=>d,default:()=>s}),s,c,l,u,d,f=e((()=>{a(),i(),s={title:`Components/Core/Settings Row`,component:r,parameters:{layout:`fullscreen`},decorators:[e=>({components:{story:e},template:`<div style="min-width:1000px; padding:32px 40px; background:#fff;"><story /></div>`})],argTypes:{name:{control:`text`},required:{control:`boolean`},align:{control:`boolean`}},args:{name:`Site Title`},render:e=>({components:{CoreSettingsRow:r},setup(){return{args:e,v:n(`My website`)}},template:`
            <core-settings-row v-bind="args">
                <template #description>
                    Used as the page title prefix for every page on your site.
                </template>
                <template #content>
                    <base-input v-model="v" placeholder="My website" />
                </template>
            </core-settings-row>
        `})},c={},l={args:{name:`API key`,required:!0}},u={render:()=>({setup(){return{a:n(`Adam`),b:n(`Pickering`)}},template:`
            <div>
                <core-settings-row name="First name" :required="true">
                    <template #content><base-input v-model="a" /></template>
                </core-settings-row>
                <core-settings-row name="Last name">
                    <template #content><base-input v-model="b" /></template>
                </core-settings-row>
                <core-settings-row name="Notify by email">
                    <template #description>You'll receive a daily digest at 9am.</template>
                    <template #content><base-toggle :model-value="true">Enabled</base-toggle></template>
                </core-settings-row>
            </div>
        `})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'API key',
    required: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      return {
        a: ref('Adam'),
        b: ref('Pickering')
      };
    },
    template: \`
            <div>
                <core-settings-row name="First name" :required="true">
                    <template #content><base-input v-model="a" /></template>
                </core-settings-row>
                <core-settings-row name="Last name">
                    <template #content><base-input v-model="b" /></template>
                </core-settings-row>
                <core-settings-row name="Notify by email">
                    <template #description>You'll receive a daily digest at 9am.</template>
                    <template #content><base-toggle :model-value="true">Enabled</base-toggle></template>
                </core-settings-row>
            </div>
        \`
  })
}`,...u.parameters?.docs?.source}}},d=[`Default`,`RequiredField`,`Stacked`]}));f();export{c as Default,l as RequiredField,u as Stacked,d as __namedExportsOrder,s as default,f as n,o as t};