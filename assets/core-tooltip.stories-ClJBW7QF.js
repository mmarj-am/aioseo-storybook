import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{B as n,z as r}from"./iframe-D8aQDl12.js";var i=t({Default:()=>o,RichContent:()=>s,__namedExportsOrder:()=>c,default:()=>a}),a,o,s,c,l=e((()=>{n(),a={title:`Components/Core/Tooltip`,component:r,argTypes:{tooltip:{control:`text`},type:{control:`select`,options:[``,`dark`,`light`]},placement:{control:`select`,options:[`top`,`bottom`,`left`,`right`]},trigger:{control:`select`,options:[`hover`,`click`,`focus`]}},args:{tooltip:`I am a tooltip`,placement:`top`,trigger:`hover`},render:e=>({components:{CoreTooltip:r},setup(){return{args:e}},template:`
            <div style="padding:80px;">
                <core-tooltip v-bind="args">
                    <svg-circle-question-mark style="width:18px; height:18px; cursor:help;" />
                </core-tooltip>
            </div>
        `})},o={},s={render:()=>({template:`
            <div style="padding:80px;">
                <core-tooltip placement="right">
                    <base-button type="blue">Hover me</base-button>
                    <template #tooltip>
                        <strong>Custom tooltip body</strong><br/>
                        You can render any markup inside the <code>#tooltip</code> slot.
                    </template>
                </core-tooltip>
            </div>
        `})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
            <div style="padding:80px;">
                <core-tooltip placement="right">
                    <base-button type="blue">Hover me</base-button>
                    <template #tooltip>
                        <strong>Custom tooltip body</strong><br/>
                        You can render any markup inside the <code>#tooltip</code> slot.
                    </template>
                </core-tooltip>
            </div>
        \`
  })
}`,...s.parameters?.docs?.source}}},c=[`Default`,`RichContent`]}));l();export{o as Default,s as RichContent,c as __namedExportsOrder,a as default,l as n,i as t};