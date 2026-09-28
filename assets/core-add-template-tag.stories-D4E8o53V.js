import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{_ as n,v as r}from"./iframe-D8aQDl12.js";var i=t({ChipRow:()=>s,Default:()=>o,InContext:()=>c,__namedExportsOrder:()=>l,default:()=>a}),a,o,s,c,l,u=e((()=>{r(),a={title:`Components/Core/Add Template Tag`,component:n,parameters:{docs:{description:{component:`Click-to-insert tag chip rendered above editor inputs in <core-html-tags-editor>. Pure presentational — no props.`}}},render:()=>({components:{CoreAddTemplateTag:n},template:`<core-add-template-tag>#post_title</core-add-template-tag>`})},o={},s={parameters:{docs:{description:{story:`A row of chips like the editor renders. Each is clickable; click inserts the tag at the editor cursor.`}}},render:()=>({template:`
            <div style="display:flex; flex-wrap:wrap; gap:6px; max-width:520px;">
                <core-add-template-tag>#post_title</core-add-template-tag>
                <core-add-template-tag>#site_title</core-add-template-tag>
                <core-add-template-tag>#author_name</core-add-template-tag>
                <core-add-template-tag>#category_title</core-add-template-tag>
                <core-add-template-tag>#separator_sa</core-add-template-tag>
                <core-add-template-tag>#current_date</core-add-template-tag>
                <core-add-template-tag>#post_excerpt</core-add-template-tag>
            </div>
        `})},c={parameters:{docs:{description:{story:`How this looks above an actual editor field.`}}},render:()=>({template:`
            <div style="max-width:520px; font-family:-apple-system,sans-serif;">
                <div style="font-size:13px; color:#555D66; margin-bottom:8px;">Insert smart tags into your meta title:</div>
                <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px;">
                    <core-add-template-tag>#post_title</core-add-template-tag>
                    <core-add-template-tag>#separator_sa</core-add-template-tag>
                    <core-add-template-tag>#site_title</core-add-template-tag>
                    <a style="align-self:center; font-size:12px; color:#005AE0; text-decoration:none;">View all tags →</a>
                </div>
                <base-input placeholder="Type to compose your title with tags..." />
            </div>
        `})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A row of chips like the editor renders. Each is clickable; click inserts the tag at the editor cursor.'
      }
    }
  },
  render: () => ({
    template: \`
            <div style="display:flex; flex-wrap:wrap; gap:6px; max-width:520px;">
                <core-add-template-tag>#post_title</core-add-template-tag>
                <core-add-template-tag>#site_title</core-add-template-tag>
                <core-add-template-tag>#author_name</core-add-template-tag>
                <core-add-template-tag>#category_title</core-add-template-tag>
                <core-add-template-tag>#separator_sa</core-add-template-tag>
                <core-add-template-tag>#current_date</core-add-template-tag>
                <core-add-template-tag>#post_excerpt</core-add-template-tag>
            </div>
        \`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'How this looks above an actual editor field.'
      }
    }
  },
  render: () => ({
    template: \`
            <div style="max-width:520px; font-family:-apple-system,sans-serif;">
                <div style="font-size:13px; color:#555D66; margin-bottom:8px;">Insert smart tags into your meta title:</div>
                <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px;">
                    <core-add-template-tag>#post_title</core-add-template-tag>
                    <core-add-template-tag>#separator_sa</core-add-template-tag>
                    <core-add-template-tag>#site_title</core-add-template-tag>
                    <a style="align-self:center; font-size:12px; color:#005AE0; text-decoration:none;">View all tags →</a>
                </div>
                <base-input placeholder="Type to compose your title with tags..." />
            </div>
        \`
  })
}`,...c.parameters?.docs?.source}}},l=[`Default`,`ChipRow`,`InContext`]}));u();export{s as ChipRow,o as Default,c as InContext,l as __namedExportsOrder,a as default,u as n,i as t};