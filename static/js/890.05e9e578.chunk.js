/*! For license information please see 890.05e9e578.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[890],{890:function(n,t,r){r.d(t,{Z:function(){return b}});var e=r(3366),o=r(7462),a=r(2791),i=r(3733),u=r(8519),c=r(4419),s=r(6934),f=r(1402),p=r(4036),l=r(5878),h=r(1217);function v(n){return(0,h.Z)("MuiTypography",n)}(0,l.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=r(184),d=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Z=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(n,t){var r=n.ownerState;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t["align".concat((0,p.Z)(r.align))],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})((function(n){var t=n.theme,r=n.ownerState;return(0,o.Z)({margin:0},"inherit"===r.variant&&{font:"inherit"},"inherit"!==r.variant&&t.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})})),g={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=a.forwardRef((function(n,t){var r=(0,f.Z)({props:n,name:"MuiTypography"}),a=function(n){return y[n]||n}(r.color),s=(0,u.Z)((0,o.Z)({},r,{color:a})),l=s.align,h=void 0===l?"inherit":l,b=s.className,w=s.component,_=s.gutterBottom,P=void 0!==_&&_,k=s.noWrap,x=void 0!==k&&k,S=s.paragraph,O=void 0!==S&&S,T=s.variant,j=void 0===T?"body1":T,A=s.variantMapping,B=void 0===A?g:A,C=(0,e.Z)(s,d),E=(0,o.Z)({},s,{align:h,color:a,className:b,component:w,gutterBottom:P,noWrap:x,paragraph:O,variant:j,variantMapping:B}),I=w||(O?"p":B[j]||g[j])||"span",R=function(n){var t=n.align,r=n.gutterBottom,e=n.noWrap,o=n.paragraph,a=n.variant,i=n.classes,u={root:["root",a,"inherit"!==n.align&&"align".concat((0,p.Z)(t)),r&&"gutterBottom",e&&"noWrap",o&&"paragraph"]};return(0,c.Z)(u,v,i)}(E);return(0,m.jsx)(Z,(0,o.Z)({as:I,ref:t,ownerState:E,className:(0,i.Z)(R.root,b)},C))}))},6482:function(n,t,r){var e=(0,r(7107).Z)();t.Z=e},6934:function(n,t,r){r.d(t,{Dz:function(){return u},FO:function(){return i}});var e=r(4046),o=r(6482),a=r(988),i=function(n){return(0,e.x9)(n)&&"classes"!==n},u=e.x9,c=(0,e.ZP)({themeId:a.Z,defaultTheme:o.Z,rootShouldForwardProp:i});t.ZP=c},1402:function(n,t,r){r.d(t,{Z:function(){return i}});var e=r(7078),o=r(6482),a=r(988);function i(n){var t=n.props,r=n.name;return(0,e.Z)({props:t,name:r,defaultTheme:o.Z,themeId:a.Z})}},4036:function(n,t,r){var e=r(1122);t.Z=e.Z},5917:function(n,t,r){r.d(t,{Co:function(){return a},ZP:function(){return o}});var e=r(225);function o(n,t){return(0,e.Z)(n,t)}var a=function(n,t){Array.isArray(n.__emotion_styles)&&(n.__emotion_styles=t(n.__emotion_styles))}},4046:function(n,t,r){r.d(t,{ZP:function(){return k},x9:function(){return y}});var e=r(3433),o=r(9439),a=r(3366),i=r(7462),u=r(5917),c=r(5080),s=r(1122),f=["variant"];function p(n){return 0===n.length}function l(n){var t=n.variant,r=(0,a.Z)(n,f),e=t||"";return Object.keys(r).sort().forEach((function(t){e+="color"===t?p(e)?n[t]:(0,s.Z)(n[t]):"".concat(p(e)?t:(0,s.Z)(t)).concat((0,s.Z)(n[t].toString()))})),e}var h=r(104),v=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function m(n){return"string"===typeof n&&n.charCodeAt(0)>96}var d=function(n,t){return t.components&&t.components[n]&&t.components[n].styleOverrides?t.components[n].styleOverrides:null},Z=function(n,t){var r=[];t&&t.components&&t.components[n]&&t.components[n].variants&&(r=t.components[n].variants);var e={};return r.forEach((function(n){var t=l(n.props);e[t]=n.style})),e},g=function(n,t,r,e){var o,a=n.ownerState,i=void 0===a?{}:a,u=[],c=null==r||null==(o=r.components)||null==(o=o[e])?void 0:o.variants;return c&&c.forEach((function(r){var e=!0;Object.keys(r.props).forEach((function(t){i[t]!==r.props[t]&&n[t]!==r.props[t]&&(e=!1)})),e&&u.push(t[l(r.props)])})),u};function y(n){return"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n}var b=(0,c.Z)(),w=function(n){return n?n.charAt(0).toLowerCase()+n.slice(1):n};function _(n){var t,r=n.defaultTheme,e=n.theme,o=n.themeId;return t=e,0===Object.keys(t).length?r:e[o]||e}function P(n){return n?function(t,r){return r[n]}:null}function k(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.themeId,r=n.defaultTheme,c=void 0===r?b:r,s=n.rootShouldForwardProp,f=void 0===s?y:s,p=n.slotShouldForwardProp,l=void 0===p?y:p,k=function(n){return(0,h.Z)((0,i.Z)({},n,{theme:_((0,i.Z)({},n,{defaultTheme:c,themeId:t}))}))};return k.__mui_systemSx=!0,function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,u.Co)(n,(function(n){return n.filter((function(n){return!(null!=n&&n.__mui_systemSx)}))}));var s,p=r.name,h=r.slot,b=r.skipVariantsResolver,x=r.skipSx,S=r.overridesResolver,O=void 0===S?P(w(h)):S,T=(0,a.Z)(r,v),j=void 0!==b?b:h&&"Root"!==h&&"root"!==h||!1,A=x||!1;var B=y;"Root"===h||"root"===h?B=f:h?B=l:m(n)&&(B=void 0);var C=(0,u.ZP)(n,(0,i.Z)({shouldForwardProp:B,label:s},T)),E=function(r){for(var a=arguments.length,u=new Array(a>1?a-1:0),s=1;s<a;s++)u[s-1]=arguments[s];var f=u?u.map((function(n){return"function"===typeof n&&n.__emotion_real!==n?function(r){return n((0,i.Z)({},r,{theme:_((0,i.Z)({},r,{defaultTheme:c,themeId:t}))}))}:n})):[],l=r;p&&O&&f.push((function(n){var r=_((0,i.Z)({},n,{defaultTheme:c,themeId:t})),e=d(p,r);if(e){var a={};return Object.entries(e).forEach((function(t){var e=(0,o.Z)(t,2),u=e[0],c=e[1];a[u]="function"===typeof c?c((0,i.Z)({},n,{theme:r})):c})),O(n,a)}return null})),p&&!j&&f.push((function(n){var r=_((0,i.Z)({},n,{defaultTheme:c,themeId:t}));return g(n,Z(p,r),r,p)})),A||f.push(k);var h=f.length-u.length;if(Array.isArray(r)&&h>0){var v=new Array(h).fill("");(l=[].concat((0,e.Z)(r),(0,e.Z)(v))).raw=[].concat((0,e.Z)(r.raw),(0,e.Z)(v))}else"function"===typeof r&&r.__emotion_real!==r&&(l=function(n){return r((0,i.Z)({},n,{theme:_((0,i.Z)({},n,{defaultTheme:c,themeId:t}))}))});var m=C.apply(void 0,[l].concat((0,e.Z)(f)));return n.muiName&&(m.muiName=n.muiName),m};return C.withConfig&&(E.withConfig=C.withConfig),E}}},8519:function(n,t,r){r.d(t,{Z:function(){return s}});var e=r(3433),o=r(7462),a=r(3366),i=r(2466),u=r(7416),c=["sx"];function s(n){var t,r=n.sx,s=function(n){var t,r,e={systemProps:{},otherProps:{}},o=null!=(t=null==n||null==(r=n.theme)?void 0:r.unstable_sxConfig)?t:u.Z;return Object.keys(n).forEach((function(t){o[t]?e.systemProps[t]=n[t]:e.otherProps[t]=n[t]})),e}((0,a.Z)(n,c)),f=s.systemProps,p=s.otherProps;return t=Array.isArray(r)?[f].concat((0,e.Z)(r)):"function"===typeof r?function(){var n=r.apply(void 0,arguments);return(0,i.P)(n)?(0,o.Z)({},f,n):f}:(0,o.Z)({},f,r),(0,o.Z)({},p,{sx:t})}},418:function(n,t,r){var e=r(5080),o=r(9120),a=(0,e.Z)();t.Z=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return(0,o.Z)(n)}},7078:function(n,t,r){r.d(t,{Z:function(){return a}});var e=r(5735);var o=r(418);function a(n){var t=n.props,r=n.name,a=n.defaultTheme,i=n.themeId,u=(0,o.Z)(a);i&&(u=u[i]||u);var c=function(n){var t=n.theme,r=n.name,o=n.props;return t&&t.components&&t.components[r]&&t.components[r].defaultProps?(0,e.Z)(t.components[r].defaultProps,o):o}({theme:u,name:r,props:t});return c}},5902:function(n,t){var r=function(n){return n},e=function(){var n=r;return{configure:function(t){n=t},generate:function(t){return n(t)},reset:function(){n=r}}}();t.Z=e},4419:function(n,t,r){function e(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,e={};return Object.keys(n).forEach((function(o){e[o]=n[o].reduce((function(n,e){if(e){var o=t(e);""!==o&&n.push(o),r&&r[e]&&n.push(r[e])}return n}),[]).join(" ")})),e}r.d(t,{Z:function(){return e}})},1217:function(n,t,r){r.d(t,{Z:function(){return a}});var e=r(5902),o={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function a(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui",a=o[t];return a?"".concat(r,"-").concat(a):"".concat(e.Z.generate(n),"-").concat(t)}},5878:function(n,t,r){r.d(t,{Z:function(){return o}});var e=r(1217);function o(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui",o={};return t.forEach((function(t){o[t]=(0,e.Z)(n,t,r)})),o}},5735:function(n,t,r){r.d(t,{Z:function(){return o}});var e=r(7462);function o(n,t){var r=(0,e.Z)({},t);return Object.keys(n).forEach((function(a){if(a.toString().match(/^(components|slots)$/))r[a]=(0,e.Z)({},n[a],r[a]);else if(a.toString().match(/^(componentsProps|slotProps)$/)){var i=n[a]||{},u=t[a];r[a]={},u&&Object.keys(u)?i&&Object.keys(i)?(r[a]=(0,e.Z)({},u),Object.keys(i).forEach((function(n){r[a][n]=o(i[n],u[n])}))):r[a]=u:r[a]=i}else void 0===r[a]&&(r[a]=n[a])})),r}},3733:function(n,t,r){function e(n){var t,r,o="";if("string"==typeof n||"number"==typeof n)o+=n;else if("object"==typeof n)if(Array.isArray(n))for(t=0;t<n.length;t++)n[t]&&(r=e(n[t]))&&(o&&(o+=" "),o+=r);else for(t in n)n[t]&&(o&&(o+=" "),o+=t);return o}t.Z=function(){for(var n,t,r=0,o="";r<arguments.length;)(n=arguments[r++])&&(t=e(n))&&(o&&(o+=" "),o+=t);return o}}}]);
//# sourceMappingURL=890.05e9e578.chunk.js.map