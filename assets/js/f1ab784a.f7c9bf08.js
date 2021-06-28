(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9633],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},l=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),d=c(r),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,a(a({ref:e},l),{},{components:r})):n.createElement(m,a({ref:e},l))}));function f(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=r.length,a=new Array(o);a[0]=d;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u.mdxType="string"==typeof t?t:i,a[1]=u;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3899:function(t,e,r){"use strict";r.d(e,{Z:function(){return s},T:function(){return c}});var n=r(2122),i=r(7294),o=r(6742),a=r(2263),u=r(907);function s(t){return i.createElement(o.Z,(0,n.Z)({},t,{to:(e=t.to,s=(0,u.zu)(),(0,a.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(r=null==s?void 0:s.name)?r:"current"]+e),target:"_blank"}));var e,r,s}function c(t){var e,r=null!=(e=t.text)?e:"Example";return i.createElement(s,t,i.createElement("span",null,"\xa0"),i.createElement("img",{src:"https://img.shields.io/badge/-"+r+"-informational",alt:"Example"}))}},4801:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a=r(3899),u=["components"],s={id:"intro",title:"Introduction to Structured Configs",sidebar_label:"Introduction to Structured Configs"},c=void 0,l={unversionedId:"tutorials/structured_config/intro",id:"tutorials/structured_config/intro",isDocsHomePage:!1,title:"Introduction to Structured Configs",description:"This is an advanced tutorial that assumes that you are comfortable with the concepts introduced in the Basic Tutorial.",source:"@site/docs/tutorials/structured_config/0_intro.md",sourceDirName:"tutorials/structured_config",slug:"/tutorials/structured_config/intro",permalink:"/docs/next/tutorials/structured_config/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/structured_config/0_intro.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1624910490,formattedLastUpdatedAt:"6/28/2021",sidebarPosition:0,frontMatter:{id:"intro",title:"Introduction to Structured Configs",sidebar_label:"Introduction to Structured Configs"},sidebar:"docs",previous:{title:"Tab completion",permalink:"/docs/next/tutorials/basic/running_your_app/tab_completion"},next:{title:"Minimal example",permalink:"/docs/next/tutorials/structured_config/minimal_example"}},p=[],d={toc:p};function f(t){var e=t.components,r=(0,i.Z)(t,u);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is an advanced tutorial that assumes that you are comfortable with the concepts introduced in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/tutorials/basic/your_first_app/simple_cli"},"Basic Tutorial"),".\nThe examples in this tutorial are available ",(0,o.kt)(a.Z,{to:"examples/tutorials/structured_configs",mdxType:"GithubLink"},"here"),"."),(0,o.kt)("p",null,"Structured Configs use Python ",(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/3.7/library/dataclasses.html"},"dataclasses")," to\ndescribe your configuration structure and types. They enable:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Runtime type checking")," as you compose or mutate your config "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Static type checking")," when using static type checkers (mypy, PyCharm, etc.)")),(0,o.kt)("h4",{id:"structured-configs-supports"},"Structured Configs supports:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Primitive types (",(0,o.kt)("inlineCode",{parentName:"li"},"int"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"bool"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"float"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"str"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Enums"),") "),(0,o.kt)("li",{parentName:"ul"},"Nesting of Structured Configs"),(0,o.kt)("li",{parentName:"ul"},"Containers (List and Dict) containing primitives or Structured Configs"),(0,o.kt)("li",{parentName:"ul"},"Optional fields")),(0,o.kt)("h4",{id:"structured-configs-limitations"},"Structured Configs Limitations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Union")," types are not supported (except ",(0,o.kt)("inlineCode",{parentName:"li"},"Optional"),")"),(0,o.kt)("li",{parentName:"ul"},"User methods are not supported")),(0,o.kt)("h4",{id:"there-are-two-primary-patterns-for-using-structured-configs"},"There are two primary patterns for using Structured configs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As a ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/tutorials/structured_config/minimal_example"},"config"),", in place of configuration files (often a starting place)"),(0,o.kt)("li",{parentName:"ul"},"As a ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/tutorials/structured_config/schema"},"config schema")," validating configuration files (better for complex use cases)")),(0,o.kt)("p",null,"With both patterns, you still get everything Hydra has to offer (config composition, Command line overrides etc).\nThis tutorial covers both. ","*",(0,o.kt)("strong",{parentName:"p"},"Read it in order"),"*","."),(0,o.kt)("p",null,"Hydra supports OmegaConf's Structured Configs via the ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigStore")," API.\nThis tutorial does not assume any knowledge of them.\nIt is recommended that you visit the ",(0,o.kt)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/structured_config.html",target:"_blank"},"OmegaConf Structured Configs page")," to learn more later."))}f.isMDXComponent=!0}}]);