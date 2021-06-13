import{c as e,r as t,a as o,o as n,b as r,F as s,d as i,u as a,t as l,e as d,f as u,w as c,g as p,T as g,h as m,D as v,i as f,j as h,k as x}from"./vendor.4cc55409.js";var b={bell:new Audio("/pomodoro/assets/mixkit-notification-bell-592.88d02e0a.wav")};null==e.get("durations")&&e.set("durations",{pomodoro:1500,short:300,long:1200});const w=t({pomodoro:{id:"pomodoro",title:"Pomodoro",duration:JSON.parse(e.get("durations")).pomodoro},short:{id:"short",title:"Short Break",duration:JSON.parse(e.get("durations")).short},long:{id:"long",title:"Long Break",duration:JSON.parse(e.get("durations")).long}}),y=o(w.pomodoro);function k(){return{modes:w,selectedMode:y,changeMode:function(e){if(!e.id in w)throw"Parameter is not mode!";y.value=e}}}const C=o(!1);function I(){return{settingsOpen:C,closeSettings:function(){C.value=!1},openSettings:function(){C.value=!0}}}const S={class:"w-full h-auto max-h-20N pt-12 inline-flex space-x-2 sm:space-x-6"},M={expose:[],setup(e,{emit:t}){const{modes:o,selectedMode:d,changeMode:u}=k();function c(e){if(d.value.id==e.id)switch(d.value.id){case o.pomodoro.id:return["bg-red-500 font-bold"];case o.short.id:return["bg-green-500 font-bold"];case o.long.id:return["bg-blue-500 font-bold"]}}return(e,d)=>(n(),r("div",S,[(n(!0),r(s,null,i(a(o),(e=>(n(),r("button",{key:e.id,onClick:o=>function(e){u(e),t("change",e)}(e),class:["flex-1 px-4 py-2 border-2 text-sm sm:text-base focus:outline-none transition",c(e)]},l(e.title),11,["onClick"])))),128))]))}};const N={expose:[],props:{progress:Number},setup(e){const t=e,{modes:s,selectedMode:i,changeMode:l}=k(),c=o(640<window.screen.width?200:150);window.addEventListener("resize",(()=>{c.value=640<window.screen.width?200:150}));const p=o(6),g=d((()=>c.value-2*p.value)),m=d((()=>2*g.value*Math.PI)),v=d((()=>m.value-t.progress/100*m.value));return(e,t)=>(n(),r("svg",{class:"relative mx-auto z-10",height:2*c.value,width:2*c.value,key:c.value},[u("circle",{class:"text-white stroke-current",fill:"transparent","stroke-width":p.value-2,r:a(g),cx:c.value,cy:c.value},null,8,["stroke-width","r","cx","cy"]),u("circle",{onClick:t[1]||(t[1]=(...t)=>e.click&&e.click(...t)),class:["circle w-full h-full stroke-current",{"text-red-500":a(i).id==a(s).pomodoro.id,"text-green-500":a(i).id==a(s).short.id,"text-blue-500":a(i).id==a(s).long.id}],fill:"transparent","stroke-dasharray":a(m)+" "+a(m),"stroke-linecap":"round",style:{strokeDashoffset:a(v)},"stroke-width":p.value,r:a(g),cx:c.value,cy:c.value},null,14,["stroke-dasharray","stroke-width","r","cx","cy"])],8,["height","width"]))},__scopeId:"data-v-4e417cc3"};const O={class:"relative inline-block my-24 text-red-500 select-none"},_={class:"absolute top-0 left-0 w-full h-full flex flex-col space-y-2N justify-center items-center"},P={class:"text-7xl sm:text-8xl text-white"},D={expose:[],props:{running:Boolean,duration:Number},emits:["click"],setup(e,{emit:t}){const o=e,{modes:s,selectedMode:i,changeMode:p}=k(),g=d((()=>parseInt(o.duration/60).toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})+":"+(o.duration%60).toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}))),m=d((()=>100-o.duration/i.value.duration*100));return document.title=g.value+" - Pomodoro",c(g,(()=>{document.title=g.value+" - Pomodoro"})),(e,s)=>(n(),r("div",O,[u(N,{onClick:s[1]||(s[1]=e=>t("click")),progress:a(m)},null,8,["progress"]),u("div",_,[u("p",P,l(a(g)),1),u("div",{class:["relative top-4",[o.running?"pause":"play"]]},null,2)])]))}};const L={class:"fixed inset-0 z-10 overflow-y-auto"},j={class:"min-h-screen px-4 text-center"},z={class:"w-full max-w-md relative left-1/2 transform -translate-x-1/2 p-6 my-8 overflow-hidden text-left transition-all bg-white shadow-xl rounded-xl"},B={class:"inline-flex flex-col divide-y w-full overflow-hidden text-left"},J=u("p",{class:"pb-4 text-xl font-medium leading-6 text-gray-900"},"Settings",-1),A={class:"py-4"},G={class:""},T=u("p",{class:"text-lg text-gray-900"},"Time (minutes)",-1),U={class:"grid grid-cols-3 gap-x-2 sm:gap-x-8"},E={class:"flex flex-col"},F={class:"my-1 flex-1 text-sm font-light text-gray-700"},q={expose:[],setup(o){const{modes:d,selectedMode:c}=k(),{settingsOpen:h,closeSettings:x}=I(),b=t({durations:{pomodoro:parseInt(d.pomodoro.duration/60),short:parseInt(d.short.duration/60),long:parseInt(d.long.duration/60)}});function w(){h.value=!1,d.pomodoro.duration=60*b.durations.pomodoro,d.short.duration=60*b.durations.short,d.long.duration=60*b.durations.long,e.set("durations",{pomodoro:d.pomodoro.duration,short:d.short.duration,long:d.long.duration})}return(e,t)=>(n(),r(a(g),{appear:"",show:a(h),as:"template"},{default:p((()=>[u(a(f),{open:a(h),onClose:a(x)},{default:p((()=>[u("div",L,[u("div",j,[u(a(m),{enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:p((()=>[u(a(v),{class:"fixed inset-0"})])),_:1}),u(a(m),{enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:p((()=>[u("div",z,[u("div",{onClick:t[1]||(t[1]=(...e)=>a(x)&&a(x)(...e)),class:"absolute right-0 top-0 mt-3 mr-3 text-gray-400 hover:text-gray-900 transition-colors duration-100 cursor-pointer"},"✕"),u("div",B,[J,u("div",A,[u("div",G,[T,u("div",U,[(n(!0),r(s,null,i(a(d),(e=>(n(),r("div",E,[u("label",F,l(e.title),1),u("input",{type:"number",min:"1",step:"1",value:a(b).durations[e.id],onChange:t=>{return o=t,n=e.id,void(b.durations[n]=o.target.value);var o,n},class:"w-full box-border p-2 bg-gray-200 rounded-lg focus:outline-none"},null,40,["value","onChange"])])))),256))])])]),u("div",{class:"pt-4"},[u("button",{class:"inline float-right px-4 py-2 text-sm font-medium text-red-900 bg-red-100 hover:bg-red-200 transition border border-transparent rounded-md duration-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:w}," Apply ")])])])])),_:1})])])])),_:1},8,["open","onClose"])])),_:1},8,["show"]))}};const H={class:"container mx-auto text-white text-center"},K={class:"pb-24"};x({expose:[],setup(e){const{modes:o,selectedMode:s,changeMode:i}=k(),{settingsOpen:l,openSettings:p}=I(),g=t({running:!1,duration:s.value.duration,timerId:null});c(s,(()=>{g.duration=s.value.duration})),c(o,((e,t)=>{f(),g.duration=s.value.duration}));const m=d((()=>{switch(s.value.id){case o.pomodoro.id:return["bg-red-400"];case o.short.id:return["bg-green-400"];case o.long.id:return["bg-blue-400"]}}));function v(){g.running?f():(g.running=!0,g.timerId=setInterval((()=>{if(g.duration<=0)switch(f(),b.bell.play(),s.value.id){case o.short.id:i(o.pomodoro);break;case o.pomodoro.id:i(o.short);break;case o.long.id:i(o.pomodoro)}else g.duration-=1}),1e3))}function f(){g.running=!1,clearInterval(g.timerId)}return(e,t)=>(n(),r("div",{class:["min-h-screen transition",a(m)]},[u("div",H,[u(M,{onChange:f}),u(D,{onClick:v,running:a(g).running,duration:a(g).duration},null,8,["running","duration"]),u("div",K,[u(a(h),{onClick:a(p),class:"w-8 mx-auto cursor-pointer"},null,8,["onClick"]),u(q)])])],2))}}).mount("#app");
