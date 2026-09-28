import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{a as n,o as r}from"./iframe-D8aQDl12.js";var i=t({Default:()=>o,Full:()=>u,Half:()=>c,Quarter:()=>s,Sizes:()=>p,Thick:()=>f,Thin:()=>d,ThreeQuarter:()=>l,__namedExportsOrder:()=>m,default:()=>a}),a,o,s,c,l,u,d,f,p,m,h=e((()=>{r(),a={title:`Components/Core/Progress Circle`,component:n,parameters:{docs:{description:{component:`Animated SVG progress arc. Used inside <core-processing-popup> and standalone for any 0-100% indicator.`}}},argTypes:{percent:{control:{type:`range`,min:0,max:100,step:1}},strokeWidth:{control:{type:`range`,min:2,max:16,step:1}}},args:{percent:67,strokeWidth:8},render:e=>({components:{SvgProgressCircle:n},setup(){return{args:e}},template:`<div style="width:80px; height:80px; color:#005AE0;"><svg-progress-circle v-bind="args" /></div>`})},o={},s={args:{percent:25,strokeWidth:8}},c={args:{percent:50,strokeWidth:8}},l={args:{percent:75,strokeWidth:8}},u={args:{percent:100,strokeWidth:8}},d={parameters:{docs:{description:{story:`Thinner stroke for inline contexts where the arc is decorative.`}}},args:{percent:65,strokeWidth:3}},f={parameters:{docs:{description:{story:`Thicker stroke for prominent progress reads.`}}},args:{percent:40,strokeWidth:12}},p={parameters:{docs:{description:{story:`The component renders into a 34×34 viewBox; size with the parent container.`}}},render:()=>({template:`
            <div style="display:flex; align-items:center; gap:24px;">
                <div style="width:32px; height:32px;"><svg-progress-circle :percent="62" :stroke-width="6" /></div>
                <div style="width:48px; height:48px;"><svg-progress-circle :percent="62" :stroke-width="6" /></div>
                <div style="width:64px; height:64px;"><svg-progress-circle :percent="62" :stroke-width="6" /></div>
                <div style="width:96px; height:96px;"><svg-progress-circle :percent="62" :stroke-width="6" /></div>
                <div style="width:128px; height:128px;"><svg-progress-circle :percent="62" :stroke-width="6" /></div>
            </div>
        `})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    percent: 25,
    strokeWidth: 8
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    percent: 50,
    strokeWidth: 8
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    percent: 75,
    strokeWidth: 8
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    percent: 100,
    strokeWidth: 8
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Thinner stroke for inline contexts where the arc is decorative.'
      }
    }
  },
  args: {
    percent: 65,
    strokeWidth: 3
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Thicker stroke for prominent progress reads.'
      }
    }
  },
  args: {
    percent: 40,
    strokeWidth: 12
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The component renders into a 34×34 viewBox; size with the parent container.'
      }
    }
  },
  render: () => ({
    template: \`
            <div style="display:flex; align-items:center; gap:24px;">
                <div style="width:32px; height:32px;"><svg-progress-circle :percent="62" :stroke-width="6" /></div>
                <div style="width:48px; height:48px;"><svg-progress-circle :percent="62" :stroke-width="6" /></div>
                <div style="width:64px; height:64px;"><svg-progress-circle :percent="62" :stroke-width="6" /></div>
                <div style="width:96px; height:96px;"><svg-progress-circle :percent="62" :stroke-width="6" /></div>
                <div style="width:128px; height:128px;"><svg-progress-circle :percent="62" :stroke-width="6" /></div>
            </div>
        \`
  })
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Quarter`,`Half`,`ThreeQuarter`,`Full`,`Thin`,`Thick`,`Sizes`]}));h();export{o as Default,u as Full,c as Half,s as Quarter,p as Sizes,f as Thick,d as Thin,l as ThreeQuarter,m as __namedExportsOrder,a as default,h as n,i as t};