import{M as m,I as p,d as c,a8 as i,r as l,N as e,l as u}from"./entry.Bs8i0eLc.js";import{u as d}from"./asyncData.C9Sl2dlT.js";import f from"./Ellipsis.BGJVCdB8.js";import y from"./ComponentPlaygroundData.vlauyhSE.js";import"./TabsHeader.D5v-rRUJ.js";import"./ComponentPlaygroundProps.DHIplYdt.js";import"./ProseH4.CaxMceai.js";import"./ProseCodeInline.DxTwT7bf.js";import"./Badge.7H5GpaW-.js";import"./MDCSlot.BWTKTbSZ.js";import"./slot.hp_bmVcY.js";import"./ProseP.CkXJ77qI.js";import"./index.Dj5ywRQQ.js";import"./ComponentPlaygroundSlots.vue.Bj6uoApu.js";import"./ComponentPlaygroundTokens.vue.CFwGm1P5.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=u(h,[["__scopeId","data-v-7ae5a660"]]);export{V as default};
