(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42345,e=>{"use strict";var t,i,o=e.i(76717);e.i(42581);var n=e.i(5030),r=e.i(68283),a=e.i(60955),s=e.i(97941),l=e.i(8782),c=e.i(41933),d=e.i(62665),p=e.i(21731);(t=i||(i={})).getOralPracticeList=(e,t)=>p.default.post("hcp/qsBank/oralTopic/listV3",{oralTopCatalog:e,part:t}),t.getOralSeasonTopicList=()=>p.default.get("hcp/qsBank/topicChange/getDataV2/1",{});let u=i;var f=e.i(96044);e.i(99720),e.i(2143);var h=e.i(37157),g=e.i(63500),m=e.i(66071),x=e.i(675),b=e.i(75023),w=e.i(22623),A=e.i(91073),C=e.i(70072),y=e.i(39106),v=e.i(59900),j=e.i(31627),I={percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},k=function(){var e=(0,d.useRef)([]),t=(0,d.useRef)(null);return(0,d.useEffect)(function(){var i=Date.now(),o=!1;e.current.forEach(function(e){if(e){o=!0;var n=e.style;n.transitionDuration=".3s, .3s, .3s, .06s",t.current&&i-t.current<100&&(n.transitionDuration="0s, 0s")}}),o&&(t.current=Date.now())}),e.current},E=e.i(55549),_=e.i(32235),O=e.i(69864),S=0,$=(0,O.default)();let N=function(e){var t=d.useState(),i=(0,_.default)(t,2),o=i[0],n=i[1];return d.useEffect(function(){var e;n("rc_progress_".concat(($?(e=S,S+=1):e="TEST_OR_SSR",e)))},[]),e||o};var F=function(e){var t=e.bg,i=e.children;return d.createElement("div",{style:{width:"100%",height:"100%",background:t}},i)};function T(e,t){return Object.keys(e).map(function(i){var o=parseFloat(i),n="".concat(Math.floor(o*t),"%");return"".concat(e[i]," ").concat(n)})}var R=d.forwardRef(function(e,t){var i=e.prefixCls,o=e.color,n=e.gradientId,r=e.radius,a=e.style,s=e.ptg,l=e.strokeLinecap,c=e.strokeWidth,p=e.size,u=e.gapDegree,f=o&&"object"===(0,E.default)(o),h=p/2,g=d.createElement("circle",{className:"".concat(i,"-circle-path"),r:r,cx:h,cy:h,stroke:f?"#FFF":void 0,strokeLinecap:l,strokeWidth:c,opacity:+(0!==s),style:a,ref:t});if(!f)return g;var m="".concat(n,"-conic"),x=T(o,(360-u)/360),b=T(o,1),w="conic-gradient(from ".concat(u?"".concat(180+u/2,"deg"):"0deg",", ").concat(x.join(", "),")"),A="linear-gradient(to ".concat(u?"bottom":"top",", ").concat(b.join(", "),")");return d.createElement(d.Fragment,null,d.createElement("mask",{id:m},g),d.createElement("foreignObject",{x:0,y:0,width:p,height:p,mask:"url(#".concat(m,")")},d.createElement(F,{bg:A},d.createElement(F,{bg:w}))))}),V=function(e,t,i,o,n,r,a,s,l,c){var d=arguments.length>10&&void 0!==arguments[10]?arguments[10]:0,p=(100-o)/100*t;return"round"===l&&100!==o&&(p+=c/2)>=t&&(p=t-.01),{stroke:"string"==typeof s?s:void 0,strokeDasharray:"".concat(t,"px ").concat(e),strokeDashoffset:p+d,transform:"rotate(".concat(n+i/100*360*((360-r)/360)+(0===r?0:({bottom:0,top:180,left:90,right:-90})[a]),"deg)"),transformOrigin:"".concat(50,"px ").concat(50,"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},z=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function P(e){var t=null!=e?e:[];return Array.isArray(t)?t:[t]}let D=function(e){var t,i,o,n,r=(0,v.default)((0,v.default)({},I),e),a=r.id,s=r.prefixCls,l=r.steps,c=r.strokeWidth,p=r.trailWidth,u=r.gapDegree,f=void 0===u?0:u,h=r.gapPosition,g=r.trailColor,m=r.strokeLinecap,x=r.style,b=r.className,A=r.strokeColor,C=r.percent,_=(0,j.default)(r,z),O=N(a),S="".concat(O,"-gradient"),$=50-c/2,F=2*Math.PI*$,T=f>0?90+f/2:-90,D=(360-f)/360*F,L="object"===(0,E.default)(l)?l:{count:l,gap:2},B=L.count,Q=L.gap,M=P(C),W=P(A),K=W.find(function(e){return e&&"object"===(0,E.default)(e)}),U=K&&"object"===(0,E.default)(K)?"butt":m,H=V(F,D,0,100,T,f,h,g,U,c),q=k();return d.createElement("svg",(0,y.default)({className:(0,w.default)("".concat(s,"-circle"),b),viewBox:"0 0 ".concat(100," ").concat(100),style:x,id:a,role:"presentation"},_),!B&&d.createElement("circle",{className:"".concat(s,"-circle-trail"),r:$,cx:50,cy:50,stroke:g,strokeLinecap:U,strokeWidth:p||c,style:H}),B?(t=Math.round(B*(M[0]/100)),i=100/B,o=0,Array(B).fill(null).map(function(e,n){var r=n<=t-1?W[0]:g,a=r&&"object"===(0,E.default)(r)?"url(#".concat(S,")"):void 0,l=V(F,D,o,i,T,f,h,r,"butt",c,Q);return o+=(D-l.strokeDashoffset+Q)*100/D,d.createElement("circle",{key:n,className:"".concat(s,"-circle-path"),r:$,cx:50,cy:50,stroke:a,strokeWidth:c,opacity:1,style:l,ref:function(e){q[n]=e}})})):(n=0,M.map(function(e,t){var i=W[t]||W[W.length-1],o=V(F,D,n,e,T,f,h,i,U,c);return n+=e,d.createElement(R,{key:t,color:i,ptg:e,radius:$,prefixCls:s,gradientId:S,style:o,strokeLinecap:U,strokeWidth:c,gapDegree:f,ref:function(e){q[t]=e},size:100})}).reverse()))};var L=e.i(79364);e.i(89768);var B=e.i(75084);function Q(e){return!e||e<0?0:e>100?100:e}function M(e){let{success:t,successPercent:i}=e,o=i;return t&&"progress"in t&&(o=t.progress),t&&"percent"in t&&(o=t.percent),o}let W=(e,t,i)=>{var o,n,r,a;let s=-1,l=-1;if("step"===t){let t=i.steps,o=i.strokeWidth;"string"==typeof e||void 0===e?(s="small"===e?2:14,l=null!=o?o:8):"number"==typeof e?[s,l]=[e,e]:[s=14,l=8]=Array.isArray(e)?e:[e.width,e.height],s*=t}else if("line"===t){let t=null==i?void 0:i.strokeWidth;"string"==typeof e||void 0===e?l=t||("small"===e?6:8):"number"==typeof e?[s,l]=[e,e]:[s=-1,l=8]=Array.isArray(e)?e:[e.width,e.height]}else("circle"===t||"dashboard"===t)&&("string"==typeof e||void 0===e?[s,l]="small"===e?[60,60]:[120,120]:"number"==typeof e?[s,l]=[e,e]:Array.isArray(e)&&(s=null!=(n=null!=(o=e[0])?o:e[1])?n:120,l=null!=(a=null!=(r=e[0])?r:e[1])?a:120));return[s,l]},K=e=>{let{prefixCls:t,trailColor:i=null,strokeLinecap:o="round",gapPosition:n,gapDegree:r,width:a=120,type:s,children:l,success:c,size:p=a,steps:u}=e,[f,h]=W(p,"circle"),{strokeWidth:g}=e;void 0===g&&(g=Math.max(3/f*100,6));let m=d.useMemo(()=>r||0===r?r:"dashboard"===s?75:void 0,[r,s]),x=(e=>{let{percent:t,success:i,successPercent:o}=e,n=Q(M({success:i,successPercent:o}));return[n,Q(Q(t)-n)]})(e),b="[object Object]"===Object.prototype.toString.call(e.strokeColor),A=(e=>{let{success:t={},strokeColor:i}=e,{strokeColor:o}=t;return[o||B.presetPrimaryColors.green,i||null]})({success:c,strokeColor:e.strokeColor}),C=(0,w.default)(`${t}-inner`,{[`${t}-circle-gradient`]:b}),y=d.createElement(D,{steps:u,percent:u?x[1]:x,strokeWidth:g,trailWidth:g,strokeColor:u?A[1]:A,strokeLinecap:o,trailColor:i,prefixCls:t,gapDegree:m,gapPosition:n||"dashboard"===s&&"bottom"||void 0}),v=f<=20,j=d.createElement("div",{className:C,style:{width:f,height:h,fontSize:.15*f+6}},y,!v&&l);return v?d.createElement(L.default,{title:l},j):j};e.i(39964);var U=e.i(73603),H=e.i(28591),q=e.i(10286),J=e.i(10259),Y=e.i(87946);let X="--progress-line-stroke-color",Z="--progress-percent",G=e=>{let t=e?"100%":"-100%";return new U.Keyframes(`antProgress${e?"RTL":"LTR"}Active`,{"0%":{transform:`translateX(${t}) scaleX(0)`,opacity:.1},"20%":{transform:`translateX(${t}) scaleX(0)`,opacity:.5},to:{transform:"translateX(0) scaleX(1)",opacity:0}})},ee=(0,J.genStyleHooks)("Progress",e=>{let t=e.calc(e.marginXXS).div(2).equal(),i=(0,Y.mergeToken)(e,{progressStepMarginInlineEnd:t,progressStepMinWidth:t,progressActiveMotionDuration:"2.4s"});return[(e=>{let{componentCls:t,iconCls:i}=e;return{[t]:Object.assign(Object.assign({},(0,q.resetComponent)(e)),{display:"inline-block","&-rtl":{direction:"rtl"},"&-line":{position:"relative",width:"100%",fontSize:e.fontSize},[`${t}-outer`]:{display:"inline-flex",alignItems:"center",width:"100%"},[`${t}-inner`]:{position:"relative",display:"inline-block",width:"100%",flex:1,overflow:"hidden",verticalAlign:"middle",backgroundColor:e.remainingColor,borderRadius:e.lineBorderRadius},[`${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.defaultColor}},[`${t}-success-bg, ${t}-bg`]:{position:"relative",background:e.defaultColor,borderRadius:e.lineBorderRadius,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`},[`${t}-layout-bottom`]:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",[`${t}-text`]:{width:"max-content",marginInlineStart:0,marginTop:e.marginXXS}},[`${t}-bg`]:{overflow:"hidden","&::after":{content:'""',background:{_multi_value_:!0,value:["inherit",`var(${X})`]},height:"100%",width:`calc(1 / var(${Z}) * 100%)`,display:"block"},[`&${t}-bg-inner`]:{minWidth:"max-content","&::after":{content:"none"},[`${t}-text-inner`]:{color:e.colorWhite,[`&${t}-text-bright`]:{color:"rgba(0, 0, 0, 0.45)"}}}},[`${t}-success-bg`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,backgroundColor:e.colorSuccess},[`${t}-text`]:{display:"inline-block",marginInlineStart:e.marginXS,color:e.colorText,lineHeight:1,width:"2em",whiteSpace:"nowrap",textAlign:"start",verticalAlign:"middle",wordBreak:"normal",[i]:{fontSize:e.fontSize},[`&${t}-text-outer`]:{width:"max-content"},[`&${t}-text-outer${t}-text-start`]:{width:"max-content",marginInlineStart:0,marginInlineEnd:e.marginXS}},[`${t}-text-inner`]:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",marginInlineStart:0,padding:`0 ${(0,H.unit)(e.paddingXXS)}`,[`&${t}-text-start`]:{justifyContent:"start"},[`&${t}-text-end`]:{justifyContent:"end"}},[`&${t}-status-active`]:{[`${t}-bg::before`]:{position:"absolute",inset:0,backgroundColor:e.colorBgContainer,borderRadius:e.lineBorderRadius,opacity:0,animationName:G(),animationDuration:e.progressActiveMotionDuration,animationTimingFunction:e.motionEaseOutQuint,animationIterationCount:"infinite",content:'""'}},[`&${t}-rtl${t}-status-active`]:{[`${t}-bg::before`]:{animationName:G(!0)}},[`&${t}-status-exception`]:{[`${t}-bg`]:{backgroundColor:e.colorError},[`${t}-text`]:{color:e.colorError}},[`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorError}},[`&${t}-status-success`]:{[`${t}-bg`]:{backgroundColor:e.colorSuccess},[`${t}-text`]:{color:e.colorSuccess}},[`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorSuccess}}})}})(i),(e=>{let{componentCls:t,iconCls:i}=e;return{[t]:{[`${t}-circle-trail`]:{stroke:e.remainingColor},[`&${t}-circle ${t}-inner`]:{position:"relative",lineHeight:1,backgroundColor:"transparent"},[`&${t}-circle ${t}-text`]:{position:"absolute",insetBlockStart:"50%",insetInlineStart:0,width:"100%",margin:0,padding:0,color:e.circleTextColor,fontSize:e.circleTextFontSize,lineHeight:1,whiteSpace:"normal",textAlign:"center",transform:"translateY(-50%)",[i]:{fontSize:e.circleIconFontSize}},[`${t}-circle&-status-exception`]:{[`${t}-text`]:{color:e.colorError}},[`${t}-circle&-status-success`]:{[`${t}-text`]:{color:e.colorSuccess}}},[`${t}-inline-circle`]:{lineHeight:1,[`${t}-inner`]:{verticalAlign:"bottom"}}}})(i),(e=>{let{componentCls:t}=e;return{[t]:{[`${t}-steps`]:{display:"inline-block","&-outer":{display:"flex",flexDirection:"row",alignItems:"center"},"&-item":{flexShrink:0,minWidth:e.progressStepMinWidth,marginInlineEnd:e.progressStepMarginInlineEnd,backgroundColor:e.remainingColor,transition:`all ${e.motionDurationSlow}`,"&-active":{backgroundColor:e.defaultColor}}}}}})(i),(e=>{let{componentCls:t,iconCls:i}=e;return{[t]:{[`${t}-small&-line, ${t}-small&-line ${t}-text ${i}`]:{fontSize:e.fontSizeSM}}}})(i)]},e=>({circleTextColor:e.colorText,defaultColor:e.colorInfo,remainingColor:e.colorFillSecondary,lineBorderRadius:100,circleTextFontSize:"1em",circleIconFontSize:`${e.fontSize/e.fontSizeSM}em`}));var et=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)0>t.indexOf(o[n])&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]]);return i};let ei=e=>{let{prefixCls:t,direction:i,percent:o,size:n,strokeWidth:r,strokeColor:a,strokeLinecap:s="round",children:l,trailColor:c=null,percentPosition:p,success:u}=e,{align:f,type:h}=p,g=a&&"string"!=typeof a?((e,t)=>{let{from:i=B.presetPrimaryColors.blue,to:o=B.presetPrimaryColors.blue,direction:n="rtl"===t?"to left":"to right"}=e,r=et(e,["from","to","direction"]);if(0!==Object.keys(r).length){let e,t=(e=[],Object.keys(r).forEach(t=>{let i=Number.parseFloat(t.replace(/%/g,""));Number.isNaN(i)||e.push({key:i,value:r[t]})}),(e=e.sort((e,t)=>e.key-t.key)).map(e=>{let{key:t,value:i}=e;return`${i} ${t}%`}).join(", ")),i=`linear-gradient(${n}, ${t})`;return{background:i,[X]:i}}let a=`linear-gradient(${n}, ${i}, ${o})`;return{background:a,[X]:a}})(a,i):{[X]:a,background:a},m="square"===s||"butt"===s?0:void 0,[x,b]=W(null!=n?n:[-1,r||("small"===n?6:8)],"line",{strokeWidth:r}),A=Object.assign(Object.assign({width:`${Q(o)}%`,height:b,borderRadius:m},g),{[Z]:Q(o)/100}),C=M(e),y={width:`${Q(C)}%`,height:b,borderRadius:m,backgroundColor:null==u?void 0:u.strokeColor},v=d.createElement("div",{className:`${t}-inner`,style:{backgroundColor:c||void 0,borderRadius:m}},d.createElement("div",{className:(0,w.default)(`${t}-bg`,`${t}-bg-${h}`),style:A},"inner"===h&&l),void 0!==C&&d.createElement("div",{className:`${t}-success-bg`,style:y})),j="outer"===h&&"start"===f,I="outer"===h&&"end"===f;return"outer"===h&&"center"===f?d.createElement("div",{className:`${t}-layout-bottom`},v,l):d.createElement("div",{className:`${t}-outer`,style:{width:x<0?"100%":x}},j&&l,v,I&&l)},eo=e=>{let{size:t,steps:i,rounding:o=Math.round,percent:n=0,strokeWidth:r=8,strokeColor:a,trailColor:s=null,prefixCls:l,children:c}=e,p=o(n/100*i),[u,f]=W(null!=t?t:["small"===t?2:14,r],"step",{steps:i,strokeWidth:r}),h=u/i,g=Array.from({length:i});for(let e=0;e<i;e++){let t=Array.isArray(a)?a[e]:a;g[e]=d.createElement("div",{key:e,className:(0,w.default)(`${l}-steps-item`,{[`${l}-steps-item-active`]:e<=p-1}),style:{backgroundColor:e<=p-1?t:s,width:h,height:f}})}return d.createElement("div",{className:`${l}-steps-outer`},g,c)};var en=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)0>t.indexOf(o[n])&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]]);return i};let er=["normal","exception","active","success"],ea=d.forwardRef((e,t)=>{let i,{prefixCls:o,className:n,rootClassName:r,steps:a,strokeColor:s,percent:l=0,size:c="default",showInfo:p=!0,type:u="line",status:f,format:y,style:v,percentPosition:j={}}=e,I=en(e,["prefixCls","className","rootClassName","steps","strokeColor","percent","size","showInfo","type","status","format","style","percentPosition"]),{align:k="end",type:E="outer"}=j,_=Array.isArray(s)?s[0]:s,O="string"==typeof s||Array.isArray(s)?s:void 0,S=d.useMemo(()=>{if(_){let e="string"==typeof _?_:Object.values(_)[0];return new h.FastColor(e).isLight()}return!1},[s]),$=d.useMemo(()=>{var t,i;let o=M(e);return Number.parseInt(void 0!==o?null==(t=null!=o?o:0)?void 0:t.toString():null==(i=null!=l?l:0)?void 0:i.toString(),10)},[l,e.success,e.successPercent]),N=d.useMemo(()=>!er.includes(f)&&$>=100?"success":f||"normal",[f,$]),{getPrefixCls:F,direction:T,progress:R}=d.useContext(C.ConfigContext),V=F("progress",o),[z,P,D]=ee(V),L="line"===u,B=L&&!a,U=d.useMemo(()=>{let t;if(!p)return null;let i=M(e),o=y||(e=>`${e}%`),n=L&&S&&"inner"===E;return"inner"===E||y||"exception"!==N&&"success"!==N?t=o(Q(l),Q(i)):"exception"===N?t=L?d.createElement(x.default,null):d.createElement(b.default,null):"success"===N&&(t=L?d.createElement(g.default,null):d.createElement(m.default,null)),d.createElement("span",{className:(0,w.default)(`${V}-text`,{[`${V}-text-bright`]:n,[`${V}-text-${k}`]:B,[`${V}-text-${E}`]:B}),title:"string"==typeof t?t:void 0},t)},[p,l,$,N,u,V,y]);"line"===u?i=a?d.createElement(eo,Object.assign({},e,{strokeColor:O,prefixCls:V,steps:"object"==typeof a?a.count:a}),U):d.createElement(ei,Object.assign({},e,{strokeColor:_,prefixCls:V,direction:T,percentPosition:{align:k,type:E}}),U):("circle"===u||"dashboard"===u)&&(i=d.createElement(K,Object.assign({},e,{strokeColor:_,prefixCls:V,progressStatus:N}),U));let H=(0,w.default)(V,`${V}-status-${N}`,{[`${V}-${"dashboard"===u&&"circle"||u}`]:"line"!==u,[`${V}-inline-circle`]:"circle"===u&&W(c,"circle")[0]<=20,[`${V}-line`]:B,[`${V}-line-align-${k}`]:B,[`${V}-line-position-${E}`]:B,[`${V}-steps`]:a,[`${V}-show-info`]:p,[`${V}-${c}`]:"string"==typeof c,[`${V}-rtl`]:"rtl"===T},null==R?void 0:R.className,n,r,P,D);return z(d.createElement("div",Object.assign({ref:t,style:Object.assign(Object.assign({},null==R?void 0:R.style),v),className:H,role:"progressbar","aria-valuenow":$,"aria-valuemin":0,"aria-valuemax":100},(0,A.default)(I,["trailColor","strokeWidth","width","gapDegree","gapPosition","strokeLinecap","success","successPercent"])),i))}),es={src:e.i(14432).default,width:32,height:32,blurWidth:8,blurHeight:8,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAvklEQVR42mVO3QrBcBydG+XbZGGRGx9tPsuVWsKVGxfKjfIKbpAmLK1mKEOSIrsaKRfc8AAehSfYG/j/SsvaqVOn8zun38GwH0wILreHQMSRxAwIkKFwm+Wfrc5I8RI+3BBIZ3KF8/WhzlfyJ06lYrqjze5wFsuVuqzc1Ony+M4zJQY8LRCJUjTLzfaidHiNJ5t7ty8swNMCFovVXK01mpywvgx56QQaPN0bPxnEewNxh7gFbRgJDTqZTQD/218moyxEOwDfhQAAAABJRU5ErkJggg=="},el={src:e.i(37764).default,width:24,height:24,blurWidth:8,blurHeight:8,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAk0lEQVR42oWPvQqCUBiGz30EBV1cQy1BTTa3RlAWJC5JZC4FIYro4OAggpODuHgjwqvvwb/NAy8cvufh+xGiefPFcrZa7w6breIw/LMmOrhXjvZJNaomaFOxJiXaY3i+v3DVTCmRCbYkeJp/WD8PQRjD9SMpk/WCbnyRFyWSNIOqfQZhPOKmW7g83v0ecsTkklNn1lNihqz1fyuqAAAAAElFTkSuQmCC"};var ec=e.i(65795),ed=e.i(94062),ep=e.i(44198),eu=e.i(14943);let ef={src:e.i(41744).default,width:396,height:396,blurWidth:8,blurHeight:8,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDrcJJCsUYL2jEYHPB3VfucnmR7/P5H/9k="},eh=(0,n.observer)(function(e){let t=(0,o.jsxs)(eg,{children:[(0,o.jsx)(em,{children:"温馨提示"}),(0,o.jsx)(ex,{children:"网页暂不支持练习\n请添加小助手领取全部详细口语题库"}),(0,o.jsx)(eb,{src:ef}),(0,o.jsx)(ew,{children:"微信扫码添加小助手"}),(0,o.jsx)(eA,{src:eu.default,onClick:()=>e.onClose()})]});return(0,o.jsx)(ep.Modal,{open:e.isOpen,centered:!0,getContainer:()=>document.getElementById("modal-root"),maskClosable:!0,onCancel:()=>e.onClose(),destroyOnHidden:!0,modalRender:()=>t})}),eg=s.default.div.withConfig({displayName:"OralAlertView__Root",componentId:"sc-58fb4fd2-0"})`
  position: relative;
  width: 562px;
  background: #FFFFFF;
  border-radius: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: auto;
`,em=s.default.div.withConfig({displayName:"OralAlertView__Title",componentId:"sc-58fb4fd2-1"})`
  margin-top: 44px;
  font-weight: 500;
  font-size: 24px;
  color: #333643;
  line-height: 33px;
  text-align: left;
  font-style: normal;
`,ex=s.default.div.withConfig({displayName:"OralAlertView__Content",componentId:"sc-58fb4fd2-2"})`
  font-weight: 400;
  font-size: 18px;
  color: #333643;
  margin-top: 24px;
  padding-left: 90px;
  padding-right: 90px;
  text-align: center;
  white-space: pre-wrap;
`,eb=(0,s.default)(ed.default).withConfig({displayName:"OralAlertView__QrCode",componentId:"sc-58fb4fd2-3"})`
  width: 228px;
  height: 228px;
  margin-top: 32px;
`,ew=s.default.div.withConfig({displayName:"OralAlertView__Hint",componentId:"sc-58fb4fd2-4"})`
  margin-top: 12px;
  font-weight: 400;
  font-size: 18px;
  color: #333643;
  margin-bottom: 48px;
`,eA=(0,s.default)(ed.default).withConfig({displayName:"OralAlertView__ClosePic",componentId:"sc-58fb4fd2-5"})`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 22px;
  height: 22px;
  cursor: pointer;
`,eC=(0,n.observer)(e=>{let{bean:t}=e,[i]=(0,d.useState)(()=>new ey);return(0,d.useEffect)(()=>{i.setData(t)},[t]),(0,o.jsxs)(ev,{children:[(0,o.jsxs)(f.Flex,{align:"center",children:[i.isNew&&(0,o.jsx)(ej,{children:"新题"}),(0,o.jsx)(eI,{children:i.topicName}),(0,o.jsx)(ek,{children:i.dateStr})]}),(0,o.jsx)("div",{style:{marginTop:"12px"}}),(0,o.jsxs)(f.Flex,{align:"center",gap:10,children:[(0,o.jsxs)(f.Flex,{align:"center",gap:4,children:[(0,o.jsx)(ed.default,{src:es,width:16,height:16}),(0,o.jsx)(eE,{children:i.recordingCountStr})]}),i.showExamedCount&&(0,o.jsxs)(f.Flex,{align:"center",gap:4,children:[(0,o.jsx)(ed.default,{src:el,width:12,height:12}),(0,o.jsx)(e_,{children:i.examedCountStr})]})]}),(0,o.jsx)("div",{style:{marginTop:"8px"}}),(0,o.jsxs)(f.Flex,{children:[(0,o.jsx)(ea,{style:{flex:1},size:["100%",4],strokeColor:"rgba(51, 119, 255, 0.55)",percent:i.progress,showInfo:!1}),(0,o.jsx)(eO,{children:"已练"}),(0,o.jsx)(eS,{children:i.practicedCount}),(0,o.jsx)(e$,{children:`/${i.totalCount}`})]}),(0,o.jsxs)(eN,{align:"center",children:[(0,o.jsx)(eF,{children:i.question}),(0,o.jsx)(eT,{onClick:()=>i.isShowAlert=!0,children:i.practiceBtnText})]}),(0,o.jsx)(eh,{isOpen:i.isShowAlert,onClose:()=>i.isShowAlert=!1})]})});class ey{isNew=!1;topicName="";dateStr="";recordingCountStr="";showExamedCount=!1;examedCountStr="";practicedCount=0;totalCount=0;progress=0;question="";practiceBtnText="";isShowAlert=!1;bean=void 0;constructor(){(0,c.makeAutoObservable)(this)}setData(e){this.bean=e,this.isNew=0===e.ifNew,this.topicName=e.oralTopicName??"",this.dateStr=e.timeTag??"",this.recordingCountStr=`${e.oralNums??"0"}条录音`,this.examedCountStr=`近期${e.recentExamCount??0}人考过`,this.showExamedCount=(e.recentExamCount??0)>0,this.practicedCount=e.completeCount??0,this.totalCount=e.questionCount??0,this.practiceBtnText=this.practicedCount>0?"重新练习":"开始练习",this.totalCount>0&&(this.progress=100*this.practicedCount/this.totalCount),this.question=e.oralQuestion??""}handlePractice(){}}let ev=s.default.div.withConfig({displayName:"OralPracticeItemView__Root",componentId:"sc-5a0f759a-0"})`
  width: 394px;
  height: 207px;
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 16px;
`,ej=s.default.div.withConfig({displayName:"OralPracticeItemView__NewTag",componentId:"sc-5a0f759a-1"})`
  width: 40px;
  background: rgba(255, 120, 90, 0.03);
  border-radius: 6px;
  border: 1px solid #ff996f;
  font-weight: 500;
  font-size: 12px;
  color: #ff785a;
  text-align: center;
  margin-right: 8px;
`,eI=s.default.div.withConfig({displayName:"OralPracticeItemView__TopicName",componentId:"sc-5a0f759a-2"})`
  font-weight: bold;
  font-size: 16px;
  color: #333643;
  line-height: 21px;
  flex: 1;
  margin-right: 8px;
  ${(0,ec.LineLimit)(1)}
`,ek=s.default.div.withConfig({displayName:"OralPracticeItemView__Date",componentId:"sc-5a0f759a-3"})`
  font-size: 14px;
  color: #b5b6ba;
`,eE=s.default.div.withConfig({displayName:"OralPracticeItemView__RecordingCount",componentId:"sc-5a0f759a-4"})`
  font-size: 14px;
  color: #b5b6ba;
`,e_=s.default.div.withConfig({displayName:"OralPracticeItemView__ExamedCount",componentId:"sc-5a0f759a-5"})`
  font-size: 14px;
  color: #b5b6ba;
`,eO=s.default.div.withConfig({displayName:"OralPracticeItemView__PracticedLabelText",componentId:"sc-5a0f759a-6"})`
  font-size: 14px;
  color: #b5b6ba;
  margin-left: 16px;
  margin-right: 5px;
`,eS=s.default.div.withConfig({displayName:"OralPracticeItemView__PracticedText",componentId:"sc-5a0f759a-7"})`
  font-size: 14px;
  color: #3377ff;
`,e$=s.default.div.withConfig({displayName:"OralPracticeItemView__TotalText",componentId:"sc-5a0f759a-8"})`
  font-size: 14px;
  color: #b5b6ba;
`,eN=(0,s.default)(f.Flex).withConfig({displayName:"OralPracticeItemView__QuestionLayout",componentId:"sc-5a0f759a-9"})`
  height: 64px;
  background: #f5f6fa;
  border-radius: 8px;
  padding: 12px 16px;
  margin-top: 12px;
`,eF=s.default.div.withConfig({displayName:"OralPracticeItemView__Question",componentId:"sc-5a0f759a-10"})`
  font-size: 16px;
  color: #808080;
  line-height: 20px;
  margin-right: 16px;
  flex: 1;
  ${(0,ec.LineLimit)(2)}
`,eT=s.default.div.withConfig({displayName:"OralPracticeItemView__Practice",componentId:"sc-5a0f759a-11"})`
  width: 88px;
  height: 32px;
  border-radius: 12px;
  border: 1px solid rgba(51, 119, 255, 0.7);
  font-size: 14px;
  color: #3377ff;
  line-height: 32px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #3377ff;
    color: white;
  }
`,eR=(0,n.observer)(function(){let[e]=(0,d.useState)(()=>new eV);return(0,d.useEffect)(()=>{e.getData()},[]),(0,o.jsxs)(ez,{children:[(0,o.jsx)(eP,{children:(0,o.jsxs)(l.Space,{size:32,children:[(0,o.jsx)(eD,{$isSelect:0==e.partIndex,onClick:()=>e.partTabChange(0),children:"Part 1"}),(0,o.jsx)(eD,{$isSelect:1==e.partIndex,onClick:()=>e.partTabChange(1),children:"Part 2&3"})]})}),(0,o.jsx)(eL,{}),(0,o.jsx)(eQ,{children:e.topicList.map((t,i)=>(0,o.jsx)(eM,{$isChoose:e.currentTopic?.id==t.id,onClick:()=>e.clickTopicTypeAt(i),children:t.name},t.id))}),(0,o.jsx)("div",{style:{marginTop:"16px"}}),(0,o.jsx)(l.Space,{size:8,wrap:!0,children:e.practiceList.map(e=>(0,o.jsx)(eC,{bean:e},`${e.oralTopicId}`))}),(0,o.jsx)(eB,{onClick:()=>e.isShowAlert=!0,children:"查看全部题库>"}),(0,o.jsx)(eh,{isOpen:e.isShowAlert,onClose:()=>e.isShowAlert=!1})]})});class eV{partIndex=0;topicList=[];currentTopic=void 0;practiceList=[];isShowAlert=!1;constructor(){(0,c.makeAutoObservable)(this),this.topicList=[{id:"all",name:"全部"},{id:"1",name:"人物"},{id:"2",name:"事物"},{id:"3",name:"事件"},{id:"4",name:"地点"}]}getData=()=>{this.clickTopicTypeAt(0)};partTabChange=e=>{this.partIndex=e,this.clickTopicTypeAt(0)};clickTopicTypeAt=e=>{let t=this.topicList[e];this.currentTopic=t,u.getOralPracticeList(t.id,this.partIndex).then(e=>{let t=e?.list??[];this.practiceList=t.slice(0,6)}).catch(()=>{})}}let ez=s.default.div.withConfig({displayName:"OralMainView__Root",componentId:"sc-49bace19-0"})`
  position: relative;
  width: 100%;
  margin-top: 20px;
`,eP=s.default.div.withConfig({displayName:"OralMainView__TabRoot",componentId:"sc-49bace19-1"})`

`,eD=s.default.div.withConfig({displayName:"OralMainView__TabItem",componentId:"sc-49bace19-2"})`
  position: relative;
  font-weight: 500;
  font-size: 16px;
  color: #8E95A3;
  cursor: pointer;

  ${e=>e.$isSelect&&s.css`
    color: #333643;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 3px;
      background: #3377FF;
      border-radius: 2px;
    }
  `}
`,eL=s.default.div.withConfig({displayName:"OralMainView__Line",componentId:"sc-49bace19-3"})`
  width: 100%;
  height: 1px;
  margin-top: 8px;
  background: #DDDDDD;
`,eB=s.default.div.withConfig({displayName:"OralMainView__More",componentId:"sc-49bace19-4"})`
  position: absolute;
  right: 0;
  top: 50px;
  font-size: 14px;
  color: #8E95A3;
  cursor: pointer;
`,eQ=s.default.div.withConfig({displayName:"OralMainView__TopicList",componentId:"sc-49bace19-5"})`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 16px;
  width: 1200px;
`,eM=s.default.div.withConfig({displayName:"OralMainView__TopicItem",componentId:"sc-49bace19-6"})`
  font-size: 14px;
  color: ${e=>e.$isChoose?"#FFFFFF":"#8E95A3"};
  padding: 0 10px;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  background: ${e=>e.$isChoose?"#3377FF":"transparent"};
  border-radius: 10px;
  margin-right: 5px;
`;var eW=e.i(26509);let eK={src:e.i(63130).default,width:78,height:26,blurWidth:8,blurHeight:3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAYElEQVR42iWMPQ5AQBgF93Ju4AoidCo/HYnCHRCdUCjoRKFDodjjKL6M3Wzx8orJjNKVdzLHwpLAmsJWmM9gCsUyJZ3/cTRwtXD38AzwjrDXWKZ0aQpjIM7OXcVujsSyHxJSSLTrKU19AAAAAElFTkSuQmCC"};var eU=e.i(75562);let eH={src:e.i(86380).default,width:32,height:32,blurWidth:8,blurHeight:8,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAV0lEQVR42o3OsQ2AIBQEUPQL/kYLYiyM0cLEwtYlqGlhBTZgDwqGYEVCzw9c/XJ3jPVmGDnAvCIJcPuOW0WP8r3qDSCm/Xfm0Snw5ZQUsAWIGmhPtE5Sya8TCwUBng+LAAAAAElFTkSuQmCC"},eq={src:e.i(71761).default,width:396,height:396,blurWidth:8,blurHeight:8,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDrFVZI1SMMbNmxgZPer9zk8yPf5/I//9k="},eJ=(0,n.observer)(function(e){let[t]=(0,d.useState)(()=>new eY);(0,d.useEffect)(()=>{t.setData(e.bean)},[e.bean]);let i=(0,o.jsxs)(eX,{children:[(0,o.jsxs)(eZ,{children:[(0,o.jsx)(eG,{children:t.part}),(0,o.jsx)(e0,{src:t.pic})]}),(0,o.jsxs)(e1,{children:[(0,o.jsx)(e3,{children:"请添加小助手领取详细口语题库"}),(0,o.jsx)(e2,{src:eq}),(0,o.jsx)(e4,{children:"微信扫码添加小助手"}),(0,o.jsx)(e5,{src:eu.default,onClick:()=>e.onClose()})]})]});return(0,o.jsx)(ep.Modal,{open:e.isOpen,centered:!0,getContainer:()=>document.getElementById("modal-root"),maskClosable:!0,onCancel:()=>e.onClose(),destroyOnHidden:!0,modalRender:()=>i})});class eY{part="";pic="";setData=e=>{e?.partType==0?this.part="P1题卡":this.part="P2&3题卡",this.pic=e?.questionPic??""};constructor(){(0,c.makeAutoObservable)(this)}}let eX=s.default.div.withConfig({displayName:"OralSeasonAlertView__Root",componentId:"sc-87fcd561-0"})`
  position: relative;
  width: 749px;
  height: 585px;
  background: #FFFFFF;
  border-radius: 17px;
  display: flex;
  pointer-events: auto;
`,eZ=s.default.div.withConfig({displayName:"OralSeasonAlertView__Left",componentId:"sc-87fcd561-1"})`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,eG=s.default.div.withConfig({displayName:"OralSeasonAlertView__Part",componentId:"sc-87fcd561-2"})`
  font-weight: 500;
  font-size: 24px;
  color: #333643;
  margin-top: 40px;
`,e0=(0,s.default)(ed.default).withConfig({displayName:"OralSeasonAlertView__Pic",componentId:"sc-87fcd561-3"})`
  width: 312px;
  height: 469px;
  margin-top: 5px;
`,e1=s.default.div.withConfig({displayName:"OralSeasonAlertView__Right",componentId:"sc-87fcd561-4"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,e3=s.default.div.withConfig({displayName:"OralSeasonAlertView__Title",componentId:"sc-87fcd561-5"})`
  margin-top: 85px;
  font-weight: 500;
  font-size: 18px;
  color: #333643;
`,e2=(0,s.default)(ed.default).withConfig({displayName:"OralSeasonAlertView__QrCode",componentId:"sc-87fcd561-6"})`
  width: 228px;
  height: 228px;
  margin-top: 24px;
`,e4=s.default.div.withConfig({displayName:"OralSeasonAlertView__Hint",componentId:"sc-87fcd561-7"})`
  margin-top: 24px;
  font-weight: 400;
  font-size: 18px;
  color: #333643;
`,e5=(0,s.default)(ed.default).withConfig({displayName:"OralSeasonAlertView__ClosePic",componentId:"sc-87fcd561-8"})`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 22px;
  height: 22px;
  cursor: pointer;
`,e6=(0,n.observer)(function(e){let[t]=(0,d.useState)(()=>new e7);return(0,d.useEffect)(()=>{t.setData(e.bean)},[e.bean]),(0,o.jsxs)(e8,{children:[(0,o.jsxs)(e9,{onClick:()=>void(window.localStorage.setItem(`topic_${e.bean?.oralTopicCode??""}`,String((0,eU.default)().valueOf())),t.isShowAlert=!0),children:[(0,o.jsx)(te,{children:t.name}),t.isShowUpdate&&(0,o.jsx)(tt,{src:eK}),(0,o.jsx)(ti,{src:eH})]}),(0,o.jsx)(eJ,{bean:e.bean,isOpen:t.isShowAlert,onClose:()=>{t.isShowAlert=!1}})]})});class e7{name="";isShowUpdate=!1;isShowAlert=!1;constructor(){(0,c.makeAutoObservable)(this)}setData=e=>{this.name=e.oralTopicName??"",e.updateFlag&&(0,eU.default)(e.updateDate).valueOf()>parseInt(window.localStorage.getItem(`topic_${e.oralTopicCode??""}`)??"0")&&(this.isShowUpdate=!0)}}let e8=s.default.div.withConfig({displayName:"OralSeasonTopicView__TopicItemRoot",componentId:"sc-37f2e9c9-0"})`

`,e9=s.default.div.withConfig({displayName:"OralSeasonTopicView__Content",componentId:"sc-37f2e9c9-1"})`
  cursor: pointer;
  position: relative;
  width: 270px;
  height: 44px;
  border-radius: 16px;
  border: 1px solid #72ABFF;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`,te=s.default.div.withConfig({displayName:"OralSeasonTopicView__TopicItemName",componentId:"sc-37f2e9c9-2"})`
  font-size: 16px;
  color: #333643;
`,tt=(0,s.default)(ed.default).withConfig({displayName:"OralSeasonTopicView__TopicNew",componentId:"sc-37f2e9c9-3"})`
  position: absolute;
  width: 39px;
  height: 13px;
  right: 12px;
  top: -6px;
`,ti=(0,s.default)(ed.default).withConfig({displayName:"OralSeasonTopicView__ArrowRight",componentId:"sc-37f2e9c9-4"})`
  position: absolute;
  right: 10px;
  top: 12px;
  width: 16px;
  height: 16px;
`,to=(0,n.observer)(function(){let[e]=(0,d.useState)(()=>new tn);return(0,d.useEffect)(()=>{e.getData()},[]),(0,o.jsxs)(tr,{children:[(0,o.jsx)(ta,{children:(0,o.jsxs)(l.Space,{size:32,children:[(0,o.jsx)(ts,{$isSelect:0==e.partIndex,onClick:()=>e.partTabChange(0),children:"Part 1"}),(0,o.jsx)(ts,{$isSelect:1==e.partIndex,onClick:()=>e.partTabChange(1),children:"Part 2&3"})]})}),(0,o.jsx)(tl,{}),(0,o.jsx)("div",{style:{marginTop:"16px"}}),(0,o.jsxs)(tc,{children:[0==e.partIndex&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(td,{children:["更新时间：",e.part1Time]}),(0,o.jsx)(l.Space,{size:24,wrap:!0,children:e.part1List.map(e=>(0,o.jsx)(e6,{bean:e},e.oralTopicCode))})]}),1==e.partIndex&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(td,{children:["更新时间：",e.part23Time]}),(0,o.jsx)(l.Space,{size:24,wrap:!0,children:e.part23List.map(e=>(0,o.jsx)(e6,{bean:e},e.oralTopicCode))})]})]})]})});class tn{partIndex=0;part1List=[];part1Time="";part23List=[];part23Time="";constructor(){(0,c.makeAutoObservable)(this)}partTabChange=e=>{this.partIndex=e};getData=()=>{u.getOralSeasonTopicList().then(e=>{this.part1List=e?.p1List??[],this.part23List=e?.p23List??[],this.part1Time=eW.default.formatDateTime(e?.p1UpdateDate),this.part23Time=eW.default.formatDateTime(e?.p23UpdateDate)}).catch(e=>{})}}let tr=s.default.div.withConfig({displayName:"OralNewView__Root",componentId:"sc-d5900bac-0"})`
  width: 100%;
  margin-top: 20px;
`,ta=s.default.div.withConfig({displayName:"OralNewView__TabRoot",componentId:"sc-d5900bac-1"})`

`,ts=s.default.div.withConfig({displayName:"OralNewView__TabItem",componentId:"sc-d5900bac-2"})`
  position: relative;
  font-weight: 500;
  font-size: 16px;
  color: #8E95A3;
  cursor: pointer;

  ${e=>e.$isSelect&&s.css`
    color: #333643;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 3px;
      background: #3377FF;
      border-radius: 2px;
    }
  `}
`,tl=s.default.div.withConfig({displayName:"OralNewView__Line",componentId:"sc-d5900bac-3"})`
  width: 100%;
  height: 1px;
  margin-top: 8px;
  background: #DDDDDD;
`,tc=s.default.div.withConfig({displayName:"OralNewView__Content",componentId:"sc-d5900bac-4"})`
  width: 1200px;
  background: #FFFFFF;
  border-radius: 16px;
  padding: 24px;
`,td=s.default.div.withConfig({displayName:"OralNewView__UpdateTime",componentId:"sc-d5900bac-5"})`
  font-size: 14px;
  color: #8E95A3;
  margin-bottom: 16px;
`,tp=(0,n.observer)(function(){let[e]=(0,d.useState)(()=>new tu);return(0,o.jsxs)(tf,{children:[(0,o.jsx)(th,{children:(0,o.jsxs)(l.Space,{size:54,children:[(0,o.jsx)(tg,{$isSelect:0==e.tabIndex,onClick:()=>e.dealTabIndexChange(0),children:"口语题库"}),(0,o.jsx)(tg,{$isSelect:1==e.tabIndex,onClick:()=>e.dealTabIndexChange(1),children:"新题题库"})]})}),0==e.tabIndex&&(0,o.jsx)(eR,{}),1==e.tabIndex&&(0,o.jsx)(to,{})]})});class tu{tabIndex=0;constructor(){(0,c.makeAutoObservable)(this)}dealTabIndexChange=e=>{this.tabIndex=e}}let tf=s.default.div.withConfig({displayName:"OralView__Root",componentId:"sc-713b19d3-0"})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`,th=s.default.div.withConfig({displayName:"OralView__TabRoot",componentId:"sc-713b19d3-1"})`

`,tg=s.default.div.withConfig({displayName:"OralView__TabItem",componentId:"sc-713b19d3-2"})`
  position: relative;
  font-weight: 500;
  font-size: 28px;
  color: #8E95A3;
  cursor: pointer;

  ${e=>e.$isSelect&&s.css`
    color: #333643;
  `}
`,tm=(0,n.observer)(function(e){let t=(0,o.jsxs)(tx,{children:[(0,o.jsx)(tb,{children:e.title}),(0,o.jsx)(tw,{children:e.content}),(0,o.jsx)(tA,{onClick:()=>e.onButtonClick?.(),children:e.buttonText}),(0,o.jsx)(tC,{src:eu.default,onClick:()=>e.onClose()})]});return(0,o.jsx)(ep.Modal,{open:e.isOpen,centered:!0,getContainer:()=>document.getElementById("modal-root"),maskClosable:!0,onCancel:()=>e.onClose(),destroyOnHidden:!0,modalRender:()=>t})}),tx=s.default.div.withConfig({displayName:"AppAlertView__Root",componentId:"sc-fdb41f-0"})`
  position: relative;
  width: 562px;
  background: #FFFFFF;
  border-radius: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: auto;
`,tb=s.default.div.withConfig({displayName:"AppAlertView__Title",componentId:"sc-fdb41f-1"})`
  margin-top: 44px;
  font-weight: 500;
  font-size: 24px;
  color: #333643;
  line-height: 33px;
  text-align: left;
  font-style: normal;
`,tw=s.default.div.withConfig({displayName:"AppAlertView__Content",componentId:"sc-fdb41f-2"})`
  font-weight: 400;
  font-size: 18px;
  color: #333643;
  margin-top: 24px;
  padding-left: 90px;
  padding-right: 90px;
  text-align: center;
  white-space: pre-wrap;
`,tA=s.default.div.withConfig({displayName:"AppAlertView__Button",componentId:"sc-fdb41f-3"})`
  padding: 16px 50px;
  background: #3377FF;
  border-radius: 24px;
  font-weight: 500;
  font-size: 18px;
  color: #FFFFFF;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 48px;
  cursor: pointer;
`,tC=(0,s.default)(ed.default).withConfig({displayName:"AppAlertView__ClosePic",componentId:"sc-fdb41f-4"})`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 22px;
  height: 22px;
  cursor: pointer;
`;var ty=e.i(29861);let tv=(0,n.observer)(function(e){let[t]=(0,d.useState)(()=>new tj);return(0,o.jsxs)(tI,{onMouseEnter:()=>t.dealMouseHover(),onMouseLeave:()=>t.dealMouseLeave(),children:[(0,o.jsxs)(tk,{children:[(0,o.jsx)(tE,{src:e.pic}),(0,o.jsx)(t_,{children:(0,o.jsx)(tO,{children:e.test})})]}),t.isShowHover&&(0,o.jsx)(tS,{children:(0,o.jsx)(t$,{onClick:()=>t.isShowAlert=!0,children:"去练习"})}),(0,o.jsx)(tm,{isOpen:t.isShowAlert,onClose:()=>t.isShowAlert=!1,title:"温馨提示",content:"网页版暂不支持做题，请下载机考软件进行练习\n      机考软件练习更方便，还能进行机考模拟哦",buttonText:"去下载",onButtonClick:()=>{ty.default.pcPage()}})]})});class tj{isShowHover=!1;isShowAlert=!1;constructor(){(0,c.makeAutoObservable)(this)}dealMouseHover=()=>{this.isShowHover=!0};dealMouseLeave=()=>{this.isShowHover=!1}}let tI=s.default.div.withConfig({displayName:"ExamMainPaperItemView__Root",componentId:"sc-248dd566-0"})`
  position: relative;
  width: 294px;
  height: 273px;
  background: #ffffff;
  border-radius: 16px;
  margin-right: 8px;
  margin-top: 16px;
  overflow: hidden;
  cursor: pointer;
`,tk=s.default.div.withConfig({displayName:"ExamMainPaperItemView__Content",componentId:"sc-248dd566-1"})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,tE=(0,s.default)(ed.default).withConfig({displayName:"ExamMainPaperItemView__Pic",componentId:"sc-248dd566-2"})`
  width: 100%;
  flex: 1;
`,t_=s.default.div.withConfig({displayName:"ExamMainPaperItemView__Bottom",componentId:"sc-248dd566-3"})`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-between;
`,tO=s.default.div.withConfig({displayName:"ExamMainPaperItemView__Title",componentId:"sc-248dd566-4"})`
  font-size: 16px;
  font-weight: bold;
  color: #333643;
  margin-left: 16px;
`,tS=s.default.div.withConfig({displayName:"ExamMainPaperItemView__HoverContent",componentId:"sc-248dd566-5"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`,t$=s.default.div.withConfig({displayName:"ExamMainPaperItemView__Practice",componentId:"sc-248dd566-6"})`
  width: 124px;
  height: 56px;
  border-radius: 16px;
  background: #3377ff;
  border: 1px solid #3377ff;
  font-size: 16px;
  color: #ffffff;
  line-height: 56px;
  text-align: center;
  cursor: pointer;
`,tN=["C20","C19","C18","C17","C16","C15","C14","C13","C12","C11","C10","C9","C8","C7","C6","C5"],tF=["https://static.ieltsbro.com/uploads/prod/study_abroad/cover/1751868066979.jpg","https://static.ieltsbro.com/uploads/prod/study_abroad/cover/1720403293053.jpg","https://static.ieltsbro.com/uploads/prod/study_abroad/cover/1689070330008.jpg","https://static.ieltsbro.com/uploads/prod/study_abroad/cover/1664246179868.jpg","https://static.ieltsbro.com/uploads/prod/study_abroad/cover/1660907695093.jpg","https://static.ieltsbro.com/uploads/prod/study_abroad/cover/1633920911084.jpg","https://static.ieltsbro.com/question-bank/uploads/production/test_paper/cover/58/ecfd2bd1dbc2430137b903b0d128300d.jpg","https://static.ieltsbro.com/question-bank/uploads/production/test_paper/cover/2/c629fd2183ef045f5a14440e74ad44c0.jpg","https://static.ieltsbro.com/question-bank/uploads/production/test_paper/cover/6/f04e4c134928fb64a468a069e1d08ac6.jpg","https://static.ieltsbro.com/question-bank/uploads/production/test_paper/cover/10/bd46b2050f490385a2c95498ac9f5d3a.jpg","https://static.ieltsbro.com/question-bank/uploads/production/test_paper/cover/14/2e4565eae44666f4b60ef86aeccb0b05.jpg","https://static.ieltsbro.com/question-bank/uploads/production/test_paper/cover/20/7a30b00ffa713861c0f92968822e0643.jpg","https://static.ieltsbro.com/question-bank/uploads/production/test_paper/cover/24/b2ee02ff6606f38a1ddb144cd93fe2b2.jpg","https://static.ieltsbro.com/question-bank/uploads/production/test_paper/cover/32/f7c3755753577e06e43e02c79bf56345.jpg","https://static.ieltsbro.com/question-bank/uploads/production/test_paper/cover/38/a766cdf607f366d35a7d7efe1ed89860.jpg","https://static.ieltsbro.com/question-bank/uploads/production/test_paper/cover/44/851e022d1fd87649f5731f5df45ac28b.jpg"],tT=(0,n.observer)(function(){let[e]=(0,d.useState)(()=>new tR);return(0,o.jsxs)(tV,{children:[(0,o.jsx)(tz,{children:"听力题库"}),(0,o.jsx)(tP,{children:e.topicList.map((t,i)=>(0,o.jsx)(tD,{$isChoose:e.selectIndex==i,onClick:()=>e.dealTopicClick(i),children:t},i))}),(0,o.jsx)(tL,{children:(0,o.jsxs)(l.Space,{children:[(0,o.jsx)(tv,{pic:tF[e.selectIndex],test:"Test1"}),(0,o.jsx)(tv,{pic:tF[e.selectIndex],test:"Test2"}),(0,o.jsx)(tv,{pic:tF[e.selectIndex],test:"Test3"}),(0,o.jsx)(tv,{pic:tF[e.selectIndex],test:"Test4"})]})})]})});class tR{topicList=tN;selectIndex=0;constructor(){(0,c.makeAutoObservable)(this)}dealTopicClick=e=>{this.selectIndex=e}}let tV=s.default.div.withConfig({displayName:"ListenView__Root",componentId:"sc-2f9947d5-0"})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
`,tz=s.default.div.withConfig({displayName:"ListenView__Title",componentId:"sc-2f9947d5-1"})`
  font-weight: 500;
  font-size: 28px;
  color: #333643;
  line-height: 40px;
  text-align: justify;
  font-style: normal;
`,tP=s.default.div.withConfig({displayName:"ListenView__TopicList",componentId:"sc-2f9947d5-2"})`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  margin-top: 24px;
  width: 100%;
`,tD=s.default.div.withConfig({displayName:"ListenView__TopicItem",componentId:"sc-2f9947d5-3"})`
  font-size: 14px;
  color: ${e=>e.$isChoose?"#FFFFFF":"#8E95A3"};
  padding: 5px 10px;
  cursor: pointer;
  background: ${e=>e.$isChoose?"#3377FF":"transparent"};
  border-radius: 10px;
  margin-right: 5px;

  &:hover {
    color: ${e=>e.$isChoose?"#FFFFFF":"#8E95A3"};
    background: ${e=>e.$isChoose?"#3377FF":"#EEEEEE"};
  }
`,tL=s.default.div.withConfig({displayName:"ListenView__PaperList",componentId:"sc-2f9947d5-4"})`
  margin-top: 16px;
  width: 100%;
`,tB=(0,n.observer)(function(){let[e]=(0,d.useState)(()=>new tQ);return(0,o.jsxs)(tM,{children:[(0,o.jsx)(tW,{children:"阅读题库"}),(0,o.jsx)(tK,{children:e.topicList.map((t,i)=>(0,o.jsx)(tU,{$isChoose:e.selectIndex==i,onClick:()=>e.dealTopicClick(i),children:t},i))}),(0,o.jsx)(tH,{children:(0,o.jsxs)(l.Space,{children:[(0,o.jsx)(tv,{pic:tF[e.selectIndex],test:"Test1"}),(0,o.jsx)(tv,{pic:tF[e.selectIndex],test:"Test2"}),(0,o.jsx)(tv,{pic:tF[e.selectIndex],test:"Test3"}),(0,o.jsx)(tv,{pic:tF[e.selectIndex],test:"Test4"})]})})]})});class tQ{topicList=tN;selectIndex=0;constructor(){(0,c.makeAutoObservable)(this)}dealTopicClick=e=>{this.selectIndex=e}}let tM=s.default.div.withConfig({displayName:"ReadView__Root",componentId:"sc-222b3357-0"})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
`,tW=s.default.div.withConfig({displayName:"ReadView__Title",componentId:"sc-222b3357-1"})`
  font-weight: 500;
  font-size: 28px;
  color: #333643;
  line-height: 40px;
  text-align: justify;
  font-style: normal;
`,tK=s.default.div.withConfig({displayName:"ReadView__TopicList",componentId:"sc-222b3357-2"})`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  margin-top: 24px;
  width: 100%;
`,tU=s.default.div.withConfig({displayName:"ReadView__TopicItem",componentId:"sc-222b3357-3"})`
  font-size: 14px;
  color: ${e=>e.$isChoose?"#FFFFFF":"#8E95A3"};
  padding: 5px 10px;
  cursor: pointer;
  background: ${e=>e.$isChoose?"#3377FF":"transparent"};
  border-radius: 10px;
  margin-right: 5px;

  &:hover {
    color: ${e=>e.$isChoose?"#FFFFFF":"#8E95A3"};
    background: ${e=>e.$isChoose?"#3377FF":"#EEEEEE"};
  }
`,tH=s.default.div.withConfig({displayName:"ReadView__PaperList",componentId:"sc-222b3357-4"})`
  margin-top: 16px;
  width: 100%;
`,tq=(0,n.observer)(function(){let[e]=(0,d.useState)(()=>new tJ);return(0,o.jsxs)(tY,{children:[(0,o.jsx)(tX,{children:"写作题库"}),(0,o.jsx)(tZ,{children:e.topicList.map((t,i)=>(0,o.jsx)(tG,{$isChoose:e.selectIndex==i,onClick:()=>e.dealTopicClick(i),children:t},i))}),(0,o.jsx)(t0,{children:(0,o.jsxs)(l.Space,{children:[(0,o.jsx)(tv,{pic:tF[e.selectIndex],test:"Test1"}),(0,o.jsx)(tv,{pic:tF[e.selectIndex],test:"Test2"}),(0,o.jsx)(tv,{pic:tF[e.selectIndex],test:"Test3"}),(0,o.jsx)(tv,{pic:tF[e.selectIndex],test:"Test4"})]})})]})});class tJ{topicList=tN;selectIndex=0;constructor(){(0,c.makeAutoObservable)(this)}dealTopicClick=e=>{this.selectIndex=e}}let tY=s.default.div.withConfig({displayName:"WriteView__Root",componentId:"sc-c0677db2-0"})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
`,tX=s.default.div.withConfig({displayName:"WriteView__Title",componentId:"sc-c0677db2-1"})`
  font-weight: 500;
  font-size: 28px;
  color: #333643;
  line-height: 40px;
  text-align: justify;
  font-style: normal;
`,tZ=s.default.div.withConfig({displayName:"WriteView__TopicList",componentId:"sc-c0677db2-2"})`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  margin-top: 24px;
  width: 100%;
`,tG=s.default.div.withConfig({displayName:"WriteView__TopicItem",componentId:"sc-c0677db2-3"})`
  font-size: 14px;
  color: ${e=>e.$isChoose?"#FFFFFF":"#8E95A3"};
  padding: 5px 10px;
  cursor: pointer;
  background: ${e=>e.$isChoose?"#3377FF":"transparent"};
  border-radius: 10px;
  margin-right: 5px;

  &:hover {
    color: ${e=>e.$isChoose?"#FFFFFF":"#8E95A3"};
    background: ${e=>e.$isChoose?"#3377FF":"#EEEEEE"};
  }
`,t0=s.default.div.withConfig({displayName:"WriteView__PaperList",componentId:"sc-c0677db2-4"})`
  margin-top: 16px;
  width: 100%;
`,t1=(0,n.observer)(function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.default,{children:(0,o.jsx)("title",{children:"题库_雅思哥_在线雅思培训_全真机考模拟软件_当季口语题库"})}),(0,o.jsx)(a.default,{tabIndex:5,backgroundColor:"#F5F6FA",children:(0,o.jsxs)(t3,{children:[(0,o.jsx)(tp,{}),(0,o.jsx)(tT,{}),(0,o.jsx)(tB,{}),(0,o.jsx)(tq,{})]})})]})}),t3=s.default.div.withConfig({displayName:"QuestionBankPage__Root",componentId:"sc-f828cf2d-0"})`
  width: 100%;
  margin-bottom: 66px;
`;e.s(["default",0,t1],42345)},18859,(e,t,i)=>{let o="/question-bank";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(42345)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([o])})}]);