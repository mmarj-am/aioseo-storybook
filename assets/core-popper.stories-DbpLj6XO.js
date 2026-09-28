import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{H as n,V as r}from"./iframe-D8aQDl12.js";var i=t({ClickToToggle:()=>s,Default:()=>o,RichContent:()=>c,__namedExportsOrder:()=>l,default:()=>a}),a,o,s,c,l,u=e((()=>{n(),a={title:`Components/Core/Popper`,component:r,argTypes:{trigger:{control:`select`,options:[`hover`,`click`,`focus`,`clickToOpen`,`clickToToggle`]},content:{control:`text`},disabled:{control:`boolean`}},args:{trigger:`hover`,content:`Popper body content`},render:e=>({components:{CorePopper:r},setup(){return{args:e}},template:`
            <div style="padding:80px;">
                <core-popper v-bind="args">
                    <template #reference>
                        <base-button type="blue">Hover me</base-button>
                    </template>
                </core-popper>
            </div>
        `})},o={},s={args:{trigger:`clickToToggle`,content:`Click again to dismiss`}},c={render:()=>({template:`
            <div style="padding:80px;">
                <core-popper trigger="click">
                    <div style="padding:8px 12px; max-width:240px;">
                        <strong>Rich popper body</strong>
                        <p style="margin:4px 0 0; font-size:13px; color:#555D66;">Anything in the default slot becomes the popper content.</p>
                    </div>
                    <template #reference>
                        <base-button type="blue">Click me</base-button>
                    </template>
                </core-popper>
            </div>
        `})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: 'clickToToggle',
    content: 'Click again to dismiss'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
            <div style="padding:80px;">
                <core-popper trigger="click">
                    <div style="padding:8px 12px; max-width:240px;">
                        <strong>Rich popper body</strong>
                        <p style="margin:4px 0 0; font-size:13px; color:#555D66;">Anything in the default slot becomes the popper content.</p>
                    </div>
                    <template #reference>
                        <base-button type="blue">Click me</base-button>
                    </template>
                </core-popper>
            </div>
        \`
  })
}`,...c.parameters?.docs?.source}}},l=[`Default`,`ClickToToggle`,`RichContent`]}));u();export{s as ClickToToggle,o as Default,c as RichContent,l as __namedExportsOrder,a as default,u as n,i as t};