import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Dt as n,Ot as r}from"./iframe-D8aQDl12.js";var i=t({Default:()=>o,Disabled:()=>d,Loading:()=>u,Sizes:()=>c,States:()=>l,Types:()=>s,__namedExportsOrder:()=>f,default:()=>a}),a,o,s,c,l,u,d,f,p=e((()=>{r(),a={title:`Components/Base/Button`,component:n,argTypes:{type:{control:`select`,options:[`default`,`blue`,`black`,`green`,`red`,`gray`,`wp-blue`]},size:{control:`select`,options:[``,`small-table`,`small`,`medium`,`large`]},loading:{control:`boolean`},disabled:{control:`boolean`},link:{control:`boolean`},newBadge:{control:`boolean`},default:{control:`text`,description:`Slot content`}},args:{type:`blue`,size:`medium`,default:`Save changes`},render:e=>({components:{BaseButton:n},setup(){return{args:e}},template:`<base-button v-bind="args">{{ args.default }}</base-button>`})},o={},s={render:()=>({template:`
            <div style="display:flex; gap:12px; flex-wrap:wrap;">
                <base-button type="default">Default</base-button>
                <base-button type="blue">Blue</base-button>
                <base-button type="black">Black</base-button>
                <base-button type="green">Green</base-button>
                <base-button type="red">Red</base-button>
                <base-button type="gray">Gray</base-button>
                <base-button type="wp-blue">WP Blue</base-button>
            </div>
        `})},c={render:()=>({template:`
            <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
                <base-button size="small-table" type="blue">small-table</base-button>
                <base-button size="small"       type="blue">small</base-button>
                <base-button size="medium"      type="blue">medium</base-button>
                <base-button size="large"       type="blue">large</base-button>
            </div>
        `})},l={render:()=>({template:`
            <div style="display:flex; gap:12px; flex-wrap:wrap;">
                <base-button type="blue">Idle</base-button>
                <base-button type="blue" :loading="true">Loading</base-button>
                <base-button type="blue" :disabled="true">Disabled</base-button>
                <base-button type="blue" :link="true">Link</base-button>
                <base-button type="blue" :new-badge="true">New badge</base-button>
            </div>
        `})},u={args:{loading:!0,type:`blue`,default:`Saving...`}},d={args:{disabled:!0,type:`blue`,default:`Disabled`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
            <div style="display:flex; gap:12px; flex-wrap:wrap;">
                <base-button type="default">Default</base-button>
                <base-button type="blue">Blue</base-button>
                <base-button type="black">Black</base-button>
                <base-button type="green">Green</base-button>
                <base-button type="red">Red</base-button>
                <base-button type="gray">Gray</base-button>
                <base-button type="wp-blue">WP Blue</base-button>
            </div>
        \`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
            <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
                <base-button size="small-table" type="blue">small-table</base-button>
                <base-button size="small"       type="blue">small</base-button>
                <base-button size="medium"      type="blue">medium</base-button>
                <base-button size="large"       type="blue">large</base-button>
            </div>
        \`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
            <div style="display:flex; gap:12px; flex-wrap:wrap;">
                <base-button type="blue">Idle</base-button>
                <base-button type="blue" :loading="true">Loading</base-button>
                <base-button type="blue" :disabled="true">Disabled</base-button>
                <base-button type="blue" :link="true">Link</base-button>
                <base-button type="blue" :new-badge="true">New badge</base-button>
            </div>
        \`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    type: 'blue',
    default: 'Saving...'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    type: 'blue',
    default: 'Disabled'
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Types`,`Sizes`,`States`,`Loading`,`Disabled`]}));p();export{o as Default,d as Disabled,u as Loading,c as Sizes,l as States,s as Types,f as __namedExportsOrder,a as default,p as n,i as t};