import{u as m}from"./asyncData.cca39859.js";import{M as c,I as p,d as i,a9 as u,r as l,N as e,k as d}from"./entry.8ab82dc8.js";import f from"./Ellipsis.256f059c.js";import _ from"./ComponentPlaygroundData.d0bfc6b3.js";import"./TabsHeader.c5f23f86.js";import"./ComponentPlaygroundProps.898d7d4d.js";import"./ProseH4.86041c77.js";import"./ProseCodeInline.9054eb77.js";import"./Badge.ff89bb60.js";import"./MDCSlot.ed37c141.js";import"./slot.c34b3676.js";import"./ProseP.ff69aa84.js";import"./index.3c2f5074.js";import"./ComponentPlaygroundSlots.vue.852df36e.js";import"./ComponentPlaygroundTokens.vue.99c489d6.js";async function y(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const V=d(g,[["__scopeId","data-v-98494840"]]);export{V as default};
