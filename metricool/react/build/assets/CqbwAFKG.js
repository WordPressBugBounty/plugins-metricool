import{ao as e,x as t,t as r,v as n,ag as i,a1 as o,V as a,g as s,w as l,o as d,s as c,a0 as u,M as f,p as g,ad as p,F as h,f as v,an as b,ah as m,c as $,a5 as x,al as y,S as w,D as C}from"./zMBb-g8y.js";let k={data:""},z=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,F=/\/\*[^]*?\*\/|  +/g,S=/\n+/g,I=(e,t)=>{let r="",n="",i="";for(let o in e){let a=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+a+";":n+="f"==o[1]?I(a,o):o+"{"+I(a,"k"==o[1]?"":t)+"}":"object"==typeof a?n+=I(a,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=a&&(o="-"==o[1]?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=I.p?I.p(o,a):o+":"+a+";")}return r+(t&&i?t+"{"+i+"}":i)+n},D={},B=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+B(e[r]);return t}return e};function A(e){let t=this||{},r=e.call?e(t.p):e;return((e,t,r,n,i)=>{let o=B(e),a=D[o]||(D[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!D[a]){let t=o!==e?e:(e=>{let t,r,n=[{}];for(;t=z.exec(e.replace(F,""));)t[4]?n.shift():t[3]?(r=t[3].replace(S," ").trim(),n.unshift(n[0][r]=n[0][r]||{})):n[0][t[1]]=t[2].replace(S," ").trim();return n[0]})(e);D[a]=I(i?{["@keyframes "+a]:t}:t,r?"":"."+a)}let s=r&&D.g;return r&&(D.g=D[a]),l=D[a],d=t,c=n,(u=s)?d.data=d.data.replace(u,l):-1===d.data.indexOf(l)&&(d.data=c?l+d.data:d.data+l),a;var l,d,c,u})(r.unshift?r.raw?((e,t,r)=>e.reduce((e,n,i)=>{let o=t[i];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":I(e,""):!1===e?"":e}return e+n+(null==o?"":o)},""))(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||k})(t.target),t.g,t.o,t.k)}A.bind({g:1}),A.bind({k:1});const E=Object.prototype.hasOwnProperty;function M(e,t,r=new Uint16Array(6)){const n=e.indexOf("/",t),i=-1===n?e.length:n,o=e.substring(t,i);if(!o||!o.includes("$"))return r[0]=0,r[1]=t,r[2]=t,r[3]=i,r[4]=i,r[5]=i,r;if("$"===o){const n=e.length;return r[0]=2,r[1]=t,r[2]=t,r[3]=n,r[4]=n,r[5]=n,r}if(36===o.charCodeAt(0))return r[0]=1,r[1]=t,r[2]=t+1,r[3]=i,r[4]=i,r[5]=i,r;const a=function(e){const t=e.indexOf("{");if(-1===t)return null;const r=e.indexOf("}",t);return-1===r||t+1>=e.length?null:[t,r]}(o);if(a){const[n,s]=a,l=o.charCodeAt(n+1);if(45===l){if(n+2<o.length&&36===o.charCodeAt(n+2)){const e=n+3,o=s;if(e<o)return r[0]=3,r[1]=t+n,r[2]=t+e,r[3]=t+o,r[4]=t+s+1,r[5]=i,r}}else if(36===l){const o=n+1,a=n+2;return a===s?(r[0]=2,r[1]=t+n,r[2]=t+o,r[3]=t+a,r[4]=t+s+1,r[5]=e.length,r):(r[0]=1,r[1]=t+n,r[2]=t+a,r[3]=t+s,r[4]=t+s+1,r[5]=i,r)}}return r[0]=0,r[1]=t,r[2]=t,r[3]=i,r[4]=i,r[5]=i,r}function R(e){return function(e){const t=e.length;return t>1&&"/"===e[t-1]?e.replace(/\/{1,}$/,""):e}(function(e){return"/"===e?e:e.replace(/^\/{1,}/,"")}(e))}function j(e,t,r){const n=t[e];return"string"!=typeof n?n:"_splat"===e?/^[a-zA-Z0-9\-._~!/]*$/.test(n)?n:n.split("/").map(e=>O(e,r)).join("/"):O(n,r)}function O(e,t){const r=encodeURIComponent(e);return t?.(r)??r}const T="__root__";var P={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{90:"e5",70:"b3",20:"33"},font:{size:{"2xs":"calc(var(--tsrd-font-size) * 0.625)",xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)",md:"var(--tsrd-font-size)"},lineHeight:{xs:"calc(var(--tsrd-font-size) * 1)",sm:"calc(var(--tsrd-font-size) * 1.25)"},weight:{normal:"400",medium:"500",semibold:"600",bold:"700"},fontFamily:{sans:"ui-sans-serif, Inter, system-ui, sans-serif, sans-serif",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}},border:{radius:{xs:"calc(var(--tsrd-font-size) * 0.125)",sm:"calc(var(--tsrd-font-size) * 0.25)",md:"calc(var(--tsrd-font-size) * 0.375)",full:"9999px"}},size:{0:"0px",.5:"calc(var(--tsrd-font-size) * 0.125)",1:"calc(var(--tsrd-font-size) * 0.25)",1.5:"calc(var(--tsrd-font-size) * 0.375)",2:"calc(var(--tsrd-font-size) * 0.5)",2.5:"calc(var(--tsrd-font-size) * 0.625)",3:"calc(var(--tsrd-font-size) * 0.75)",3.5:"calc(var(--tsrd-font-size) * 0.875)",4:"calc(var(--tsrd-font-size) * 1)",5:"calc(var(--tsrd-font-size) * 1.25)",8:"calc(var(--tsrd-font-size) * 2)"}};function L(){const[e]=t((e=>{const{colors:t,font:r,size:n,alpha:i,border:o}=P,{fontFamily:a,lineHeight:s,size:l}=r,d=e?A.bind({target:e}):A;return{devtoolsPanelContainer:d`
      direction: ltr;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      max-height: 90%;
      border-top: 1px solid ${t.gray[700]};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:e=>d`
        visibility: ${e?"visible":"hidden"};
      `,devtoolsPanelContainerResizing:e=>e()?d`
          transition: none;
        `:d`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(e,t)=>e?d`
          pointer-events: auto;
          transform: translateY(0);
        `:d`
        pointer-events: none;
        transform: translateY(${t}px);
      `,logo:d`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      font-family: ${a.sans};
      gap: ${P.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${o.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,tanstackLogo:d`
      font-size: ${r.size.md};
      font-weight: ${r.weight.bold};
      line-height: ${r.lineHeight.xs};
      white-space: nowrap;
      color: ${t.gray[300]};
    `,routerLogo:d`
      font-weight: ${r.weight.semibold};
      font-size: ${r.size.xs};
      background: linear-gradient(to right, #84cc16, #10b981);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,devtoolsPanel:d`
      display: flex;
      font-size: ${l.sm};
      font-family: ${a.sans};
      background-color: ${t.darkGray[700]};
      color: ${t.gray[300]};

      @media (max-width: 700px) {
        flex-direction: column;
      }
      @media (max-width: 600px) {
        font-size: ${l.xs};
      }
    `,dragHandle:d`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      z-index: 100000;
      &:hover {
        background-color: ${t.purple[400]}${i[90]};
      }
    `,firstContainer:d`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,routerExplorerContainer:d`
      overflow-y: auto;
      flex: 1;
    `,routerExplorer:d`
      padding: ${P.size[2]};
    `,row:d`
      display: flex;
      align-items: center;
      padding: ${P.size[2]} ${P.size[2.5]};
      gap: ${P.size[2.5]};
      border-bottom: ${t.darkGray[500]} 1px solid;
      align-items: center;
    `,detailsHeader:d`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${t.darkGray[600]};
      padding: 0px ${P.size[2]};
      font-weight: ${r.weight.medium};
      font-size: ${r.size.xs};
      min-height: ${P.size[8]};
      line-height: ${r.lineHeight.xs};
      text-align: left;
      display: flex;
      align-items: center;
    `,maskedBadge:d`
      background: ${t.yellow[900]}${i[70]};
      color: ${t.yellow[300]};
      display: inline-block;
      padding: ${P.size[0]} ${P.size[2.5]};
      border-radius: ${o.radius.full};
      font-size: ${r.size.xs};
      font-weight: ${r.weight.normal};
      border: 1px solid ${t.yellow[300]};
    `,maskedLocation:d`
      color: ${t.yellow[300]};
    `,detailsContent:d`
      padding: ${P.size[1.5]} ${P.size[2]};
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${r.size.xs};
    `,routeMatchesToggle:d`
      display: flex;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      border-radius: ${o.radius.sm};
      overflow: hidden;
    `,routeMatchesToggleBtn:(e,n)=>{const o=[d`
        appearance: none;
        border: none;
        font-size: 12px;
        padding: 4px 8px;
        background: transparent;
        cursor: pointer;
        font-family: ${a.sans};
        font-weight: ${r.weight.medium};
      `];if(e){const e=d`
          background: ${t.darkGray[400]};
          color: ${t.gray[300]};
        `;o.push(e)}else{const e=d`
          color: ${t.gray[500]};
          background: ${t.darkGray[800]}${i[20]};
        `;o.push(e)}return n&&o.push(d`
          border-right: 1px solid ${P.colors.gray[500]};
        `),o},detailsHeaderInfo:d`
      flex: 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      font-weight: ${r.weight.normal};
      color: ${t.gray[400]};
    `,matchRow:e=>{const r=[d`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        cursor: pointer;
        align-items: center;
        padding: ${n[1]} ${n[2]};
        gap: ${n[2]};
        font-size: ${l.xs};
        color: ${t.gray[300]};
      `];if(e){const e=d`
          background: ${t.darkGray[500]};
        `;r.push(e)}return r},matchIndicator:e=>{const r=[d`
        flex: 0 0 auto;
        width: ${n[3]};
        height: ${n[3]};
        background: ${t[e][900]};
        border: 1px solid ${t[e][500]};
        border-radius: ${o.radius.full};
        transition: all 0.25s ease-out;
        box-sizing: border-box;
      `];if("gray"===e){const e=d`
          background: ${t.gray[700]};
          border-color: ${t.gray[400]};
        `;r.push(e)}return r},matchID:d`
      flex: 1;
      line-height: ${s.xs};
    `,ageTicker:e=>{const r=[d`
        display: flex;
        gap: ${n[1]};
        font-size: ${l.xs};
        color: ${t.gray[400]};
        font-variant-numeric: tabular-nums;
        line-height: ${s.xs};
      `];if(e){const e=d`
          color: ${t.yellow[400]};
        `;r.push(e)}return r},secondContainer:d`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,thirdContainer:d`
      flex: 1 1 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid ${t.gray[700]};

      @media (max-width: 700px) {
        border-top: 2px solid ${t.gray[700]};
      }
    `,fourthContainer:d`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
    `,routesContainer:d`
      overflow-x: auto;
      overflow-y: visible;
    `,routesRowContainer:(e,r)=>{const i=[d`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        align-items: center;
        padding: ${n[1]} ${n[2]};
        gap: ${n[2]};
        font-size: ${l.xs};
        color: ${t.gray[300]};
        cursor: ${r?"pointer":"default"};
        line-height: ${s.xs};
      `];if(e){const e=d`
          background: ${t.darkGray[500]};
        `;i.push(e)}return i},routesRow:e=>{const r=[d`
        flex: 1 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${l.xs};
        line-height: ${s.xs};
      `];if(!e){const e=d`
          color: ${t.gray[400]};
        `;r.push(e)}return r},routesRowInner:d`
      display: 'flex';
      align-items: 'center';
      flex-grow: 1;
      min-width: 0;
    `,routeParamInfo:d`
      color: ${t.gray[400]};
      font-size: ${l.xs};
      line-height: ${s.xs};
    `,nestedRouteRow:e=>d`
        margin-left: ${e?0:n[3.5]};
        border-left: ${e?"":`solid 1px ${t.gray[700]}`};
      `,code:d`
      font-size: ${l.xs};
      line-height: ${s.xs};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `,matchesContainer:d`
      flex: 1 1 auto;
      overflow-y: auto;
    `,cachedMatchesContainer:d`
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,historyContainer:d`
      display: flex;
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,historyOverflowContainer:d`
      padding: ${n[1]} ${n[2]};
      font-size: ${P.font.size.xs};
    `,maskedBadgeContainer:d`
      flex: 1;
      justify-content: flex-end;
      display: flex;
    `,matchDetails:d`
      display: flex;
      flex-direction: column;
      padding: ${P.size[2]};
      font-size: ${P.font.size.xs};
      color: ${P.colors.gray[300]};
      line-height: ${P.font.lineHeight.sm};
    `,matchStatus:(e,t)=>{const r=t&&"success"===e?"beforeLoad"===t?"purple":"blue":{pending:"yellow",success:"green",error:"red",notFound:"purple",redirected:"gray"}[e];return d`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: ${P.border.radius.sm};
        font-weight: ${P.font.weight.normal};
        background-color: ${P.colors[r][900]}${P.alpha[90]};
        color: ${P.colors[r][300]};
        border: 1px solid ${P.colors[r][600]};
        margin-bottom: ${P.size[2]};
        transition: all 0.25s ease-out;
      `},matchDetailsInfo:d`
      display: flex;
      justify-content: flex-end;
      flex: 1;
    `,matchDetailsInfoLabel:d`
      display: flex;
    `,mainCloseBtn:d`
      background: ${t.darkGray[700]};
      padding: ${n[1]} ${n[2]} ${n[1]} ${n[1.5]};
      border-radius: ${o.radius.md};
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      gap: 8px;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      font-size: ${r.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;

      &:hover {
        background: ${t.darkGray[500]};
      }
    `,mainCloseBtnPosition:e=>d`
        ${"top-left"===e?`top: ${n[2]}; left: ${n[2]};`:""}
        ${"top-right"===e?`top: ${n[2]}; right: ${n[2]};`:""}
        ${"bottom-left"===e?`bottom: ${n[2]}; left: ${n[2]};`:""}
        ${"bottom-right"===e?`bottom: ${n[2]}; right: ${n[2]};`:""}
      `,mainCloseBtnAnimation:e=>e?d`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `:d`
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        `,routerLogoCloseButton:d`
      font-weight: ${r.weight.semibold};
      font-size: ${r.size.xs};
      background: linear-gradient(to right, #98f30c, #00f4a3);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,mainCloseBtnDivider:d`
      width: 1px;
      background: ${P.colors.gray[600]};
      height: 100%;
      border-radius: 999999px;
      color: transparent;
    `,mainCloseBtnIconContainer:d`
      position: relative;
      width: ${n[5]};
      height: ${n[5]};
      background: pink;
      border-radius: 999999px;
      overflow: hidden;
    `,mainCloseBtnIconOuter:d`
      width: ${n[5]};
      height: ${n[5]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(3px) saturate(1.8) contrast(2);
    `,mainCloseBtnIconInner:d`
      width: ${n[4]};
      height: ${n[4]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,panelCloseBtn:d`
      position: absolute;
      cursor: pointer;
      z-index: 100001;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${t.darkGray[700]};
      &:hover {
        background-color: ${t.darkGray[500]};
      }

      top: 0;
      right: ${n[2]};
      transform: translate(0, -100%);
      border-right: ${t.darkGray[300]} 1px solid;
      border-left: ${t.darkGray[300]} 1px solid;
      border-top: ${t.darkGray[300]} 1px solid;
      border-bottom: none;
      border-radius: ${o.radius.sm} ${o.radius.sm} 0px 0px;
      padding: ${n[1]} ${n[1.5]} ${n[.5]} ${n[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${n[2.5]};
        height: ${n[1.5]};
        width: calc(100% + ${n[5]});
      }
    `,panelCloseBtnIcon:d`
      color: ${t.gray[400]};
      width: ${n[2]};
      height: ${n[2]};
    `,navigateButton:d`
      background: none;
      border: none;
      padding: 0 0 0 4px;
      margin: 0;
      color: ${t.gray[400]};
      font-size: ${l.md};
      cursor: pointer;
      line-height: 1;
      vertical-align: middle;
      margin-right: 0.5ch;
      flex-shrink: 0;
      &:hover {
        color: ${t.blue[300]};
      }
    `}})(b(w)));return e}function G(e,n){const[i,o]=t();return r(()=>{const t=(e=>{try{const t=localStorage.getItem(e);return"string"==typeof t?JSON.parse(t):void 0}catch{return}})(e);o(null==t?"function"==typeof n?n():n:t)}),[i,t=>{o(r=>{let n=t;"function"==typeof t&&(n=t(r));try{localStorage.setItem(e,JSON.stringify(n))}catch{}return n})}]}var H="undefined"==typeof window;function N(e){return e.isFetching&&"success"===e.status?"beforeLoad"===e.isFetching?"purple":"blue":{pending:"yellow",success:"green",error:"red",notFound:"purple",redirected:"gray"}[e.status]}function _(){const[e,n]=t(!1);return(H?r:l)(()=>{n(!0)}),e}var V=Symbol.for("tanstack.rsc.stream"),J=Symbol.for("tanstack.rsc.renderable"),U=Symbol.for("tanstack.rsc.slotUsages");function K(e){let t=e.length;for(;t>0&&void 0===e[t-1];)t--;return 0===t||t===e.length?e:e.slice(0,t)}var W=e=>("object"==typeof e||"function"==typeof e)&&null!==e&&V in e,Y=e=>W(e)?J in e&&!0===e[J]?"renderableValue":"compositeSource":null,Z=e=>{if(!W(e))return[];const t=[];if(U in e){const r=e[U];if(Array.isArray(r))for(const e of r){const r=e?.slot;"string"!=typeof r||t.includes(r)||t.push(r)}}return t},q=e=>{if("React element"===e)return"React element";const t=Y(e);if("compositeSource"===t){const t=Z(e);return t.length>0?`RSC composite source (${t.length} ${1===t.length?"slot":"slots"})`:"RSC composite source"}if("renderableValue"===t)return"RSC renderable value";const r=Object.getOwnPropertyNames(Object(e)),n="bigint"==typeof e?`${e.toString()}n`:e;try{return JSON.stringify(n,r)}catch{return"unable to stringify"}},Q=m('<span><svg xmlns=http://www.w3.org/2000/svg width=12 height=12 fill=none viewBox="0 0 24 24"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M9 18l6-6-6-6">'),X=m("<div>"),ee=m("<button><span>:</span><span>"),te=m("<div><span>slots</span><div>"),re=m("<span>:"),ne=m("<span>"),ie=m("<button><span> "),oe=m("<div><div><button> [<!> ... <!>]"),ae=m("<button><span></span> 🔄 "),se=({expanded:e,style:t={}})=>{const r=ce();return n=Q(),i=n.firstChild,l(t=>{var o=r().expander,a=g(r().expanderIcon(e));return o!==t.e&&d(n,t.e=o),a!==t.t&&p(i,"class",t.t=a),t},{e:void 0,t:void 0}),n;var n,i};function le({value:e,defaultExpanded:r,pageSize:i=100,filterSubEntries:s,...f}){const[p,h]=t(Boolean(r)),v=()=>h(e=>!e),b=n(()=>typeof e()),m=n(()=>{let t=[];const n=e=>{const t=!0===r?{[e.label]:!0}:r?.[e.label];return{...e,value:()=>e.value,defaultExpanded:t}};if(Array.isArray(e())&&2===e().length&&"React element"===e()[0]&&function(e){if(!e||"object"!=typeof e)return!1;const t=Object.getPrototypeOf(e);return t===Object.prototype||null===t}(e()[1])){const r=e();t=[n({label:"0",value:r[0]}),...Object.entries(r[1]).map(([e,t])=>n({label:e,value:t}))]}else Array.isArray(e())?t=e().map((e,t)=>n({label:t.toString(),value:e})):null!==e()&&"object"==typeof e()&&(i=e(),Symbol.iterator in i)&&"function"==typeof e()[Symbol.iterator]?t=Array.from(e(),(e,t)=>n({label:t.toString(),value:e})):"object"==typeof e()&&null!==e()&&(t=Object.entries(e()).map(([e,t])=>n({label:e,value:t})));var i;return s?s(t):t}),$=n(()=>function(e,t){if(t<1)return[];let r=0;const n=[];for(;r<e.length;)n.push(e.slice(r,r+t)),r+=t;return n}(m(),i)),[x,y]=t([]),[w,C]=t(void 0),k=ce(),z=()=>{C(e()())},F=t=>c(le,o({value:e,filterSubEntries:s},f,t)),S=n(()=>Y(e())),I=n(()=>Z(e())),D=n(()=>(e=>{const t=(e=>{if(!W(e))return[];if(!(U in e))return[];const t=e[U];return Array.isArray(t)?t.filter(e=>e&&"object"==typeof e&&"string"==typeof e.slot&&(void 0===e.args||Array.isArray(e.args))):[]})(e),r={};for(const n of t){const e=K(n.args??[]),t=r[n.slot]??(r[n.slot]={count:0,invocations:[]});t.count++,t.invocations.push(e)}return r})(e())),B=n(()=>"compositeSource"===S()&&I().length>0);return E=X(),a(E,(A=u(()=>null!==S()),()=>{return A()?u(()=>!!B())()?[(R=ee(),j=R.firstChild,O=j.firstChild,T=j.nextSibling,R.$$click=()=>v(),a(R,c(se,{get expanded(){return p()??!1}}),j),a(j,()=>f.label,O),a(T,()=>q(e())),l(e=>{var t=k().expandButton,r=k().compositeComponent;return t!==e.e&&d(R,e.e=t),r!==e.t&&d(T,e.t=r),e},{e:void 0,t:void 0}),R),u(()=>{return u(()=>!!p())()?(e=te(),t=e.firstChild,r=t.nextSibling,a(r,()=>I().map(e=>{const t=D()[e];return t?c(le,{label:`${e}:`,value:()=>t.invocations.map(e=>1===e.length?e[0]:e)}):null})),l(n=>{var i=k().rscMetaRow,o=k().rscMetaLabel,a=k().subEntries;return i!==n.e&&d(e,n.e=i),o!==n.t&&d(t,n.t=o),a!==n.a&&d(r,n.a=a),n},{e:void 0,t:void 0,a:void 0}),e):null;var e,t,r})]:[(E=re(),M=E.firstChild,a(E,()=>f.label,M),E)," ",(C=ne(),a(C,()=>q(e())),l(()=>d(C,"compositeSource"===S()?k().compositeComponent:k().renderableComponent)),C)]:u(()=>!!$().length)()?[(o=ie(),s=o.firstChild,h=s.firstChild,o.$$click=()=>v(),a(o,c(se,{get expanded(){return p()??!1}}),s),a(o,()=>f.label,s),a(s,()=>"iterable"===String(b).toLowerCase()?"(Iterable) ":"",h),a(s,()=>m().length,h),a(s,()=>m().length>1?"items":"item",null),l(e=>{var t=k().expandButton,r=k().info;return t!==e.e&&d(o,e.e=t),r!==e.t&&d(s,e.t=r),e},{e:void 0,t:void 0}),o),u(()=>{return u(()=>!!p())()?u(()=>1===$().length)()?(t=X(),a(t,()=>m().map((e,t)=>F(e))),l(()=>d(t,k().subEntries)),t):(e=X(),a(e,()=>$().map((e,t)=>{return n=oe(),o=n.firstChild,(h=(p=(f=(s=o.firstChild).firstChild).nextSibling).nextSibling.nextSibling).nextSibling,s.$$click=()=>y(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t]),a(s,c(se,{get expanded(){return x().includes(t)}}),f),a(s,t*i,p),a(s,t*i+i-1,h),a(o,(r=u(()=>!!x().includes(t)),()=>{return r()?(t=X(),a(t,()=>e.map(e=>F(e))),l(()=>d(t,k().subEntries)),t):null;var t}),null),l(e=>{var t=k().entry,r=g(k().labelButton,"labelButton");return t!==e.e&&d(o,e.e=t),r!==e.t&&d(s,e.t=r),e},{e:void 0,t:void 0}),n;var r,n,o,s,f,p,h})),l(()=>d(e,k().subEntries)),e):null;var e,t})]:u(()=>"function"===b())()?c(le,{get label(){return t=(e=ae()).firstChild,e.$$click=z,a(t,()=>f.label),l(()=>d(e,k().refreshValueBtn)),e;var e,t},value:w,defaultExpanded:{}}):[(r=re(),n=r.firstChild,a(r,()=>f.label,n),r)," ",(t=ne(),a(t,()=>q(e())),l(()=>d(t,k().value)),t)];var t,r,n,o,s,h,C,E,M,R,j,O,T})),l(()=>d(E,k().entry)),E;var A,E}var de=e=>{const{colors:t,font:r,size:n,border:i}=P,{fontFamily:o,lineHeight:a,size:s}=r,l=e?A.bind({target:e}):A;return{entry:l`
      font-family: ${o.mono};
      font-size: ${s.xs};
      line-height: ${a.sm};
      outline: none;
      word-break: break-word;
    `,labelButton:l`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,expander:l`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${n[3]};
      height: ${n[3]};
      padding-left: 3px;
      box-sizing: content-box;
    `,expanderIcon:e=>e?l`
          transform: rotate(90deg);
          transition: transform 0.1s ease;
        `:l`
        transform: rotate(0deg);
        transition: transform 0.1s ease;
      `,expandButton:l`
      display: flex;
      gap: ${n[1]};
      align-items: center;
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,value:l`
      color: ${t.purple[400]};
    `,compositeComponent:l`
      display: inline-flex;
      align-items: center;
      padding: 1px ${n[1]};
      border-radius: ${i.radius.full};
      border: 1px solid ${t.darkGray[500]};
      background: ${t.darkGray[700]};
      color: ${t.cyan[300]};
      font-style: normal;
      font-weight: ${r.weight.medium};
    `,renderableComponent:l`
      display: inline-flex;
      align-items: center;
      padding: 1px ${n[1]};
      border-radius: ${i.radius.full};
      border: 1px solid ${t.darkGray[500]};
      background: ${t.darkGray[700]};
      color: ${t.teal[300]};
      font-style: normal;
      font-weight: ${r.weight.medium};
    `,rscMetaRow:l`
      display: flex;
      gap: ${n[1]};
      align-items: flex-start;
      margin-left: calc(${n[3]} + ${n[1]});
      margin-top: ${n[.5]};
      flex-wrap: wrap;
    `,rscMetaLabel:l`
      color: ${t.gray[500]};
      font-size: ${s["2xs"]};
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding-top: 2px;
    `,rscChipRow:l`
      display: flex;
      gap: ${n[1]};
      flex-wrap: wrap;
    `,rscChip:l`
      display: inline-flex;
      align-items: center;
      gap: ${n[.5]};
      padding: 1px ${n[1]};
      border-radius: ${i.radius.full};
      border: 1px solid ${t.darkGray[500]};
      background: ${t.darkGray[800]};
      color: ${t.gray[200]};
      font-size: ${s["2xs"]};
      line-height: ${a.xs};
    `,rscChipName:l`
      color: ${t.gray[100]};
    `,rscChipMeta:l`
      color: ${t.gray[400]};
      font-size: ${s["2xs"]};
    `,subEntries:l`
      margin-left: ${n[2]};
      padding-left: ${n[2]};
      border-left: 2px solid ${t.darkGray[400]};
    `,info:l`
      color: ${t.gray[500]};
      font-size: ${s["2xs"]};
      padding-left: ${n[1]};
    `,refreshValueBtn:l`
      appearance: none;
      border: 0;
      cursor: pointer;
      background: transparent;
      color: inherit;
      padding: 0;
      font-family: ${o.mono};
      font-size: ${s.xs};
    `}};function ce(){const[e]=t(de(b(w)));return e}C(["click"]);var ue=m("<div><div></div><div>/</div><div></div><div>/</div><div>");function fe(e){const t=[e/1e3,e/6e4,e/36e5,e/864e5];let r=0;for(let n=1;n<t.length&&!(t[n]<1);n++)r=n;return new Intl.NumberFormat(navigator.language,{compactDisplay:"short",notation:"compact",maximumFractionDigits:0}).format(t[r])+["s","min","h","d"][r]}function ge({match:e,router:t}){const r=L();if(!e)return null;const n=t().looseRoutesById[e.routeId];if(!n.options.loader)return null;const i=Date.now()-e.updatedAt,o=n.options.staleTime??t().options.defaultStaleTime??0,s=n.options.gcTime??t().options.defaultGcTime??18e5;return p=(f=(u=(c=ue()).firstChild).nextSibling.nextSibling).nextSibling.nextSibling,a(u,()=>fe(i)),a(f,()=>fe(o)),a(p,()=>fe(s)),l(()=>d(c,g(r().ageTicker(i>o)))),c;var c,u,f,p}var pe=m("<button type=button>➔");function he({to:e,params:t,search:r,router:n}){const i=L();return(o=pe()).$$click=i=>{i.stopPropagation(),n().navigate({to:e,params:t,search:r})},p(o,"title",`Navigate to ${e}`),l(()=>d(o,i().navigateButton)),o;var o}C(["click"]);var ve=m("<button><div>TANSTACK</div><div>TanStack Router v1"),be=m("<div style=display:flex;align-items:center;width:100%><div style=flex-grow:1;min-width:0>"),me=m("<code> "),$e=m("<code>"),xe=m("<div><div role=button><div>"),ye=m("<div>"),we=m("<div><ul>"),Ce=m('<div><button><svg xmlns=http://www.w3.org/2000/svg width=10 height=6 fill=none viewBox="0 0 10 6"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=1.667 d="M1 1l4 4 4-4"></path></svg></button><div><div></div><div><div></div></div></div><div><div><div><span>Pathname</span></div><div><code></code></div><div><div><button type=button>Routes</button><button type=button>Matches</button><button type=button>History</button></div><div><div>age / staleTime / gcTime</div></div></div><div>'),ke=m("<div><span>masked"),ze=m("<div role=button><div>"),Fe=m("<li><div>"),Se=m("<li>This panel displays the most recent 15 navigations."),Ie=m("<div><div><div>Cached Matches</div><div>age / staleTime / gcTime</div></div><div>"),De=m("<div><div>Match Details</div><div><div><div><div></div></div><div><div>ID:</div><div><code></code></div></div><div><div>State:</div><div></div></div><div><div>Last Updated:</div><div></div></div></div></div><div>Explorer</div><div>"),Be=m("<div>Loader Data"),Ae=m("<div><div><span>Search Params</span></div><div>"),Ee=m("<span style=margin-left:0.5rem>"),Me=m('<button type=button aria-label="Copy value to clipboard"style=cursor:pointer>');function Re(e){const{className:t,...r}=e,n=L();return a=ve(),s=a.firstChild,c=s.nextSibling,i(a,o(r,{get class(){return g(n().logo,t?t():"")}}),!1),l(e=>{var t=n().tanstackLogo,r=n().routerLogo;return t!==e.e&&d(s,e.e=t),r!==e.t&&d(c,e.t=r),e},{e:void 0,t:void 0}),a;var a,s,c}function je(e){return r=(t=be()).firstChild,a(t,()=>e.left,r),a(r,()=>e.children),a(t,()=>e.right,null),l(()=>d(t,e.class)),t;var t,r}function Oe({routerState:e,pendingMatches:t,router:r,route:i,isRoot:o,activeId:s,setActiveId:f}){const h=L(),v=n(()=>t().length?t():e().matches),b=n(()=>e().matches.find(e=>e.routeId===i.id)),m=n(()=>{try{if(b()?.params){const e=b()?.params,t=i.path||R(i.id);if(t.startsWith("$")){const r=t.slice(1);if(e[r])return`(${e[r]})`}}return""}catch(e){return""}}),x=n(()=>{if(o)return;if(!i.path)return;const e=Object.assign({},...v().map(e=>e.params)),t=function({path:e,params:t,decoder:r,...n}){let i=!1;const o=Object.create(null);if(!e||"/"===e)return{interpolatedPath:"/",usedParams:o,isMissingParams:i};if(!e.includes("$"))return{interpolatedPath:e,usedParams:o,isMissingParams:i};const a=e.length;let s,l=0,d="";for(;l<a;){const n=l;s=M(e,n,s);const a=s[5];if(l=a+1,n===a)continue;const c=s[0];if(0!==c){if(2===c){const l=t._splat;o._splat=l,o["*"]=l;const c=e.substring(n,s[1]),u=e.substring(s[4],a);if(!l){i=!0,(c||u)&&(d+="/"+c+u);continue}d+="/"+c+j("_splat",t,r)+u;continue}if(1===c){const l=e.substring(s[2],s[3]);i||l in t||(i=!0),o[l]=t[l];const c=e.substring(n,s[1]),u=e.substring(s[4],a);d+="/"+c+(j(l,t,r)??"undefined")+u;continue}if(3===c){const i=e.substring(s[2],s[3]),l=t[i];if(null==l)continue;o[i]=l;const c=e.substring(n,s[1]),u=e.substring(s[4],a);d+="/"+c+(j(i,t,r)??"")+u;continue}}else d+="/"+e.substring(n,a)}return e.endsWith("/")&&(d+="/"),{usedParams:o,interpolatedPath:d||"/",isMissingParams:i}}({path:i.fullPath,params:e,decoder:r().pathParamsDecoder});return t.isMissingParams?void 0:t.interpolatedPath});return w=xe(),C=w.firstChild,k=C.firstChild,C.$$click=()=>{b()&&f(s()===i.id?"":i.id)},a(C,c(je,{get class(){return g(h().routesRow(!!b()))},get left(){return c($,{get when(){return x()},children:e=>c(he,{get to(){return e()},router:r})})},get right(){return c(ge,{get match(){return b()},router:r})},get children(){return[(t=me(),r=t.firstChild,a(t,()=>o?T:i.path||R(i.id),r),l(()=>d(t,h().code)),t),(e=$e(),a(e,m),l(()=>d(e,h().routeParamInfo)),e)];var e,t,r}}),null),a(w,(y=u(()=>!!i.children?.length),()=>{return y()?(n=ye(),a(n,()=>[...i.children].sort((e,t)=>e.rank-t.rank).map(n=>c(Oe,{routerState:e,pendingMatches:t,router:r,route:n,activeId:s,setActiveId:f}))),l(()=>d(n,h().nestedRouteRow(!!o))),n):null;var n}),null),l(e=>{var t=`Open match details for ${i.id}`,r=g(h().routesRowContainer(i.id===s(),!!b())),n=g(h().matchIndicator(function(e,t){const r=e.find(e=>e.routeId===t.id);return r?N(r):"gray"}(v(),i)));return t!==e.e&&p(C,"aria-label",e.e=t),r!==e.t&&d(C,e.t=r),n!==e.a&&d(k,e.a=n),e},{e:void 0,t:void 0,a:void 0}),w;var y,w,C,k}var Te=function({...b}){const{isOpen:m=!0,setIsOpen:$,handleDragStart:w,router:C,routerState:k,shadowDOMTarget:z,...F}=b,{onCloseClick:S}=e(),I=L(),{className:D,style:B,...A}=F,[M,R]=G("tanstackRouterDevtoolsActiveTab","routes"),[j,O]=G("tanstackRouterDevtoolsActiveRouteId",""),[P,H]=t([]),[_,V]=t(!1);let J,U;if("subscribe"in C().stores.pendingMatches){const[e,n]=t([]);J=e;const[i,o]=t([]);U=i,r(()=>{const e=C().stores.pendingMatches;n(e.get());const t=e.subscribe(()=>{n(e.get())});x(()=>t.unsubscribe())}),r(()=>{const e=C().stores.cachedMatches;o(e.get());const t=e.subscribe(()=>{o(e.get())});x(()=>t.unsubscribe())})}else J=()=>C().stores.pendingMatches.get(),U=()=>C().stores.cachedMatches.get();r(()=>{const e=k().matches,t=e[e.length-1];if(!t)return;const r=y(()=>P()),n=r[0],i=n&&n.pathname===t.pathname&&JSON.stringify(n.search??{})===JSON.stringify(t.search??{});n&&i||(r.length>=15&&V(!0),H(e=>{const r=[t,...e];return r.splice(15),r}))});const K=n(()=>[...J(),...k().matches,...U()].find(e=>e.routeId===j()||e.id===j())),W=n(()=>function(e){for(const t in e)if(E.call(e,t))return!0;return!1}(k().location.search)),Y=n(()=>({...C(),state:k()})),Z=n(()=>Object.fromEntries(function(e,t=[e=>e]){return e.map((e,t)=>[e,t]).sort(([e,r],[n,i])=>{for(const o of t){const t=o(e),r=o(n);if(void 0===t){if(void 0===r)continue;return 1}if(t!==r)return t>r?1:-1}return r-i}).map(([e])=>e)}(Object.keys(Y()),["state","routesById","routesByPath","options","manifest"].map(e=>t=>t!==e)).map(e=>[e,Y()[e]]).filter(e=>"function"!=typeof e[1]&&!["stores","basepath","injectedHtml","subscribers","latestLoadPromise","navigateTimeout","resetNextScroll","tempLocationKey","latestLocation","routeTree","history"].includes(e[0])))),q=n(()=>K()?.loaderData),Q=n(()=>K()),X=n(()=>k().location.search);return(()=>{var e=Ce(),t=e.firstChild,r=t.firstChild,n=t.nextSibling,b=n.firstChild,m=b.nextSibling,x=m.firstChild,y=n.nextSibling,z=y.firstChild,F=z.firstChild;F.firstChild;var E,L,G,H,V,Y,ee=F.nextSibling,te=ee.firstChild,re=ee.nextSibling,ne=re.firstChild,ie=ne.firstChild,oe=ie.nextSibling,ae=oe.nextSibling,se=ne.nextSibling,de=re.nextSibling;return i(e,o({get class(){return g(I().devtoolsPanel,"TanStackRouterDevtoolsPanel",D?D():"")},get style(){return B?B():""}},A),!1),a(e,w?(E=ye(),s(E,"mousedown",w,!0),l(()=>d(E,I().dragHandle)),E):null,t),t.$$click=e=>{$&&$(!1),S(e)},a(b,c(Re,{"aria-hidden":!0,onClick:e=>{$&&$(!1),S(e)}})),a(x,c(le,{label:"Router",value:Z,defaultExpanded:{state:{},context:{},options:{}},filterSubEntries:e=>e.filter(e=>"function"!=typeof e.value())})),a(F,(L=u(()=>!!k().location.maskedLocation),()=>{return L()?(e=ke(),t=e.firstChild,l(r=>{var n=I().maskedBadgeContainer,i=I().maskedBadge;return n!==r.e&&d(e,r.e=n),i!==r.t&&d(t,r.t=i),r},{e:void 0,t:void 0}),e):null;var e,t}),null),a(te,()=>k().location.pathname),a(ee,(G=u(()=>!!k().location.maskedLocation),()=>{return G()?(e=$e(),a(e,()=>k().location.maskedLocation?.pathname),l(()=>d(e,I().maskedLocation)),e):null;var e}),null),ie.$$click=()=>{R("routes")},oe.$$click=()=>{R("matches")},ae.$$click=()=>{R("history")},a(de,c(v,{get children(){return[c(f,{get when(){return"routes"===M()},get children(){return c(Oe,{routerState:k,pendingMatches:J,router:C,get route(){return C().routeTree},isRoot:!0,activeId:j,setActiveId:O})}}),c(f,{get when(){return"matches"===M()},get children(){var e=ye();return a(e,()=>(J().length?J():k().matches).map((e,t)=>{return r=ze(),n=r.firstChild,r.$$click=()=>O(j()===e.id?"":e.id),a(r,c(je,{get left(){return c(he,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:C})},get right(){return c(ge,{match:e,router:C})},get children(){var t=$e();return a(t,()=>`${e.routeId===T?T:e.pathname}`),l(()=>d(t,I().matchID)),t}}),null),l(t=>{var i=`Open match details for ${e.id}`,o=g(I().matchRow(e===K())),a=g(I().matchIndicator(N(e)));return i!==t.e&&p(r,"aria-label",t.e=i),o!==t.t&&d(r,t.t=o),a!==t.a&&d(n,t.a=a),t},{e:void 0,t:void 0,a:void 0}),r;var r,n})),e}}),c(f,{get when(){return"history"===M()},get children(){var e,t=we(),r=t.firstChild;return a(r,c(h,{get each(){return P()},children:(e,t)=>{return r=Fe(),n=r.firstChild,a(r,c(je,{get left(){return c(he,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:C})},get right(){return c(ge,{match:e,router:C})},get children(){var t=$e();return a(t,()=>`${e.routeId===T?T:e.pathname}`),l(()=>d(t,I().matchID)),t}}),null),l(i=>{var o=g(I().matchRow(e===K())),a=g(I().matchIndicator(0===t()?"green":"gray"));return o!==i.e&&d(r,i.e=o),a!==i.t&&d(n,i.t=a),i},{e:void 0,t:void 0}),r;var r,n}}),null),a(r,(e=u(()=>!!_()),()=>{return e()?(t=Se(),l(()=>d(t,I().historyOverflowContainer)),t):null;var t}),null),t}})]}})),a(y,(H=u(()=>!!U().length),()=>{return H()?(e=Ie(),t=e.firstChild,r=t.firstChild.nextSibling,n=t.nextSibling,a(n,()=>U().map(e=>{return t=ze(),r=t.firstChild,t.$$click=()=>O(j()===e.id?"":e.id),a(t,c(je,{get left(){return c(he,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:C})},get right(){return c(ge,{match:e,router:C})},get children(){var t=$e();return a(t,()=>`${e.id}`),l(()=>d(t,I().matchID)),t}}),null),l(n=>{var i=`Open match details for ${e.id}`,o=g(I().matchRow(e===K())),a=g(I().matchIndicator(N(e)));return i!==n.e&&p(t,"aria-label",n.e=i),o!==n.t&&d(t,n.t=o),a!==n.a&&d(r,n.a=a),n},{e:void 0,t:void 0,a:void 0}),t;var t,r})),l(n=>{var i=I().cachedMatchesContainer,o=I().detailsHeader,a=I().detailsHeaderInfo;return i!==n.e&&d(e,n.e=i),o!==n.t&&d(t,n.t=o),a!==n.a&&d(r,n.a=a),n},{e:void 0,t:void 0,a:void 0}),e):null;var e,t,r,n}),null),a(e,(V=u(()=>!(!K()||!K()?.status)),()=>{return V()?(i=De(),s=(o=i.firstChild).nextSibling,f=s.firstChild,p=(g=f.firstChild).firstChild,h=g.nextSibling,b=(v=h.firstChild.nextSibling).firstChild,m=h.nextSibling,$=m.firstChild.nextSibling,x=m.nextSibling,y=x.firstChild.nextSibling,w=s.nextSibling,C=w.nextSibling,a(p,(e=u(()=>!("success"!==K()?.status||!K()?.isFetching)),()=>e()?"fetching":K()?.status)),a(b,()=>K()?.id),a($,(t=u(()=>!!J().find(e=>e.id===K()?.id)),()=>t()?"Pending":k().matches.find(e=>e.id===K()?.id)?"Active":"Cached")),a(y,(r=u(()=>!!K()?.updatedAt),()=>r()?new Date(K()?.updatedAt).toLocaleTimeString():"N/A")),a(i,(n=u(()=>!!q()),()=>{return n()?[(t=Be(),l(()=>d(t,I().detailsHeader)),t),(e=ye(),a(e,c(le,{label:"loaderData",value:q,defaultExpanded:{}})),l(()=>d(e,I().detailsContent)),e)]:null;var e,t}),w),a(C,c(le,{label:"Match",value:Q,defaultExpanded:{}})),l(e=>{var t=I().thirdContainer,r=I().detailsHeader,n=I().matchDetails,a=I().matchStatus(K()?.status,K()?.isFetching),s=I().matchDetailsInfoLabel,l=I().matchDetailsInfo,c=I().matchDetailsInfoLabel,u=I().matchDetailsInfo,p=I().matchDetailsInfoLabel,b=I().matchDetailsInfo,k=I().detailsHeader,z=I().detailsContent;return t!==e.e&&d(i,e.e=t),r!==e.t&&d(o,e.t=r),n!==e.a&&d(f,e.a=n),a!==e.o&&d(g,e.o=a),s!==e.i&&d(h,e.i=s),l!==e.n&&d(v,e.n=l),c!==e.s&&d(m,e.s=c),u!==e.h&&d($,e.h=u),p!==e.r&&d(x,e.r=p),b!==e.d&&d(y,e.d=b),k!==e.l&&d(w,e.l=k),z!==e.u&&d(C,e.u=z),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),i):null;var e,t,r,n,i,o,s,f,g,p,h,v,b,m,$,x,y,w,C}),null),a(e,(Y=u(()=>!!W()),()=>Y()?(()=>{var e=Ae(),t=e.firstChild;t.firstChild;var r,n=t.nextSibling;return a(t,"undefined"!=typeof navigator?(r=Ee(),a(r,c(Pe,{getValue:()=>{const e=k().location.search;return JSON.stringify(e)}})),r):null,null),a(n,c(le,{value:X,get defaultExpanded(){return Object.keys(k().location.search).reduce((e,t)=>(e[t]={},e),{})}})),l(r=>{var i=I().fourthContainer,o=I().detailsHeader,a=I().detailsContent;return i!==r.e&&d(e,r.e=i),o!==r.t&&d(t,r.t=o),a!==r.a&&d(n,r.a=a),r},{e:void 0,t:void 0,a:void 0}),e})():null),null),l(e=>{var i=I().panelCloseBtn,o=I().panelCloseBtnIcon,a=I().firstContainer,s=I().row,l=I().routerExplorerContainer,c=I().routerExplorer,u=I().secondContainer,f=I().matchesContainer,h=I().detailsHeader,v=I().detailsContent,$=I().detailsHeader,w=I().routeMatchesToggle,C="routes"===M(),k=g(I().routeMatchesToggleBtn("routes"===M(),!0)),S="matches"===M(),D=g(I().routeMatchesToggleBtn("matches"===M(),!0)),B="history"===M(),A=g(I().routeMatchesToggleBtn("history"===M(),!1)),E=I().detailsHeaderInfo,R=g(I().routesContainer);return i!==e.e&&d(t,e.e=i),o!==e.t&&p(r,"class",e.t=o),a!==e.a&&d(n,e.a=a),s!==e.o&&d(b,e.o=s),l!==e.i&&d(m,e.i=l),c!==e.n&&d(x,e.n=c),u!==e.s&&d(y,e.s=u),f!==e.h&&d(z,e.h=f),h!==e.r&&d(F,e.r=h),v!==e.d&&d(ee,e.d=v),$!==e.l&&d(re,e.l=$),w!==e.u&&d(ne,e.u=w),C!==e.c&&(ie.disabled=e.c=C),k!==e.w&&d(ie,e.w=k),S!==e.m&&(oe.disabled=e.m=S),D!==e.f&&d(oe,e.f=D),B!==e.y&&(ae.disabled=e.y=B),A!==e.g&&d(ae,e.g=A),E!==e.p&&d(se,e.p=E),R!==e.b&&d(de,e.b=R),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),e})()};function Pe({getValue:e}){const[r,n]=t(!1);let i=null;return x(()=>{i&&clearTimeout(i)}),(o=Me()).$$click=async()=>{if("undefined"!=typeof navigator&&navigator.clipboard?.writeText)try{const t=e();await navigator.clipboard.writeText(t),n(!0),i&&clearTimeout(i),i=setTimeout(()=>n(!1),2500)}catch(t){console.error("TanStack Router Devtools: Failed to copy",t)}else console.warn("TanStack Router Devtools: Clipboard API unavailable")},a(o,()=>r()?"✅":"📋"),l(()=>p(o,"title",r()?"Copied!":"Copy")),o;var o}C(["click","mousedown"]);export{Te as BaseTanStackRouterDevtoolsPanel,Te as default,G as n,L as r,_ as t};
