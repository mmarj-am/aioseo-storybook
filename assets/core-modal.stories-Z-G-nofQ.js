import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{A as n,Fn as r,en as i,k as a}from"./iframe-D8aQDl12.js";var o=t({Default:()=>c,NoHeader:()=>l,__namedExportsOrder:()=>u,default:()=>s}),s,c,l,u,d=e((()=>{i(),n(),s={title:`Components/Core/Modal`,component:a,parameters:{docs:{description:{component:`Centered modal dialog. Teleports to a portal and registers itself in the modal stack so ESC and backdrop close the topmost.`}}}},c={render:()=>({components:{CoreModal:a},setup(){return{show:r(!1)}},template:`
            <div>
                <base-button type="blue" @click="show = true">Open modal</base-button>
                <core-modal :show="show" teleport-to="body" @close="show = false">
                    <template #headerTitle>
                        <h3 style="margin:0; font-size:18px;">Confirm changes</h3>
                    </template>
                    <template #body>
                        <p style="margin:0 0 12px;">Saving will overwrite your current XML sitemap with the regenerated one.</p>
                        <p style="margin:0; color:#555D66; font-size:14px;">This affects ~3,400 indexed URLs and may take 30 seconds to propagate.</p>
                    </template>
                    <template #footer>
                        <div style="display:flex; gap:8px; justify-content:flex-end;">
                            <base-button @click="show = false">Cancel</base-button>
                            <base-button type="blue" @click="show = false">Save changes</base-button>
                        </div>
                    </template>
                </core-modal>
            </div>
        `})},l={render:()=>({components:{CoreModal:a},setup(){return{show:r(!1)}},template:`
            <div>
                <base-button type="red" @click="show = true">Delete sitemap</base-button>
                <core-modal :show="show" :no-header="true" teleport-to="body" @close="show = false">
                    <template #body>
                        <h3 style="margin:0 0 8px; font-size:18px;">Delete sitemap?</h3>
                        <p style="margin:0 0 16px; color:#555D66;">This action cannot be undone.</p>
                        <div style="display:flex; gap:8px; justify-content:flex-end;">
                            <base-button @click="show = false">Cancel</base-button>
                            <base-button type="red" @click="show = false">Delete</base-button>
                        </div>
                    </template>
                </core-modal>
            </div>
        `})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CoreModal
    },
    setup() {
      const show = ref(false);
      return {
        show
      };
    },
    template: \`
            <div>
                <base-button type="blue" @click="show = true">Open modal</base-button>
                <core-modal :show="show" teleport-to="body" @close="show = false">
                    <template #headerTitle>
                        <h3 style="margin:0; font-size:18px;">Confirm changes</h3>
                    </template>
                    <template #body>
                        <p style="margin:0 0 12px;">Saving will overwrite your current XML sitemap with the regenerated one.</p>
                        <p style="margin:0; color:#555D66; font-size:14px;">This affects ~3,400 indexed URLs and may take 30 seconds to propagate.</p>
                    </template>
                    <template #footer>
                        <div style="display:flex; gap:8px; justify-content:flex-end;">
                            <base-button @click="show = false">Cancel</base-button>
                            <base-button type="blue" @click="show = false">Save changes</base-button>
                        </div>
                    </template>
                </core-modal>
            </div>
        \`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CoreModal
    },
    setup() {
      const show = ref(false);
      return {
        show
      };
    },
    template: \`
            <div>
                <base-button type="red" @click="show = true">Delete sitemap</base-button>
                <core-modal :show="show" :no-header="true" teleport-to="body" @close="show = false">
                    <template #body>
                        <h3 style="margin:0 0 8px; font-size:18px;">Delete sitemap?</h3>
                        <p style="margin:0 0 16px; color:#555D66;">This action cannot be undone.</p>
                        <div style="display:flex; gap:8px; justify-content:flex-end;">
                            <base-button @click="show = false">Cancel</base-button>
                            <base-button type="red" @click="show = false">Delete</base-button>
                        </div>
                    </template>
                </core-modal>
            </div>
        \`
  })
}`,...l.parameters?.docs?.source}}},u=[`Default`,`NoHeader`]}));d();export{c as Default,l as NoHeader,u as __namedExportsOrder,s as default,d as n,o as t};