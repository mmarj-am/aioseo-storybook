import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{d as n,f as r}from"./iframe-D8aQDl12.js";var i=t({Default:()=>o,Loading:()=>s,NoImage:()=>l,ShortCopy:()=>c,__namedExportsOrder:()=>u,default:()=>a}),a,o,s,c,l,u,d=e((()=>{r(),a={title:`Components/Core/Facebook Preview`,component:n,parameters:{docs:{description:{component:`Facebook share-card preview. Live updates as title/description/image change. Used in the Post Editor sidebar (Social tab) and in Search Appearance.`}},layout:`centered`},argTypes:{title:{control:`text`},description:{control:`text`},image:{control:`text`},loading:{control:`boolean`}},args:{title:`Why On-Page SEO Still Matters in 2026`,description:`A practical walkthrough of what to fix first on a content-driven site, and why the basics keep beating clever tricks.`,image:`https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&h=630&fit=crop`,loading:!1},render:e=>({components:{CoreFacebookPreview:n},setup(){return{args:e}},template:`<div style="max-width:540px;"><core-facebook-preview v-bind="args" /></div>`})},o={},s={parameters:{docs:{description:{story:`Image loading state — overlays the spinner above the artwork.`}}},args:{loading:!0}},c={parameters:{docs:{description:{story:`Title and description short enough to fit without truncation.`}}},args:{title:`AIOSEO 4.5 is out`,description:`Faster sitemaps, better defaults.`}},l={parameters:{docs:{description:{story:`No social image set. The card collapses gracefully — production shows a Dannie placeholder.`}}},args:{image:``}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Image loading state — overlays the spinner above the artwork.'
      }
    }
  },
  args: {
    loading: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Title and description short enough to fit without truncation.'
      }
    }
  },
  args: {
    title: 'AIOSEO 4.5 is out',
    description: 'Faster sitemaps, better defaults.'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'No social image set. The card collapses gracefully — production shows a Dannie placeholder.'
      }
    }
  },
  args: {
    image: ''
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`Loading`,`ShortCopy`,`NoImage`]}));d();export{o as Default,s as Loading,l as NoImage,c as ShortCopy,u as __namedExportsOrder,a as default,d as n,i as t};