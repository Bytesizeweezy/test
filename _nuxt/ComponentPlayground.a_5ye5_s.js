import{M as m,I as p,d as c,a9 as i,r as l,N as e,l as u}from"./entry.C0FM-_2P.js";import{u as d}from"./asyncData.27OpAbI-.js";import f from"./Ellipsis.Ce8J0ZKa.js";import y from"./ComponentPlaygroundData.vpGEr3zS.js";import"./TabsHeader.BWi57LzI.js";import"./ComponentPlaygroundProps.SNOqbQVL.js";import"./ProseH4.DrXCuD6y.js";import"./ProseCodeInline.CGlYWPjh.js";import"./Badge.nQqqpcX6.js";import"./MDCSlot.CBA5zVLd.js";import"./slot.CnGWsOVW.js";import"./ProseP.D90EW_qu.js";import"./index.DyxQrCvb.js";import"./ComponentPlaygroundSlots.vue.Dr4gQd_e.js";import"./ComponentPlaygroundTokens.vue.BDVhmBHb.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=u(h,[["__scopeId","data-v-94dfdb3f"]]);export{V as default};
