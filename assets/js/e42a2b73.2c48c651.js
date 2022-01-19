"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6074],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,m=u["".concat(p,".").concat(d)]||u[d]||g[d]||a;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9147:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={id:"colorlog",title:"Colorlog plugin",sidebar_label:"Colorlog plugin"},p=void 0,c={unversionedId:"plugins/colorlog",id:"version-1.0/plugins/colorlog",isDocsHomePage:!1,title:"Colorlog plugin",description:"PyPI",source:"@site/versioned_docs/version-1.0/plugins/colorlog.md",sourceDirName:"plugins",slug:"/plugins/colorlog",permalink:"/docs/1.0/plugins/colorlog",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/plugins/colorlog.md",tags:[],version:"1.0",lastUpdatedBy:"Jasha10",lastUpdatedAt:1642551291,formattedLastUpdatedAt:"1/19/2022",frontMatter:{id:"colorlog",title:"Colorlog plugin",sidebar_label:"Colorlog plugin"},sidebar:"version-1.0/docs",previous:{title:"Customizing Application's help",permalink:"/docs/1.0/configure_hydra/app_help"},next:{title:"Joblib Launcher plugin",permalink:"/docs/1.0/plugins/joblib_launcher"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],g={toc:s};function u(e){var t=e.components,i=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/hydra-colorlog/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-colorlog",alt:"PyPI"})),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-colorlog",alt:"PyPI - License"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-colorlog",alt:"PyPI - Python Version"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-colorlog"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-colorlog.svg",alt:"PyPI - Downloads"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_colorlog/example"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_colorlog"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"}))),(0,a.kt)("p",null,"Adds ",(0,a.kt)("a",{class:"external",href:"https://github.com/borntyping/python-colorlog",target:"_blank"},"colorlog")," colored logs for ",(0,a.kt)("inlineCode",{parentName:"p"},"hydra/job_logging")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"hydra/hydra_logging"),"."),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra_colorlog --upgrade\n")),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Override ",(0,a.kt)("inlineCode",{parentName:"p"},"hydra/job_logging")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"hydra/hydra_logging")," your config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - hydra/job_logging: colorlog\n  - hydra/hydra_logging: colorlog\n")),(0,a.kt)("p",null,"See included ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_colorlog/example"},"example"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Colored log output",src:r(98).Z})))}u.isMDXComponent=!0},98:function(e,t,r){t.Z=r.p+"assets/images/colorlog-b20147697b9d16362f62a5d0bb58347f.png"}}]);