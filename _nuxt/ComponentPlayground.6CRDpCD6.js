import{M as m,I as p,d as c,a9 as i,r as l,N as e,l as u}from"./entry.BXQ6-f3l.js";import{u as d}from"./asyncData.C-AnVXb2.js";import f from"./Ellipsis.OuUtmGn0.js";import y from"./ComponentPlaygroundData.Bxlu0GY6.js";import"./TabsHeader.ZIQcTRQD.js";import"./ComponentPlaygroundProps.BZ5wM8mP.js";import"./ProseH4.DR6LYNEs.js";import"./ProseCodeInline.4GC7G-tb.js";import"./Badge.D2Cekmso.js";import"./MDCSlot.Bwbyvb1U.js";import"./slot.CbbxR3pk.js";import"./ProseP.BaOHhgUk.js";import"./index.BgR2l7S3.js";import"./ComponentPlaygroundSlots.vue.CAnq_PF5.js";import"./ComponentPlaygroundTokens.vue.Se-9TrxL.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=u(h,[["__scopeId","data-v-94dfdb3f"]]);export{V as default};
