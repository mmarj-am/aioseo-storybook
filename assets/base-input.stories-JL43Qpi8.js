import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Fn as n,en as r,vt as i,yt as a}from"./iframe-D8aQDl12.js";var o=t({Default:()=>c,Disabled:()=>d,EmailValidation:()=>p,Sizes:()=>l,States:()=>u,WithIcon:()=>f,__namedExportsOrder:()=>m,default:()=>s}),s,c,l,u,d,f,p,m,h=e((()=>{r(),a(),s={title:`Components/Base/Input`,component:i,argTypes:{size:{control:`select`,options:[``,`small`,`medium`,`large`]},type:{control:`select`,options:[`text`,`number`,`email`,`password`,`file`]},placeholder:{control:`text`},disabled:{control:`boolean`},readonly:{control:`boolean`},required:{control:`boolean`},validation:{control:`select`,options:[``,`email`,`url`]},prependIcon:{control:`text`},appendIcon:{control:`text`}},args:{size:`medium`,type:`text`,placeholder:`Type something...`},render:e=>({components:{BaseInput:i},setup(){return{args:e,value:n(``)}},template:`<base-input v-bind="args" v-model="value" />`})},c={},l={render:()=>({setup(){return{v:n(``)}},template:`
            <div style="display:flex; flex-direction:column; gap:12px; max-width:320px;">
                <base-input size="small"  v-model="v" placeholder="small" />
                <base-input size="medium" v-model="v" placeholder="medium" />
                <base-input size="large"  v-model="v" placeholder="large" />
            </div>
        `})},u={render:()=>({setup(){return{v:n(``),filled:n(`Pre-filled value`)}},template:`
            <div style="display:flex; flex-direction:column; gap:12px; max-width:320px;">
                <base-input v-model="v"      placeholder="Default" />
                <base-input v-model="filled" placeholder="Filled" />
                <base-input v-model="v"      placeholder="Disabled" :disabled="true" />
                <base-input v-model="filled" placeholder="Readonly" :readonly="true" />
                <base-input v-model="v"      placeholder="Required"  :required="true" />
            </div>
        `})},d={args:{disabled:!0,placeholder:`Disabled input`}},f={render:()=>({setup(){return{v:n(``)}},template:`
            <div style="max-width:320px;">
                <base-input v-model="v" placeholder="Search..." prepend-icon="search" />
            </div>
        `})},p={parameters:{docs:{description:{story:"Email validation runs on blur. Type an invalid email and tab away to see the inline error alert (driven by Input.vue's internal `validate()`)."}}},render:()=>({setup(){return{v:n(`not-an-email`)}},template:`
            <div style="max-width:320px;">
                <base-input v-model="v" type="email" validation="email" placeholder="you@example.com" />
                <div style="font-size:12px; color:#555D66; margin-top:8px;">Tab out of the field to trigger validation.</div>
            </div>
        `})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      return {
        v: ref('')
      };
    },
    template: \`
            <div style="display:flex; flex-direction:column; gap:12px; max-width:320px;">
                <base-input size="small"  v-model="v" placeholder="small" />
                <base-input size="medium" v-model="v" placeholder="medium" />
                <base-input size="large"  v-model="v" placeholder="large" />
            </div>
        \`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      return {
        v: ref(''),
        filled: ref('Pre-filled value')
      };
    },
    template: \`
            <div style="display:flex; flex-direction:column; gap:12px; max-width:320px;">
                <base-input v-model="v"      placeholder="Default" />
                <base-input v-model="filled" placeholder="Filled" />
                <base-input v-model="v"      placeholder="Disabled" :disabled="true" />
                <base-input v-model="filled" placeholder="Readonly" :readonly="true" />
                <base-input v-model="v"      placeholder="Required"  :required="true" />
            </div>
        \`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled input'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      return {
        v: ref('')
      };
    },
    template: \`
            <div style="max-width:320px;">
                <base-input v-model="v" placeholder="Search..." prepend-icon="search" />
            </div>
        \`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Email validation runs on blur. Type an invalid email and tab away to see the inline error alert (driven by Input.vue\\'s internal \`validate()\`).'
      }
    }
  },
  render: () => ({
    setup() {
      return {
        v: ref('not-an-email')
      };
    },
    template: \`
            <div style="max-width:320px;">
                <base-input v-model="v" type="email" validation="email" placeholder="you@example.com" />
                <div style="font-size:12px; color:#555D66; margin-top:8px;">Tab out of the field to trigger validation.</div>
            </div>
        \`
  })
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Sizes`,`States`,`Disabled`,`WithIcon`,`EmailValidation`]}));h();export{c as Default,d as Disabled,p as EmailValidation,l as Sizes,u as States,f as WithIcon,m as __namedExportsOrder,s as default,h as n,o as t};