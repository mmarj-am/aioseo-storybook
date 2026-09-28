import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{et as n,tt as r}from"./iframe-D8aQDl12.js";var i=t({Default:()=>o,InitiallyClosed:()=>s,NestedSettings:()=>c,__namedExportsOrder:()=>l,default:()=>a}),a,o,s,c,l,u=e((()=>{r(),a={title:`Components/Base/Collapse Box`,component:n,parameters:{docs:{description:{component:`Accordion primitive — clickable title row + animated body. Used on settings pages to group secondary options.`}}},argTypes:{open:{control:`boolean`,description:`Initial open state. The component manages its own state after mount.`}},args:{open:!0},render:e=>({components:{BaseCollapseBox:n},setup(){return{args:e}},template:`
            <base-collapse-box :open="args.open">
                <template #title>Advanced Settings</template>
                <template #body>
                    <div style="padding:8px 0; color:#555D66; line-height:1.6;">
                        Anything you don't usually touch lives behind one of these. Click the title row to toggle.
                    </div>
                </template>
            </base-collapse-box>
        `})},o={},s={parameters:{docs:{description:{story:`Closed on mount. The chevron rotates and the box gets a bordered surround until it opens.`}}},args:{open:!1}},c={parameters:{docs:{description:{story:`Real settings-page composition — collapse box around a stack of toggles.`}}},render:()=>({template:`
            <base-collapse-box :open="false">
                <template #title>Dashboard Widgets</template>
                <template #body>
                    <div style="display:flex; flex-direction:column; gap:12px; padding:8px 0;">
                        <label style="display:flex; gap:8px; align-items:center;"><input type="checkbox" checked /> SEO News</label>
                        <label style="display:flex; gap:8px; align-items:center;"><input type="checkbox" checked /> SEO Overview</label>
                        <label style="display:flex; gap:8px; align-items:center;"><input type="checkbox" /> SEO Setup</label>
                        <label style="display:flex; gap:8px; align-items:center;"><input type="checkbox" /> Welcome</label>
                    </div>
                </template>
            </base-collapse-box>
        `})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Closed on mount. The chevron rotates and the box gets a bordered surround until it opens.'
      }
    }
  },
  args: {
    open: false
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Real settings-page composition — collapse box around a stack of toggles.'
      }
    }
  },
  render: () => ({
    template: \`
            <base-collapse-box :open="false">
                <template #title>Dashboard Widgets</template>
                <template #body>
                    <div style="display:flex; flex-direction:column; gap:12px; padding:8px 0;">
                        <label style="display:flex; gap:8px; align-items:center;"><input type="checkbox" checked /> SEO News</label>
                        <label style="display:flex; gap:8px; align-items:center;"><input type="checkbox" checked /> SEO Overview</label>
                        <label style="display:flex; gap:8px; align-items:center;"><input type="checkbox" /> SEO Setup</label>
                        <label style="display:flex; gap:8px; align-items:center;"><input type="checkbox" /> Welcome</label>
                    </div>
                </template>
            </base-collapse-box>
        \`
  })
}`,...c.parameters?.docs?.source}}},l=[`Default`,`InitiallyClosed`,`NestedSettings`]}));u();export{o as Default,s as InitiallyClosed,c as NestedSettings,l as __namedExportsOrder,a as default,u as n,i as t};