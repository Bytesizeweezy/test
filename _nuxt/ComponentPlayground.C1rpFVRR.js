import{u as m}from"./asyncData.CvfOemlj.js";import{M as c,I as p,d as i,a8 as l,r as u,N as e,l as d}from"./entry.BrzvMtNy.js";import f from"./Ellipsis.FSjUJQbG.js";import y from"./ComponentPlaygroundData.B82ayvJ6.js";import"./TabsHeader.Cow4W1tw.js";import"./ComponentPlaygroundProps.D8_14b8q.js";import"./ProseH4.KppXQRhU.js";import"./ProseCodeInline.BC_gbbYm.js";import"./Badge.CWIPxSQI.js";import"./MDCSlot.BrcZ3gnF.js";import"./slot.DFq3b3y3.js";import"./ProseP.BLc8jEOQ.js";import"./index.Cl5ue1Ed.js";import"./ComponentPlaygroundSlots.vue.DlNjlWhp.js";import"./ComponentPlaygroundTokens.vue.D_XL2G17.js";async function g(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>l(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=d(h,[["__scopeId","data-v-7ae5a660"]]);export{V as default};