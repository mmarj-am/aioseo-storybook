import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{b as n,y as r}from"./iframe-D8aQDl12.js";var i=t({Default:()=>o,WithUpsellOverlay:()=>s,__namedExportsOrder:()=>c,default:()=>a}),a,o,s,c,l=e((()=>{n(),a={title:`Components/Core/Blur`,component:r,parameters:{docs:{description:{component:`CSS-blur wrapper used to gate Pro-only previews. Anything inside the slot becomes unreadable and unclickable.`}}}},o={render:()=>({template:`
            <div style="position:relative; padding:32px; background:#F9F9FA; border:1px solid #E8E8EB; border-radius:8px; max-width:480px;">
                <core-blur>
                    <div style="font-family:-apple-system,sans-serif;">
                        <h3 style="margin:0 0 12px; font-size:18px; color:#141B38;">Search Statistics</h3>
                        <p style="margin:0 0 8px; color:#3c434a; font-size:14px;">Last 30 days · Total impressions: 1,247,891</p>
                        <p style="margin:0; color:#555D66; font-size:13px;">Top query: "wordpress seo guide" — 23,400 clicks at avg position 4.2.</p>
                    </div>
                </core-blur>
            </div>
        `})},s={parameters:{docs:{description:{story:`Common production pattern: blur the gated content, overlay an upsell CTA on top.`}}},render:()=>({template:`
            <div style="position:relative; padding:32px; background:#F9F9FA; border:1px solid #E8E8EB; border-radius:8px; max-width:480px;">
                <core-blur>
                    <div style="font-family:-apple-system,sans-serif;">
                        <h3 style="margin:0 0 12px; font-size:18px; color:#141B38;">Search Statistics</h3>
                        <p style="margin:0 0 8px; color:#3c434a; font-size:14px;">Last 30 days · Total impressions: 1,247,891</p>
                        <p style="margin:0; color:#555D66; font-size:13px;">Top query: "wordpress seo guide" — 23,400 clicks at avg position 4.2.</p>
                    </div>
                </core-blur>
                <div style="position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; background:rgba(255,255,255,0.6); border-radius:8px; padding:24px; text-align:center;">
                    <core-pro-badge style="margin-bottom:12px;">PRO</core-pro-badge>
                    <div style="font-family:-apple-system,sans-serif; font-size:16px; font-weight:600; color:#141B38; margin-bottom:8px;">Unlock Search Statistics</div>
                    <base-button type="green">Upgrade to Pro</base-button>
                </div>
            </div>
        `})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
            <div style="position:relative; padding:32px; background:#F9F9FA; border:1px solid #E8E8EB; border-radius:8px; max-width:480px;">
                <core-blur>
                    <div style="font-family:-apple-system,sans-serif;">
                        <h3 style="margin:0 0 12px; font-size:18px; color:#141B38;">Search Statistics</h3>
                        <p style="margin:0 0 8px; color:#3c434a; font-size:14px;">Last 30 days · Total impressions: 1,247,891</p>
                        <p style="margin:0; color:#555D66; font-size:13px;">Top query: "wordpress seo guide" — 23,400 clicks at avg position 4.2.</p>
                    </div>
                </core-blur>
            </div>
        \`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Common production pattern: blur the gated content, overlay an upsell CTA on top.'
      }
    }
  },
  render: () => ({
    template: \`
            <div style="position:relative; padding:32px; background:#F9F9FA; border:1px solid #E8E8EB; border-radius:8px; max-width:480px;">
                <core-blur>
                    <div style="font-family:-apple-system,sans-serif;">
                        <h3 style="margin:0 0 12px; font-size:18px; color:#141B38;">Search Statistics</h3>
                        <p style="margin:0 0 8px; color:#3c434a; font-size:14px;">Last 30 days · Total impressions: 1,247,891</p>
                        <p style="margin:0; color:#555D66; font-size:13px;">Top query: "wordpress seo guide" — 23,400 clicks at avg position 4.2.</p>
                    </div>
                </core-blur>
                <div style="position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; background:rgba(255,255,255,0.6); border-radius:8px; padding:24px; text-align:center;">
                    <core-pro-badge style="margin-bottom:12px;">PRO</core-pro-badge>
                    <div style="font-family:-apple-system,sans-serif; font-size:16px; font-weight:600; color:#141B38; margin-bottom:8px;">Unlock Search Statistics</div>
                    <base-button type="green">Upgrade to Pro</base-button>
                </div>
            </div>
        \`
  })
}`,...s.parameters?.docs?.source}}},c=[`Default`,`WithUpsellOverlay`]}));l();export{o as Default,s as WithUpsellOverlay,c as __namedExportsOrder,a as default,l as n,i as t};