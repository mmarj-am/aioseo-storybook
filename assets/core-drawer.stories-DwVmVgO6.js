import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{D as n,Fn as r,O as i,en as a}from"./iframe-D8aQDl12.js";var o=t({Default:()=>c,NoHeader:()=>u,Wide:()=>l,__namedExportsOrder:()=>d,default:()=>s}),s,c,l,u,d,f=e((()=>{a(),i(),s={title:`Components/Core/Drawer`,component:n,parameters:{docs:{description:{component:`Right-anchored slide-in drawer. Same modal-stack semantics as core-modal — opens on top, ESC routes to topmost.`}}}},c={render:()=>({components:{CoreDrawer:n},setup(){return{show:r(!1)}},template:`
            <div>
                <base-button type="blue" @click="show = true">Open writing assistant</base-button>
                <core-drawer :show="show" title="Writing Assistant" teleport-to="body" @close="show = false">
                    <div style="padding:20px 0;">
                        <p style="margin:0 0 12px;">Score this post against your target keyphrase. Run a fresh analysis or review the latest result.</p>
                        <base-button type="blue">Run analysis</base-button>
                    </div>
                </core-drawer>
            </div>
        `})},l={render:()=>({components:{CoreDrawer:n},setup(){return{show:r(!1)}},template:`
            <div>
                <base-button type="blue" @click="show = true">Open wide drawer</base-button>
                <core-drawer :show="show" title="Redirects" :width="640" teleport-to="body" @close="show = false">
                    <p style="margin:0;">A wider drawer for table-like content. Width accepts a number (px) or string (e.g. <code>"50vw"</code>).</p>
                </core-drawer>
            </div>
        `})},u={render:()=>({components:{CoreDrawer:n},setup(){return{show:r(!1)}},template:`
            <div>
                <base-button @click="show = true">Open headerless</base-button>
                <core-drawer :show="show" :no-header="true" teleport-to="body" @close="show = false">
                    <div style="padding:24px 0;">
                        <p style="margin:0;">Without a header you own the close affordance entirely.</p>
                        <base-button style="margin-top:16px;" @click="show = false">Done</base-button>
                    </div>
                </core-drawer>
            </div>
        `})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CoreDrawer
    },
    setup() {
      const show = ref(false);
      return {
        show
      };
    },
    template: \`
            <div>
                <base-button type="blue" @click="show = true">Open writing assistant</base-button>
                <core-drawer :show="show" title="Writing Assistant" teleport-to="body" @close="show = false">
                    <div style="padding:20px 0;">
                        <p style="margin:0 0 12px;">Score this post against your target keyphrase. Run a fresh analysis or review the latest result.</p>
                        <base-button type="blue">Run analysis</base-button>
                    </div>
                </core-drawer>
            </div>
        \`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CoreDrawer
    },
    setup() {
      const show = ref(false);
      return {
        show
      };
    },
    template: \`
            <div>
                <base-button type="blue" @click="show = true">Open wide drawer</base-button>
                <core-drawer :show="show" title="Redirects" :width="640" teleport-to="body" @close="show = false">
                    <p style="margin:0;">A wider drawer for table-like content. Width accepts a number (px) or string (e.g. <code>"50vw"</code>).</p>
                </core-drawer>
            </div>
        \`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CoreDrawer
    },
    setup() {
      const show = ref(false);
      return {
        show
      };
    },
    template: \`
            <div>
                <base-button @click="show = true">Open headerless</base-button>
                <core-drawer :show="show" :no-header="true" teleport-to="body" @close="show = false">
                    <div style="padding:24px 0;">
                        <p style="margin:0;">Without a header you own the close affordance entirely.</p>
                        <base-button style="margin-top:16px;" @click="show = false">Done</base-button>
                    </div>
                </core-drawer>
            </div>
        \`
  })
}`,...u.parameters?.docs?.source}}},d=[`Default`,`Wide`,`NoHeader`]}));f();export{c as Default,u as NoHeader,l as Wide,d as __namedExportsOrder,s as default,f as n,o as t};