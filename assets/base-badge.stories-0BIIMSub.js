import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{at as n,it as r}from"./iframe-D8aQDl12.js";var i=t({Colors:()=>s,Default:()=>o,InTabStrip:()=>c,NumericCount:()=>l,__namedExportsOrder:()=>u,default:()=>a}),a,o,s,c,l,u,d=e((()=>{n(),a={title:`Components/Base/Badge`,component:r,parameters:{docs:{description:{component:`Small status pill — version markers, NEW labels, counts. Use core-pro-badge instead for upgrade-gated features.`}}},argTypes:{color:{control:`select`,options:[`black`,`green`,`red`,`orange`]},text:{control:`text`}},args:{color:`green`,text:`NEW`},render:e=>({components:{BaseBadge:r},setup(){return{args:e}},template:`<base-badge :color="args.color" :text="args.text" />`})},o={},s={parameters:{docs:{description:{story:`Four supported tones: black (neutral), green (positive/new), red (warning), orange (attention).`}}},render:()=>({template:`
            <div style="display:flex; gap:12px; align-items:center;">
                <base-badge color="black"  text="BETA" />
                <base-badge color="green"  text="NEW" />
                <base-badge color="red"    text="LEGACY" />
                <base-badge color="orange" text="DEPRECATED" />
            </div>
        `})},c={parameters:{docs:{description:{story:`Inline next to a tab label — the canonical Image #23 pattern.`}}},render:()=>({template:`
            <div style="display:flex; align-items:center; gap:8px; font-weight:600; color:#141B38;">
                SEO Checklist
                <base-badge color="green" text="NEW!" />
            </div>
        `})},l={parameters:{docs:{description:{story:`Numbers also valid — useful for unread counts and inventory chips.`}}},render:()=>({template:`<base-badge color="black" :text="12" />`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Four supported tones: black (neutral), green (positive/new), red (warning), orange (attention).'
      }
    }
  },
  render: () => ({
    template: \`
            <div style="display:flex; gap:12px; align-items:center;">
                <base-badge color="black"  text="BETA" />
                <base-badge color="green"  text="NEW" />
                <base-badge color="red"    text="LEGACY" />
                <base-badge color="orange" text="DEPRECATED" />
            </div>
        \`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Inline next to a tab label — the canonical Image #23 pattern.'
      }
    }
  },
  render: () => ({
    template: \`
            <div style="display:flex; align-items:center; gap:8px; font-weight:600; color:#141B38;">
                SEO Checklist
                <base-badge color="green" text="NEW!" />
            </div>
        \`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Numbers also valid — useful for unread counts and inventory chips.'
      }
    }
  },
  render: () => ({
    template: \`<base-badge color="black" :text="12" />\`
  })
}`,...l.parameters?.docs?.source}}},u=[`Default`,`Colors`,`InTabStrip`,`NumericCount`]}));d();export{s as Colors,o as Default,c as InTabStrip,l as NumericCount,u as __namedExportsOrder,a as default,d as n,i as t};