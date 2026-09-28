import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{c as n,s as r}from"./iframe-D8aQDl12.js";var i=t({Default:()=>o,Mobile:()=>s,NoKeyphrase:()=>l,TitleTooLong:()=>c,__namedExportsOrder:()=>u,default:()=>a}),a,o,s,c,l,u,d=e((()=>{n(),a={title:`Components/Core/Google Search Preview`,component:r,parameters:{docs:{description:{component:`Google SERP snippet preview. Renders title (capped at 70 chars), URL breadcrumbs, and description as Google would. Used in the post editor and Search Appearance.`}},layout:`centered`},argTypes:{title:{control:`text`},description:{control:`text`},hostname:{control:`text`},url:{control:`text`},device:{control:`select`,options:[`desktop`,`mobile`]},focusKeyphrase:{control:`text`}},args:{title:`Why On-Page SEO Still Matters in 2026 — A Practical Guide`,description:`A practical walkthrough of what to fix first on a content-driven site, and why the basics keep beating clever tricks.`,hostname:`example.com`,url:`https://example.com/blog/why-seo-matters/`,device:`desktop`,focusKeyphrase:`on-page seo`},render:e=>({components:{CoreGoogleSearchPreview:r},setup(){return{args:e}},template:`<div style="max-width:600px;"><core-google-search-preview v-bind="args" /></div>`})},o={},s={parameters:{docs:{description:{story:`Mobile SERP layout — tighter, favicon-first.`}}},args:{device:`mobile`}},c={parameters:{docs:{description:{story:`Titles past 70 characters are truncated with an ellipsis. Editors see this immediately.`}}},args:{title:`A Comprehensive, Exhaustive, Belt-and-Braces Walkthrough of Every Single On-Page SEO Heuristic Worth Knowing in the Year 2026`}},l={parameters:{docs:{description:{story:`Without a focus keyphrase, the description renders without any highlighted matches.`}}},args:{focusKeyphrase:``}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Mobile SERP layout — tighter, favicon-first.'
      }
    }
  },
  args: {
    device: 'mobile'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Titles past 70 characters are truncated with an ellipsis. Editors see this immediately.'
      }
    }
  },
  args: {
    title: 'A Comprehensive, Exhaustive, Belt-and-Braces Walkthrough of Every Single On-Page SEO Heuristic Worth Knowing in the Year 2026'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Without a focus keyphrase, the description renders without any highlighted matches.'
      }
    }
  },
  args: {
    focusKeyphrase: ''
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`Mobile`,`TitleTooLong`,`NoKeyphrase`]}));d();export{o as Default,s as Mobile,l as NoKeyphrase,c as TitleTooLong,u as __namedExportsOrder,a as default,d as n,i as t};