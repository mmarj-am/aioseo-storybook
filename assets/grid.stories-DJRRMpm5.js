import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{F as n,I as r}from"./iframe-D8aQDl12.js";var i=t({Alignment:()=>u,HalfAndHalf:()=>c,Responsive:()=>l,TwelveColumns:()=>s,__namedExportsOrder:()=>d,default:()=>a}),a,o,s,c,l,u,d,f=e((()=>{r(),a={title:`Components/Grid`,component:n,parameters:{docs:{description:{component:`Twelve-column responsive grid. The md breakpoint is 912px.`}}}},o=`background:#005AE0; color:#fff; padding:12px; border-radius:3px; text-align:center; font-size:13px;`,s={render:()=>({template:`
            <grid-row>
                <grid-column md="1" v-for="n in 12" :key="n">
                    <div style="${o}">{{ n }}</div>
                </grid-column>
            </grid-row>
        `})},c={render:()=>({template:`
            <grid-row>
                <grid-column md="6"><div style="${o}">md=6</div></grid-column>
                <grid-column md="6"><div style="${o}">md=6</div></grid-column>
            </grid-row>
        `})},l={parameters:{docs:{description:{story:`Resize the canvas to see this collapse to a single column under 912px.`}}},render:()=>({template:`
            <grid-row>
                <grid-column xs="12" md="3"><div style="${o}">xs=12 / md=3</div></grid-column>
                <grid-column xs="12" md="9"><div style="${o}">xs=12 / md=9</div></grid-column>
            </grid-row>
        `})},u={render:()=>({template:`
            <div style="display:flex; flex-direction:column; gap:24px;">
                <grid-row :center-md="true">
                    <grid-column md="4"><div style="${o}">centered</div></grid-column>
                </grid-row>
                <grid-row :end-md="true">
                    <grid-column md="4"><div style="${o}">end-aligned</div></grid-column>
                </grid-row>
            </div>
        `})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
            <grid-row>
                <grid-column md="1" v-for="n in 12" :key="n">
                    <div style="\${cellStyle}">{{ n }}</div>
                </grid-column>
            </grid-row>
        \`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
            <grid-row>
                <grid-column md="6"><div style="\${cellStyle}">md=6</div></grid-column>
                <grid-column md="6"><div style="\${cellStyle}">md=6</div></grid-column>
            </grid-row>
        \`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Resize the canvas to see this collapse to a single column under 912px.'
      }
    }
  },
  render: () => ({
    template: \`
            <grid-row>
                <grid-column xs="12" md="3"><div style="\${cellStyle}">xs=12 / md=3</div></grid-column>
                <grid-column xs="12" md="9"><div style="\${cellStyle}">xs=12 / md=9</div></grid-column>
            </grid-row>
        \`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
            <div style="display:flex; flex-direction:column; gap:24px;">
                <grid-row :center-md="true">
                    <grid-column md="4"><div style="\${cellStyle}">centered</div></grid-column>
                </grid-row>
                <grid-row :end-md="true">
                    <grid-column md="4"><div style="\${cellStyle}">end-aligned</div></grid-column>
                </grid-row>
            </div>
        \`
  })
}`,...u.parameters?.docs?.source}}},d=[`TwelveColumns`,`HalfAndHalf`,`Responsive`,`Alignment`]}));f();export{u as Alignment,c as HalfAndHalf,l as Responsive,s as TwelveColumns,d as __namedExportsOrder,a as default,f as n,i as t};